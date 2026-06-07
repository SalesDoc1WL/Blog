# Site Willie Leroux — Flux documentaires

Site de génération de leads et de présentation de profil pour **Willie Leroux**, ingénieur d'affaires en flux documentaires (positionnement DocOne). Construit avec [Astro](https://astro.build), déployé sur **GitHub Pages**.

Le contenu (expertises, secteurs, cas, veille) est en **Markdown** : publier = créer/éditer un fichier `.md` puis `git push`.

---

## Démarrer en local

```bash
npm install
npm run dev      # http://localhost:4321/<repo>/
npm run build    # génère dist/
npm run preview  # prévisualise le build
```

> Le site utilise un `base` (sous-dossier GitHub Pages). En local, l'URL inclut donc `/<repo>/`.

---

## Structure

```
src/
  content/
    expertises/   # 6 pages expertise (.md)
    secteurs/     # 6 pages secteur (.md)
    cas/          # bibliothèque de cas (.md)
    veille/       # blog de veille (.md)
    config.ts     # schémas + taxonomie (valeurs contrôlées)
  components/     # Header, Footer, Breadcrumb, DiagnosticCTA, CasCard, Contact...
  layouts/        # BaseLayout (SEO, OG, JSON-LD)
  pages/          # routes (index, expertises, secteurs, cas, veille, rss.xml)
  lib/            # url() (gère le base), labels, contacts
  styles/         # tokens.css + global.css (design system DocOne / codes DSFR)
public/
  img/willie.jpg  # photo hero
  scripts/reveal.js  # apparition au scroll + compteurs
```

---

## Publier du contenu

### Un article de veille
Créer `src/content/veille/mon-article.md` :

```markdown
---
titre: "Mon titre"
description: Résumé pour le référencement et les cartes.
categorie: Réglementation        # une des catégories de src/content/config.ts
tags: [NF 544, archivage]
pubDate: 2026-06-10
draft: false                     # true = non publié
---

Le corps de l'article en Markdown…
```

Le **maillage** (expertise ↔ secteur ↔ veille) se met à jour automatiquement au build à partir des `secteur`/`expertises`/`tags`.

### Une expertise / un secteur
Mêmes principes — voir les fichiers existants dans `src/content/expertises` et `src/content/secteurs`. Un nouveau slug doit être ajouté à `EXPERTISE_SLUGS` / `SECTEUR_SLUGS` dans `src/content/config.ts`.

---

## Déploiement GitHub Pages

1. Créer un dépôt GitHub (public), p. ex. `site-willie`, et y pousser ce dossier.
2. Dans **Settings → Pages**, choisir **Source : GitHub Actions**.
3. Pousser sur `main` : le workflow `.github/workflows/deploy.yml` build et publie automatiquement.
4. URL : `https://<user>.github.io/<repo>/`.

Le workflow injecte `SITE_USER` (propriétaire du dépôt) et `REPO` (nom du dépôt) pour aligner `site` + `base`. Pour un build local fidèle, on peut faire :

```bash
SITE_USER=tonuser REPO=site-willie npm run build
```

> **Domaine personnalisé** : ajouter un fichier `public/CNAME` contenant le domaine, mettre `base: '/'` dans `astro.config.mjs`, et configurer le DNS. À faire quand le nom de domaine sera choisi.

---

## Formulaire de contact

Site statique → pas de backend. Pour activer l'envoi d'e-mails :

1. Créer un formulaire gratuit sur [Formspree](https://formspree.io).
2. Renseigner `FORMSPREE_ID` (et `EMAIL` pour le fallback) dans `src/lib/url.js`.

Tant que `FORMSPREE_ID` est vide, le formulaire renvoie vers Calendly et le bouton met en avant la prise de RDV.

---

## Notes

- Design system : charte DocOne (vert `#00906C`), police Marianne, codes du Système de Design de l'État **sans** bloc-marque officiel.
- Liens : Calendly et LinkedIn centralisés dans `src/lib/url.js`.
- SEO : meta + Open Graph par page, JSON-LD (Person/Service/BlogPosting/Breadcrumb), `sitemap-index.xml` et `rss.xml` générés au build.
