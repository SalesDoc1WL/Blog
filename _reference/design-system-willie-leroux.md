# Design System & Brief — Site CV / Génération de leads
**Willie Leroux — Ingénieur d'affaires, flux documentaires**
*Version validée : structure « Système de Design de l'État » (DSFR) + charte couleur DocOne.*

> À déposer dans Claude Design. Tout le contenu est rédigé et prêt. Garde-fou juridique : on s'inspire des codes du DSFR (Marianne, structure institutionnelle) **sans** reproduire le bloc-marque « République Française » ni la Marianne tricolore, réservés aux sites de l'État.

---

## 1. Direction créative
Registre **institutionnel et rassurant**, calé sur les codes de l'administration française, à la charte couleur DocOne (vert + gris). Objectif : crédibiliser auprès des DAF, DSI, DG, DGA et Secrétaires Généraux, notamment du secteur public. Structure carrée, rigoureuse, lisible ; couleur employée comme signal, pas en décor.

---

## 2. Tokens

### Couleurs
| Token | Hex | Usage |
|---|---|---|
| `--vert` | `#00906C` | Couleur principale : boutons, bandes, liserés, stats |
| `--vert-h` | `#006E52` | Survol des éléments verts |
| `--vert-a` | `#00543F` | État actif |
| `--vert-elec` | `#00C896` | Accent lumineux ponctuel |
| `--gris` | `#707070` | Second ton du logo, liseré, libellés |
| `--gris-fonce` | `#4A4A4A` | Badges de normes |
| `--t1` | `#161616` | Titres |
| `--t2` | `#3A3A3A` | Texte courant |
| `--t-mention` | `#666666` | Mentions, légendes |
| `--bg` | `#FFFFFF` | Fond |
| `--alt` | `#F5F7F6` | Sections alternées, champs |
| `--callout` | `#EDF6F2` | Encarts (vert très clair) |
| `--border` | `#DDDDDD` | Bordures |

Liseré de marque (header + footer) : bande verticale `linear-gradient(var(--vert) 0 50%, var(--gris) 50% 100%)`.

### Typographie
- **Marianne** (Regular 400 / Medium 500 / Bold 700) pour titres et texte. Chargée via CDN : `https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.13.0/dist/fonts/Marianne-*.woff2`. Repli : Arial, sans-serif.
- Sur-titres (« overline ») en 0.875 rem, gras, vert, majuscules.
- Échelle : H1 clamp(2rem,4.4vw,3rem) / titres de section clamp(1.6rem,3.2vw,2.25rem) / corps 1 rem / intro 1.1–1.25 rem.

### Formes & motion
- **Coins carrés** (radius 0), bordures 1 px nettes, soulignements 2–4 px.
- Transitions courtes (0.15 s). Apparition au scroll (fondu + translation 14 px). Compteurs animés une fois à l'entrée dans le viewport.

---

## 3. Composants
- **Header** : liseré vert/gris + nom « Willie Leroux » / sous-titre « Flux documentaires », navigation ancrée, bouton vert « Réserver un échange ». Pas de bloc-marque officiel.
- **Boutons** : carrés. Primaire vert plein ; secondaire contour vert ; flèche en suffixe.
- **Tuiles d'expertise** : fond blanc, liseré bas vert 4 px, libellé de norme, titre, phrase.
- **Bande Diagnostic** : pleine couleur verte, texte blanc, CTA blanc.
- **Stats** : grand chiffre vert, filet haut vert 3 px, libellé.
- **Cartes Références** : fond blanc bordé, étiquette secteur, liste à puces fléchées.
- **Parcours** : encarts callout vert clair à barre latérale verte.
- **Champs** : fond alt, soulignement bas, focus outline 2 px vert.
- **Footer** : filet haut vert, liseré de marque, liens, mention.
- **Badges de normes** : NF 544 · NF 461 · NF K11-112 · ISO 9001 · ISO 27001 · HDS · eIDAS, en gris foncé.

---

## 4. Architecture (une page, sections ancrées)
1. Header · 2. Hero (accroche-question + photo + CTA) · 3. Bandeau normes · 4. Positionnement · 5. Expertises (6 tuiles) · 6. Diagnostic (bande verte) · 7. Résultats (stats + 6 références) · 8. Parcours · 9. Contact (formulaire + RDV + LinkedIn) · 10. Footer.

---

## 5. Contenu (prêt à intégrer)

