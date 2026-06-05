# BRAND.md

Contexte de marque chargé par claude-blog pour la production des articles
de la collection `veille` du site willie-leroux.fr.

## Identité

Willie Leroux, ingénieur commercial spécialisé en flux documentaires
(physiques + numériques). Le blog "veille" est un espace pédagogique qui
décrypte les enjeux de dématérialisation pour des décideurs, sans jargon
inutile ni argumentaire produit.

## Audience

Décideurs en ETI/PME et secteur public : direction financière, direction
des systèmes d'information, direction générale, secrétariat général.
Niveau de lecture : professionnel, pressé, pragmatique. Ils veulent
comprendre un enjeu, pas lire une brochure.

## Promesse éditoriale

Chaque article clarifie UN point (une norme, un concept, un coût caché) et
montre concrètement comment le traiter. L'objectif est la crédibilité et
la demande entrante de "diagnostic de maturité documentaire", jamais la
vente directe.

## Périmètre des sujets

Numérisation/copie fidèle, archivage à valeur probante, courrier entrant
et externalisation de traitement, recommandé électronique, gestion et
gouvernance documentaire, réglementation associée, applications par
secteur.

## Catégories autorisées (valeur EXACTE pour le frontmatter)

Une seule par article, choisie dans cette liste fermée :
- Réglementation
- Archivage & SAE
- Courrier & BPO
- Signature & confiance
- Secteur public

## Frontmatter à produire (schéma Astro strict — ne pas dévier)

```yaml
---
titre: "Titre concret, sans superlatif"
description: "Méta description factuelle, 1 à 2 phrases."
categorie: "Courrier & BPO"
tags: [terme1, terme2, terme3]
pubDate: AAAA-MM-JJ
draft: false
---
```

Ne jamais utiliser les noms anglais (`title`, `date`, `author`, `canonical`,
`tags` en doublon, etc.) : le site ne les reconnaît pas et le build échoue.
Pas de titre H1 dans le corps (le gabarit du site l'ajoute).

## Liens internes (à privilégier, 1 à 3 par article)

Expertises : `/expertises/numerisation-nf544`,
`/expertises/archivage-electronique-nf461`,
`/expertises/bpo-courrier-entrant`, `/expertises/ged-documents-vivants`,
`/expertises/recommande-electronique-eidas`,
`/expertises/editique-confiance`.

Secteurs : `/secteurs/banque`, `/secteurs/assurance`,
`/secteurs/collectivites`, `/secteurs/secteur-public`,
`/secteurs/protection-sociale`, `/secteurs/courtage`.

Appel à l'action final : `/#contact`.

## Interdits

- Aucun client nommé. Référence aux retours d'expérience uniquement de
  façon anonymisée ("une collectivité", "un acteur bancaire") ou via un
  lien `/cas/<slug>` déjà anonymisé.
- Pas de survente, pas de promesse chiffrée non sourcée.
- Pas d'anglicismes hors acronymes tolérés (voir VOICE.md).
