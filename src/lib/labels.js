// Libellés courts par slug (pour chips, vignettes, maillage)
export const EXPERTISE_LABELS = {
  'bpo-courrier-entrant': 'Courrier entrant (BPO)',
  'numerisation-nf544': 'Numérisation NF 544',
  'archivage-electronique-nf461': 'Archivage SAE NF 461',
  'recommande-electronique-eidas': 'Recommandé électronique',
  'ged-documents-vivants': 'GED',
  'editique-confiance': 'Éditique & confiance',
};

export const SECTEUR_LABELS = {
  banque: 'Banque',
  'secteur-public': 'Secteur public',
  assurance: 'Assurance',
  'protection-sociale': 'Protection sociale',
  courtage: 'Courtage',
  collectivites: 'Collectivités',
};

// Mots-clés de veille rattachés à chaque expertise (maillage article ↔ expertise)
export const EXPERTISE_TAGS = {
  'bpo-courrier-entrant': ['BPO', 'courrier'],
  'numerisation-nf544': ['NF 544', 'copie fidèle', 'numérisation'],
  'archivage-electronique-nf461': ['NF 461', 'valeur probante', 'archivage', 'SAE'],
  'recommande-electronique-eidas': ['eIDAS', 'recommandé électronique', 'ERE', 'LRE'],
  'ged-documents-vivants': ['GED'],
  'editique-confiance': ['éditique', 'signature', 'KYC', '2D-Doc'],
};

// Slug stable par catégorie de veille (pas de dépendance aux accents)
export const CAT_SLUGS = {
  'Réglementation': 'reglementation',
  'Archivage & SAE': 'archivage-sae',
  'Courrier & BPO': 'courrier-bpo',
  'Signature & confiance': 'signature-confiance',
  'Secteur public': 'secteur-public',
};
export const slugifyCat = (c) =>
  CAT_SLUGS[c] || String(c).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export const expertiseLabel = (slug) => EXPERTISE_LABELS[slug] ?? slug;
export const secteurLabel = (slug) => SECTEUR_LABELS[slug] ?? slug;
