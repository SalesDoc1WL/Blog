// Préfixe le `base` GitHub Pages à un chemin interne.
// Usage : url('/expertises') -> '/site-willie/expertises'
const BASE = import.meta.env.BASE_URL; // ex: '/site-willie/'

export function url(path = '/') {
  const base = BASE.replace(/\/$/, '');
  if (!path.startsWith('/')) path = '/' + path;
  return base + path;
}

// Liens externes / contacts réutilisés partout
export const CALENDLY = 'https://calendly.com/willie-leroux38/30min';
export const LINKEDIN = 'https://www.linkedin.com/in/willie-leroux-docone/';
export const LIEU = 'Mérignac, Nouvelle-Aquitaine';
// Formspree : remplacer par l'ID réel une fois l'email pro fourni. Vide => fallback mailto.
export const FORMSPREE_ID = '';
export const EMAIL = ''; // ex: 'willie.leroux@exemple.fr' pour le fallback mailto
