# Journal de phase 0

Chaque geste de la phase 0 est consigné ici au fil de l'eau. Ce journal est le livrable réel de la phase : la liste exacte des gestes accomplis devient le cahier des charges de l'automatisation (niveaux 0 à 3).

Format : [AAAA-MM-JJ] GESTE : ... | OUTIL : ... | RÉSULTAT : ... | AUTOMATISABLE PAR : niveau 0/1/2/3

---

[2026-07-21] GESTE : balayage de découverte multi-verticales, 5 verticales scannées en parallèle (artisans, e-commerce, freelances/agences, immobilier locatif, créateurs de contenu), recherche de douleurs récurrentes sur Reddit avec preuves, volonté de payer, concurrence et acquisition en liste blanche | OUTIL : agents de recherche Claude Code (WebSearch sur contenu Reddit public, archives PullPush et Wayback quand Reddit bloquait l'accès datacenter) | RÉSULTAT : 15 candidats identifiés, 5 finalistes à 8/10, 3 recommandés pour audit complet (sponsors newsletters, propositions freelances, chargebacks Shopify), rapports et synthèse dans projects/zeurion/niches/ | AUTOMATISABLE PAR : niveau 0 (Scout, Miner, Analyst, Validator) et niveau 1 (Pricing Scout partiel)

[2026-07-21] LEÇON DE GESTE : l'accès direct à Reddit est bloqué depuis les datacenters ; les agents ont dû passer par les archives publiques (PullPush, Wayback CDX). Le futur Scout du niveau 0 devra utiliser l'API Reddit officielle authentifiée, pas du scraping | OUTIL : constat | RÉSULTAT : contrainte technique à inscrire au cahier des charges du niveau 0 | AUTOMATISABLE PAR : sans objet

[2026-07-21] GESTE : recherche et comparaison de 14 newsletters B2B nichées 2k-50k comme cibles potentielles du rapport échantillon, deux angles parallèles (beehiiv/annuaires, Substack/verticales) | OUTIL : 2 agents de recherche | RÉSULTAT : cible choisie = Detection Engineering Weekly (cyber), back-test prévu sur les sponsors publics de Resilient Cyber et Vulnerable U, comparatif dans venture-01-sponsors/ | AUTOMATISABLE PAR : niveau 0 (Scout/Analyst sur un autre corpus que Reddit)

[2026-07-21] GESTE : lancement de l'extraction des sponsors depuis les archives publiques de 14+ sources cyber comparables (newsletters et podcasts), 3 lots en parallèle, fenêtre 6 mois | OUTIL : 3 agents de recherche (WebFetch sur archives publiques) | RÉSULTAT : en cours | AUTOMATISABLE PAR : niveau 3 (workflow cœur de la venture : c'est LE geste que le produit automatisera)

[2026-07-21] GESTE : identification des contacts acheteurs pour les 30 marques du top (3 agents en parallèle, sources publiques uniquement, emails jamais devinés) | OUTIL : agents de recherche | RÉSULTAT : 30 fiches avec contact recommandé + repli + statut email ; 6 pièges de fraîcheur détectés et écartés (départs récents, homonymies) ; 2 signaux stratégiques (Panther/Databricks, Wiz/Google) | AUTOMATISABLE PAR : niveau 3 (workflow cœur, enrichissement de contacts)

[2026-07-21] GESTE : rédaction du rapport échantillon en anglais (langue du client cible) : armature rédigée en direct (synthèse, méthode, recommandation de tarif ancrée sur CloudSecList, media kit, relances), 30 entrées avec pitchs déléguées à 3 agents | OUTIL : rédaction directe + agents | RÉSULTAT : en cours d'assemblage | AUTOMATISABLE PAR : niveau 3 (Growth : génération du livrable client)

[2026-07-21] GESTE : audit complet de la niche sponsors newsletters en 7 étapes (approfondissement des signaux et clustering, validation externe à charge et à décharge, scoring /100 à pondérations explicites, corridor de prix abonnement et one-shot, unit economics avec gate de marge, verdict) | OUTIL : 3 agents de recherche en parallèle + scoring et modélisation en direct, tarifs API vérifiés au référentiel officiel | RÉSULTAT : score 73/100, gate de marge PASS (89 % sur abonnement 79 €, plancher proposé 60 %), verdict recommandé GO conditionné (cible B2B nichée 2k-50k, différenciation sur l'exécution, one-shot 350 € dans le trou de gamme 300-1 000 $), décision Go/No-Go en attente (L2, Guney) | AUTOMATISABLE PAR : niveau 0 (Analyst, Validator) et niveau 1 (Pricing Scout, Unit Economics Modeler, gate Go/No-Go)
