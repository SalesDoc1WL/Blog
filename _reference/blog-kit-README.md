# Kit blog veille — site-willie (Astro / GitHub Pages)

Kit prêt à déployer pour produire et publier les articles de la collection
`veille` du site willie-leroux.fr, avec Claude Code + le skill `claude-blog`.

## Contenu

| Fichier | Rôle | Où le placer |
|---|---|---|
| `BRAND.md` | Contexte de marque (auto-chargé par le skill) | racine du repo `site-willie` |
| `VOICE.md` | Règles de voix (auto-chargé par le skill) | racine du repo `site-willie` |
| `publish.sh` | Publication 1 commande + validation anti-build-cassé | racine du repo `site-willie` |
| `CALENDRIER.md` | 10 sujets planifiés (T2-T4 2026) | racine ou dossier `_reference/` |
| `signature-electronique-niveaux-eidas.md` | Article-test prêt à publier | à publier via `publish.sh` |

## Mise en place (une fois)

```bash
# Depuis la racine de ton repo site-willie, après avoir copié les fichiers du kit :
chmod +x publish.sh
git add BRAND.md VOICE.md CALENDRIER.md publish.sh
git commit -m "blog: kit éditorial veille"
git push
```

Pré-requis : Claude Code installé + skill `claude-blog` installé
(`git clone` du repo officiel, `git checkout v1.9.1`, `./install.sh`,
redémarrage de Claude Code). N'active pas les modules NotebookLM / images /
Google API : ils ne servent pas ici et réduisent la surface de risque.

## Workflow par article

1. Ouvre Claude Code à la racine de `site-willie` (BRAND.md + VOICE.md sont
   alors chargés automatiquement dans le contexte).
2. `/blog write <titre du calendrier>`.
3. Remplace le frontmatter par le format Astro de BRAND.md (noms français,
   `categorie` dans la liste fermée). Pas de titre H1 dans le corps.
4. Insère les liens internes prévus dans CALENDRIER.md.
5. Relis : 380-420 mots, un seul enjeu, encadré `>` final, CTA `/#contact`.
6. `./publish.sh src/chemin/vers/article.md`
   → le script valide les champs + la catégorie, puis pousse sur `main`.
7. GitHub Actions reconstruit et déploie automatiquement (~1-2 min).

## Garde-fou

`publish.sh` refuse de pousser si un champ obligatoire manque ou si la
catégorie n'est pas dans la liste autorisée. Le déploiement ne casse donc
jamais à cause d'un frontmatter invalide.

## Publier l'article-test fourni

```bash
# Vérifie la pubDate, puis :
./publish.sh signature-electronique-niveaux-eidas.md
```

(Catégorie « Signature & confiance » — absente du site à ce jour.)
