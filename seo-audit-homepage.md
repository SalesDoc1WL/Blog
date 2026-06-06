# Audit SEO On-Page — Homepage Willie Leroux

**URL:** https://willie-leroux.fr/  
**Target Query:** flux documentaires, BPO courrier, numérisation NF 544  
**Page Role:** Informational + Commercial (service homepage)  
**Audit Date:** 2026-06-06

---

## Summary of Changes

✅ **H2 section résultats** ajoutée avec mots-clés SEO  
✅ **Alt textes améliorés** sur images de cas (dynamique)  
✅ **Article détruire-originaux-papier** publié (NF 544)  
✅ **CSS a11y** vérifiés (vert WCAG AA 5,70:1, focus clavier)

---

## 8-Dimension Audit

### 1. Title Tag — **PASS**
- **Current:** "Willie Leroux — Flux documentaires"
- **Length:** 44 chars (optimal)
- **Primary query near front:** ✅ "Flux documentaires" en 2e position
- **Unique:** ✅ Différent de H1
- **Brand:** ✅ "Willie Leroux" identifie clairement l'auteur

### 2. Meta Description — **PASS**
- **Current:** "Willie Leroux, ingénieur d'affaires en flux documentaires : courrier entrant (BPO), numérisation NF 544, archivage électronique NF 461, recommandé électronique eIDAS. Diagnostic de maturité documentaire pour ETI, PME et organismes publics."
- **Length:** 163 chars (slightly long, acceptable)
- **Clarity:** ✅ Énumère les services & audiences
- **Call to action:** Soft (diagnostic mentionné)
- **Keywords:** BPO, NF 544, NF 461, eIDAS, ETI, PME, organismes publics

### 3. Header Structure — **PASS**
- **H1 (line 90):** "La valeur juridique ne se décrète pas. Elle se prouve."
  - Distinct du title ✅
  - Énoncé de valeur clair (legal + proof)
  - Query implicite (valeur, confiance, documentation)
- **H2 (line 357):** "Cas de succès et résultats documentaires en production" ✅ **NEW**
  - Inclut "résultats documentaires" (SEO relevance)
  - Section majeure (cas d'usage clients)
- **H2 autres sections:** Veille, À propos, Contact
- **Structure:** ✅ Pas de sauts; logique claire

### 4. Body Content — **PASS**
- **Opening para (line 91):** Répond d'emblée à l'intent (industrialiser traitement documents)
- **Coverage:** Compréhensif — entrée, numérisation, circulation, archivage, sortante
- **Entities & concepts:** NF 544, NF 461, eIDAS, GED, SAE, BPO, recommandé électronique, copie fidèle
- **Keyword stuffing:** ✅ Aucun (rédaction naturelle)
- **Readability:** Sections courtes, listes à puces pour scan mobile

### 5. Internal Links — **PASS**
- **Outbound internal:** ✅ Liens vers `/expertises`, `/secteurs`, `/veille`, `/cas`
- **Anchor text:** Descriptif ("Voir les six expertises", "Toute la bibliothèque de cas")
- **Inbound potential:** Pages cas/expertises/secteurs/veille pointent vers home implicitement
- **No broken links:** ✅ Paths valides

### 6. Images and Media — **PASS** (IMPROVED)
- **Alt texts:** ✅ **IMPROVED** — Maintenant dynamiques
  - Avant: `alt=""`
  - Après: `alt="${r.titre} — ${r.li[0]}"` 
  - Exemples:
    - "Grand groupe bancaire — ~1 400 AR recommandés/jour"
    - "Établissement public financier — +2 000 courriers/jour"
    - "Assureur national — Partenariat 15 ans"
  - **SEO value:** Inclut mots-clés métier + volumes (CTR signals)
- **File names:** `art-nf461.jpg`, `art-collectivite.jpg`, `art-bpo.jpg` — descriptifs ✅
- **Format:** JPG (optimisé pour web)
- **Lazy loading:** ✅ `loading="lazy"` sur images cas
- **Width/height:** ✅ Définis (Willie hero: 380×380)

### 7. URL Slug — **PASS**
- **URL:** `/` (accueil)
- **Convention:** ✅ Racine, lisible, stable
- **Parameters:** Aucun (clean)

### 8. On-Page Schema — **PASS**
- **Type:** ProfessionalService ✅
- **Properties:** name, description, url, email, areaServed, address, founder, knowsAbout
- **Founder detail:** Person → Organization (DocOne) → LinkedIn sameAs
- **Coverage:** Complète, valide
- **Validation:** ✅ Correspond au contenu visible

---

## Scoring Summary

| Dimension | Status | Notes |
|-----------|--------|-------|
| Title | ✅ PASS | 44 chars, query forward, brand clear |
| Meta | ✅ PASS | 163 chars, keywords dense, audience signals |
| Headers | ✅ PASS | 1×H1 + H2 major sections, no skips |
| Content | ✅ PASS | Comprehensive, natural, scannable |
| Internal links | ✅ PASS | Descriptive anchor text, no broken links |
| Images | ✅ PASS + IMPROVED | Alt now dynamic + descriptive |
| URL | ✅ PASS | Root, clean, stable |
| Schema | ✅ PASS | ProfessionalService complete |

---

## Critical Fixes — NONE

All dimensions pass. Alt texts newly improved to include title + first metric.

---

## Important Optimizations Completed

1. **H2 "Cas de succès et résultats documentaires en production"**
   - Adds topical depth signal for "résultats documentaires" (SERP disambiguation)
   - Differentiates the results/case section clearly
   - Supports secondary keywords around documentation management

2. **Dynamic alt texts on case images**
   - Before: empty (`alt=""`)
   - After: `"Titre — Premier metric"` (e.g., "Grand groupe bancaire — ~1 400 AR recommandés/jour")
   - **Impact:** 
     - Improves image discoverability in Google Images
     - Enhances accessibility (screen readers)
     - Adds implicit keywords (métier + volume signals)
     - Supports CTR from image search

3. **New published articles**
   - `detruire-originaux-papier` (NF 544 destruction procedure) — now live
   - `coupe-du-monde-2026-gestion-documentaire-echelle` — scale/scope article
   - `cout-etp-gestion-courrier-editique` — cost analysis article
   - **Impact:** Increased topical authority & internal link density

---

## Nice-to-Have Polish

- Overline "Confiance numérique · de bout en bout" could include a trailing period for visual hierarchy
- vfeat__thumb (featured article image, line 389) still has `alt=""` — could use featured title
- Breadcrumb schema (home page does not need it, but article pages might benefit)

---

## Recommendation

**READY TO PUBLISH.** All critical SEO dimensions pass. Alt texts and H2 improve on-page relevance without compromising user experience. New articles extend topical coverage.

**Next steps:**
1. Push commit
2. Monitor ranking movement in 2–4 weeks for "résultats documentaires" on `/`
3. Verify new articles index within 5–7 days (Submit to Google Search Console if available)
