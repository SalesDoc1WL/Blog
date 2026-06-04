// Apparition au scroll + compteurs animés (une fois à l'entrée dans le viewport)
function initReveal() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  if (reduce) { reveals.forEach((el) => el.classList.add('in')); }
  else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  }

  // Compteurs : <span class="num" data-to="2000" data-suffix="+">0</span>
  const nums = document.querySelectorAll('[data-to]');
  const animate = (el) => {
    const to = parseFloat(el.dataset.to);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    if (reduce) { el.textContent = prefix + to.toLocaleString('fr-FR') + suffix; return; }
    const dur = 1400; const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(to * eased).toLocaleString('fr-FR') + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io2 = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { animate(e.target); io2.unobserve(e.target); } });
  }, { threshold: 0.5 });
  nums.forEach((el) => io2.observe(el));
}

// Menu burger mobile
function initBurger() {
  const b = document.querySelector('.burger');
  const nav = document.getElementById('primary-nav');
  if (!b || !nav) return;
  b.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    b.setAttribute('aria-expanded', String(open));
  });
}

document.addEventListener('DOMContentLoaded', () => { initReveal(); initBurger(); });
