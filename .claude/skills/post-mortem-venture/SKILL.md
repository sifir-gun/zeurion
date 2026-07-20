---
name: post-mortem-venture
description: Rédiger le post-mortem structuré d'une venture Zeurion arrêtée et en extraire les leçons pour le scoring. Utiliser quand une venture est tuée ou abandonnée, ou quand Guney demande un bilan d'échec ou de fin de venture, y compris pour la venture manuelle de la phase 0.
---

# Post-mortem de venture

Objectif : transformer chaque arrêt en apprentissage exploitable. Le post-mortem alimente le premier volant d'inertie de Zeurion : les outcomes réécrivent les poids du scoring.

## Entrées

Demander si absent : nom de la venture, dates de lancement et d'arrêt, critère de kill déclenché, chiffres disponibles (revenus, coûts tokens, coûts infra, temps humain investi), actions d'acquisition menées.

## Étapes

1. Les faits. Chronologie courte, critère de kill déclenché, P&L de la venture (revenus contre COGS tokens, infra, temps humain). Pas d'interprétation à ce stade.
2. L'écart score/réalité. Reprendre le score initial critère par critère : lesquels ont dit vrai, lequel a menti, et pourquoi. C'est la section la plus importante.
3. Les causes. Distinguer douleur mal validée, produit inadéquat, acquisition inopérante, unit economics faux, exécution défaillante. Une cause principale, pas une liste diluée.
4. Les leçons. Ajustements de pondération du scoring à proposer, capacités réutilisables construites pendant la venture à verser au catalogue, pratiques à ne pas reproduire.
5. Archiver, ne pas supprimer. Écrire le post-mortem, déplacer le matériel de la venture dans archives/ si applicable.
6. Proposer une entrée dans decisions/log.md consignant le kill et sa raison.

## Contraintes

- Honnêteté totale : un post-mortem complaisant ne calibre rien. Le ton interne s'applique, franc et direct.
- Aligner la structure sur le format cible de la table post_mortems (venture, cause, écart score/réalité, leçons) pour que les post-mortems manuels soient importables plus tard.

## Sortie

Fichier archives/post-mortems/<venture>-post-mortem.md avec les sections des étapes 1 à 4. Validation : la cause principale est unique et explicite, chaque critère du score initial a un verdict, au moins une leçon est actionnable.