**Hero**
- Sur-titre : `Flux documentaires · entrants & sortants`
- Titre : Combien de jours entre l'arrivée d'un courrier et sa prise en compte réelle ?
- Sous-titre : J'aide les directions d'ETI, de PME et d'organismes publics à industrialiser le traitement de leurs documents, du courrier entrant jusqu'à l'archivage à valeur probante.
- CTA : Réserver 30 min -> https://calendly.com/willie-leroux38/30min · Voir mes expertises
- Légende photo : Willie Leroux — Ingénieur d'affaires, Mérignac (33)

**Positionnement** — Vos documents circulent encore trop lentement.
J'interviens auprès des DAF, DSI, DG, DGA et Secrétaires Généraux d'organisations de 50 à 5 000 collaborateurs. Le point commun : un courrier entrant traité à la main, des délais qui s'allongent, des archives dont la valeur juridique n'est pas garantie. Mon rôle est de cartographier ces flux et de les remettre sous contrôle.

**Expertises (6 tuiles)**
| Norme | Titre | Phrase |
|---|---|---|
| BPO | Courrier entrant externalisé | Tri, numérisation, indexation et distribution numérique, de bout en bout. |
| NF 544 | Numérisation copie fidèle | Copie numérique juridiquement opposable, destruction des originaux papier. |
| NF 461 | Archivage électronique (SAE) | Intégrité, traçabilité et force probante sur toute la durée de conservation. |
| eIDAS | Recommandé électronique | Envoi recommandé dématérialisé, conforme et opposable (ERE / LRE). |
| GED | Documents vivants | Documents centralisés, accessibles et partagés. |
| KYC · 2D-Doc | Éditique & confiance | Marketing direct, signature électronique, identification client, cachet 2D-Doc. |

**Diagnostic** — Un échange de 30 à 60 minutes pour cartographier vos flux.
Sans démonstration produit, sans engagement. On regarde ensemble comment vos documents entrent, circulent et sont conservés, et où se trouvent les points de friction. Vous repartez avec une vision claire de votre maturité documentaire et des premières pistes. CTA : Réserver mon créneau.

**Résultats — stats animées**
- 2 000+ courriers/jour — établissement public financier
- 15 ans de partenariat — assureur national
- 30 000 plis postaux/an — acteur du financement
- 6 normes & certifications mobilisées

**Résultats — références (anonymisées)**
- Banque — Un grand groupe bancaire : ~1 400 AR recommandés/jour ; copie fidèle NF 544 ; SAE NF 461.
- Secteur public — Un établissement public financier : +2 000 courriers/jour (recommandés, sensibles, PND, TSA) ; traitement centralisé.
- Assurance — Un assureur national : partenariat 15 ans ; ~300 AR recommandés/jour ; 650 Go en SAE.
- Protection sociale — Groupes paritaires & mutuelles : plusieurs millions de plis/an ; réception, tri, indexation, classification.
- Courtage — Un courtier en assurances (Est) : dématérialisation du courrier entrant ; 300 messages/jour ; back office libéré.
- Collectivités — Secteur public local : copie fidèle NF 544 de dossiers sensibles ; courrier entrant d'une régie des eaux ; archivage à valeur probante pour un service public.

**Parcours**
- 2025 -> aujourd'hui · Mérignac — Ingénieur d'affaires, flux documentaires : BPO courrier, NF 544, NF 461, eIDAS, éditique, signature électronique.
- 2023 -> 2024 · Nouméa — Responsable de compte GED / Reprographie : transition numérique d'acteurs publics et privés ; pilotage client en contexte de crise majeure.

**Contact**
- Formulaire : Nom · Organisation · Fonction · E-mail professionnel · Message.
- Mention RGPD : données utilisées uniquement pour recontacter, jamais cédées.
- Liens : RDV https://calendly.com/willie-leroux38/30min · LinkedIn https://www.linkedin.com/in/willie-leroux-docone/ · Mérignac, Nouvelle-Aquitaine.

---

## 6. À fournir pour finaliser
- E-mail professionnel (sinon conversions = Calendly + LinkedIn).
- Brancher le formulaire sur une messagerie/outil maîtrisé (ne pas envoyer vers un service tiers non contrôlé).
- Remplacer les chiffres si tu disposes de résultats plus récents.

---

## 7. Instruction de lancement Claude Design
> « Construis une landing page une-page à partir de ce design system et de ce contenu. Codes du Système de Design de l'État (police Marianne, structure carrée, composants institutionnels), couleur principale vert #00906C (charte DocOne), liseré vert/gris, sans bloc-marque officiel de l'État. Sections dans l'ordre du §4. Hero avec photo, tuiles d'expertise à liseré bas, bande Diagnostic verte pleine, stats animées, cartes de références anonymisées, parcours en encarts, formulaire de contact RGPD. Mobile d'abord, coins carrés, bordures fines. »
