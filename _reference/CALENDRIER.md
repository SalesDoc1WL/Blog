# Calendrier éditorial — veille (T2-T4 2026)

Cadence : 1 article tous les 15 jours (réaliste en solo). Catégories
renforcées de façon équilibrée sur l'existant. Chaque sujet a un angle
distinct pour éviter la concurrence interne entre articles.

## Couverture actuelle (rappel)

| Catégorie | Articles existants |
|---|---|
| Réglementation | nf544-copie-fidele |
| Archivage & SAE | ged-vs-sae, nf461-durees-conservation |
| Courrier & BPO | bpo-courrier-cout-cache |
| Signature & confiance | ere-lre-recommande-electronique, signature-electronique-niveaux-eidas |
| Secteur public | dematerialiser-courrier-collectivite |

## Programme

| # | Date | Catégorie | Titre de travail | Angle / douleur | Liens internes | Mot-clé cible |
|---|---|---|---|---|---|---|
| 1 | 2026-06-18 | Réglementation | Détruire ses originaux papier : la procédure pour le faire sans risque | On numérise mais on garde le papier « au cas où » | /expertises/numerisation-nf544, /expertises/archivage-electronique-nf461 | destruction originaux papier |
| 2 | 2026-07-02 | Archivage & SAE | Coffre-fort numérique ou SAE : ce que chacun garantit vraiment | Confusion fréquente entre les deux | /expertises/archivage-electronique-nf461, /expertises/editique-confiance | coffre-fort numérique vs SAE |
| 3 | 2026-07-16 | Courrier & BPO | Externaliser le courrier entrant : ce qui part, ce qui reste en interne | Peur de perdre la maîtrise | /expertises/bpo-courrier-entrant, /expertises/ged-documents-vivants | externalisation courrier entrant |
| 4 | 2026-07-30 | Secteur public | Marchés publics : où la dématérialisation bloque encore | Chaîne incomplète, retours papier | /secteurs/secteur-public, /expertises/recommande-electronique-eidas | dématérialisation marchés publics |
| 5 | 2026-08-13 | Signature & confiance | Cachet électronique : la « signature » des organisations | On confond avec la signature de personne | /expertises/editique-confiance, /expertises/recommande-electronique-eidas | cachet électronique |
| 6 | 2026-08-27 | Réglementation | RGPD : la durée de conservation n'est pas la durée d'archivage | Deux logiques opposées mélangées | /expertises/archivage-electronique-nf461, /expertises/ged-documents-vivants | durée conservation RGPD |
| 7 | 2026-09-10 | Secteur public | Délibérations et actes : les archiver à valeur probante | Risque d'inopposabilité côté public | /expertises/archivage-electronique-nf461, /secteurs/collectivites | archivage délibérations |
| 8 | 2026-09-24 | Courrier & BPO | Courrier hybride : adresser du papier sans l'imprimer | Volume papier sortant coûteux | /expertises/editique-confiance, /expertises/bpo-courrier-entrant | courrier hybride |
| 9 | 2026-10-08 | Archivage & SAE | Verser au SAE : 4 erreurs qui ruinent la valeur probante | Versement mal préparé | /expertises/archivage-electronique-nf461, /expertises/numerisation-nf544 | versement SAE erreurs |
| 10 | 2026-10-22 | Signature & confiance | Horodatage qualifié : la preuve de la date | Brique oubliée de la confiance | /expertises/recommande-electronique-eidas, /expertises/editique-confiance | horodatage qualifié |

## Points de vigilance (anti-cannibalisation)

- **#6 (RGPD)** : bien le différencier de `nf461-durees-conservation`.
  Cet article traite l'opposition purge RGPD vs conservation probatoire ;
  l'existant traite les durées par type de document. Croiser un lien entre
  les deux, pas dupliquer.
- **#1** : ne pas réexpliquer la copie fidèle (déjà dans `nf544`), partir
  d'elle pour traiter la procédure de destruction.
- **#5 et #10** : la catégorie Signature & confiance atteindra 4 articles ;
  vérifier le maillage croisé pour qu'ils se renforcent.

## Production (par article)

1. `/blog write <titre de travail>` dans le repo site-willie.
2. Coller le frontmatter au format Astro (voir BRAND.md), catégorie exacte.
3. Insérer les liens internes prévus dans la colonne dédiée.
4. Relire : 380-420 mots, un seul enjeu, encadré final, CTA /#contact.
5. `./publish.sh <fichier>.md`.
