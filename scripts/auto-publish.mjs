#!/usr/bin/env node
/**
 * auto-publish.mjs — publie auto l'article du jour selon le calendrier.
 *
 * Cherche dans src/content/veille/ un fichier avec pubDate = aujourd'hui,
 * retire le flag draft: true si présent, et le laisse en stage pour CI.
 *
 * Usage : node scripts/auto-publish.mjs (lancé par .github/workflows/auto-publish.yml)
 */

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const VEILLE_DIR = join(resolve('.'), 'src', 'content', 'veille');

// Format date ISO (YYYY-MM-DD) pour la comparaison
const today = new Date().toISOString().split('T')[0];

console.log(`🤖 Auto-publish : cherche article pour ${today}`);

// Lis tous les fichiers .md de veille
const files = readdirSync(VEILLE_DIR)
  .filter((f) => f.endsWith('.md'))
  .map((f) => join(VEILLE_DIR, f));

let published = false;

for (const file of files) {
  const raw = readFileSync(file, 'utf8');
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) continue;

  const fm = {};
  for (const line of fmMatch[1].split(/\r?\n/)) {
    const m = line.match(/^([a-z]+):\s*(.*)$/i);
    if (m) fm[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }

  // Article pour aujourd'hui ?
  if (fm.pubDate !== today) continue;

  console.log(`   Trouvé : ${fm.titre || 'sans titre'}`);

  // Retire draft: true si présent
  const withoutDraft = raw.replace(/^draft:\s*true\s*$/m, 'draft: false');
  if (withoutDraft !== raw) {
    writeFileSync(file, withoutDraft, 'utf8');
    console.log(`   ✓ Draft retiré, article prêt pour production`);
    published = true;
  } else if (fm.draft !== 'true') {
    console.log(`   ✓ Article déjà public (draft: false)`);
    published = true;
  }
}

if (!published) {
  console.log(`   Aucun article à publier aujourd'hui.`);
  process.exit(0);
}

console.log(`\n✅ Article(s) mis en stage pour publication (CI).\n`);
