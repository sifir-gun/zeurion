---
name: audit-niche-reddit
description: Auditer manuellement une niche Reddit pour la phase 0 de Zeurion, de la collecte des signaux de douleur jusqu'à la recommandation Go/No-Go. Utiliser quand Guney veut évaluer une niche, analyser des subreddits, comparer des douleurs ou choisir la venture de la phase 0.
---

# Audit de niche Reddit (phase 0 Zeurion)

Objectif : produire à la main ce que les niveaux 0 et 1 de l'usine feront plus tard. Chaque geste accompli ici alimente le cahier des charges de l'automatisation. Documenter le geste autant que le résultat.

## Entrées

Demander si absent : le thème ou la niche pressentie, les subreddits candidats, l'archétype visé (Volume par défaut en phase 0).

## Étapes

1. Collecte des signaux. Parcourir les subreddits candidats, relever les posts exprimant une douleur récurrente. Pour chaque signal : permalien, extrait court, intensité perçue, fréquence.
2. Clustering des douleurs. Regrouper les signaux en clusters de douleur distincts. Nommer chaque cluster par la douleur, pas par la solution.
3. Validation externe. Pour le cluster principal : confirmer la douleur sur au moins deux sources indépendantes de Reddit (avis logiciels, forums métier, recherches). Noter les contradictions autant que les confirmations.
4. Scoring /100. Grille en six critères, pondérations notées explicitement pour que le score soit rejouable : intensité et fréquence de la douleur, volonté de payer observée, intensité concurrentielle, faisabilité de build dans un golden path, accessibilité de l'audience, acquisition autonome exécutable (au moins deux canaux de la liste blanche : SEO programmatique, annuaires et marketplaces d'outils, contenu comparatif). Une niche sans canal exécutable est rejetée quel que soit le reste.
5. Corridor de prix. Relever les prix pratiqués (pages pricing, plateformes d'avis, boutiques d'applications) : plancher, médiane, plafond, avec sources.
6. Unit economics. Estimer le coût de service par client par mois (appels LLM par usage type multipliés par le coût par appel, plus quote-part infra), puis la marge brute contre le corridor. Marge sous le plancher : No-Go automatique, quel que soit le score.
7. Verdict. Recommandation Go/No-Go argumentée. Le Go reste une décision humaine (L2) : présenter les faits, recommander, ne pas décider.

## Contraintes

- API Reddit officielle ou navigation publique uniquement, quotas respectés.
- Jamais de contact avec les auteurs des posts sources (interdit L3).
- Extraits courts et permaliens uniquement, pas de contenu tiers intégral stocké, pas de pseudonymes en clair.
- Respecter .claude/rules/zeurion-garde-fous.md.

## Sortie

Fichier projects/zeurion/niches/<slug>-audit.md reprenant les sept étapes, avec sources. Si le verdict est retenu par Guney, proposer une entrée dans decisions/log.md.
