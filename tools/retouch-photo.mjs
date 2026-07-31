// Retouche portrait : upscale + sharpen + fond blanc -> transparent.
// Fond retiré par flood-fill depuis les bords (préserve la chemise blanche
// qui n'est pas connectée au bord). Bande de feather pour un bord net mais doux.
import sharp from "sharp";

const SRC = "public/img/willie-portrait.jpg";
const OUT = "public/img/willie-portrait.png";

const TARGET = 900;          // upscale cible (px)
const TOL_FULL = 30;         // distance au blanc -> totalement transparent
const TOL_EDGE = 60;         // bande de feather -> alpha partiel

const base = sharp(SRC)
  .resize(TARGET, TARGET, { fit: "cover", kernel: "lanczos3" })
  .sharpen({ sigma: 1.1, m1: 0.6, m2: 2.2 })   // unsharp mask
  .modulate({ brightness: 1.0, saturation: 1.06 });

const { data, info } = await base.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info; // C = 4

const distWhite = (i) => {
  const r = 255 - data[i], g = 255 - data[i + 1], b = 255 - data[i + 2];
  return Math.sqrt(r * r + g * g + b * b);
};

// Flood-fill BFS depuis les 4 coins sur pixels quasi-blancs
const bg = new Uint8Array(W * H); // 1 = fond
const stack = [];
const push = (x, y) => {
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const p = y * W + x;
  if (bg[p]) return;
  if (distWhite(p * C) <= TOL_EDGE) { bg[p] = 1; stack.push(p); }
};
// Amorce depuis le HAUT et les CÔTÉS seulement. PAS le bord bas :
// le sujet (chemise blanche) touche le bas de la photo, sinon le fond
// "coulerait" dans la chemise et la rendrait transparente.
for (let x = 0; x < W; x++) { push(x, 0); }
for (let y = 0; y < H; y++) { push(0, y); push(W - 1, y); }

while (stack.length) {
  const p = stack.pop();
  const x = p % W, y = (p / W) | 0;
  push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1);
}

// Sépare la chemise blanche du fond blanc (connectés par un pont blanc).
// Méthode : sujet = pixel non-blanc (skin/veste/cheveux). Pour chaque ligne,
// on repère l'étendue du sujet [L..R]. Un pixel blanc ENTRE L et R est
// encadré par le sujet (chemise entre les revers) -> on le garde opaque.
// Un pixel blanc hors de [L..R] est du vrai fond -> transparent.
const subj = (p) => distWhite(p * C) > TOL_EDGE;
const L = new Int32Array(H).fill(-1);
const R = new Int32Array(H).fill(-1);
for (let y = 0; y < H; y++) {
  let l = -1, r = -1;
  for (let x = 0; x < W; x++) {
    if (subj(y * W + x)) { if (l < 0) l = x; r = x; }
  }
  L[y] = l; R[y] = r;
}
const MIN_SPAN = 0.14 * W;
const enclosed = (x, y) => L[y] >= 0 && (R[y] - L[y]) > MIN_SPAN && x > L[y] && x < R[y];

// Applique alpha : fond -> feather selon distance ; sujet -> opaque
let cleared = 0;
for (let p = 0; p < W * H; p++) {
  if (!bg[p]) continue;
  const x = p % W, y = (p / W) | 0;
  if (enclosed(x, y)) continue; // chemise/intérieur : reste opaque
  const i = p * C;
  const d = distWhite(i);
  let a;
  if (d <= TOL_FULL) a = 0;
  else if (d >= TOL_EDGE) a = 255;
  else a = Math.round(((d - TOL_FULL) / (TOL_EDGE - TOL_FULL)) * 255);
  data[i + 3] = a;
  if (a < 255) cleared++;
}

await sharp(data, { raw: { width: W, height: H, channels: C } })
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log(`OK -> ${OUT} (${W}x${H}, ${cleared} px fond traités)`);
