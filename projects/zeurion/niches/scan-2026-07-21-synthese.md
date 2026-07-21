# Synthèse du scan de découverte multi-verticales

Date : 2026-07-21. Cinq verticales scannées en parallèle, 15 candidats de niche identifiés, rapports bruts dans ce même dossier. Scores préliminaires attribués par les agents de recherche, arbitrage final ci-dessous.

## Les 15 candidats

| Verticale | Candidat | Score | Point fort | Point faible |
|---|---|---|---|---|
| E-commerce | Réponse aux chargebacks Shopify | 8/10 | Concurrents à 20-25 % de commission, case « forfait plat » vide | Concurrents bien financés |
| E-commerce | Suspension Google Merchant Center | 7/10 | Concurrence SaaS quasi nulle, détresse à haute intention | Douleur épisodique, churn structurel |
| E-commerce | Remboursements FBA | 5/10 | Volonté de payer prouvée (12-25 % de commission) | Marché consolidé, gisement en rétrécissement |
| Freelances | Propositions commerciales et SOW | 8/10 | Pur workflow LLM, ancrage prix parfait 19-49 $ | Fenêtre concurrentielle qui se referme |
| Freelances | Reporting client d'agence | 6,5/10 | Budget déjà accepté culturellement (44-79 $/mois) | Connecteurs GA4/Ads/Meta lourds |
| Freelances | Relance de factures impayées | 6/10 | Douleur universelle et émotionnelle | Risque de rester une feature des outils de facturation |
| Artisans | Devis jamais relancés | 8/10 | ROI chiffrable en jobs gagnés, longue traîne SEO ouverte | Jobber peut améliorer sa relance native |
| Artisans | Appels manqués / astreinte | 5,5/10 | Douleur brûlante, prix ancré 100-350 $/mois | Agent vocal temps réel, hors gabarit, concurrence financée |
| Artisans | Paperasse devis/factures | 6,5/10 | Douleur massive, angle dictée-vers-document | Territoire natif de Jobber/Housecall Pro |
| Immobilier | Tri des candidatures locataires et no-shows | 8/10 | Trou tarifaire net entre gratuit et 69 $+/mois pro | Risque d'intégration native par les plateformes d'annonces |
| Immobilier | Messages voyageurs courte durée | 6,5/10 | Volonté de payer la mieux prouvée de la verticale | Saturé, Airbnb intègre l'IA nativement |
| Immobilier | Rapports d'état des lieux | 6/10 | Angle IA différenciant (photos + dictée vers rapport) | Prix planchers existants (0,75 $/lot) |
| Créateurs | Prospection de sponsors newsletters | 8/10 | Commissions 15-30 % à fuir, SEO « who sponsors X » immédiat | Petits budgets côté clients |
| Créateurs | Recherche et fiabilisation d'invités podcast | 7/10 | Volonté de payer explicite (50-100 $/épisode externalisé) | Différenciation vs marketplaces à prouver |
| Créateurs | Relance d'étudiants inactifs | 6/10 | Douleur chiffrée (10 h/semaine) | Intégrations multi-plateformes lourdes |

## Arbitrage pour la phase 0

Les cinq finalistes à 8/10 sont solides sur le papier. Mais la phase 0 impose ses propres critères, plus durs que le score : le produit doit être vendable vite, à la main, par une personne seule depuis la France, avec les outils existants (n8n, Supabase, Stripe). Ce filtre change le classement.

**Écartés du podium malgré leur 8/10 :**

- **Devis jamais relancés (artisans)** : l'envoi de SMS aux États-Unis exige un enregistrement A2P 10DLC, et la cible (artisans américains) est difficile à atteindre en manuel sans acheter de trafic. Excellente niche pour l'usine automatisée plus tard, mauvaise niche pour un premier euro manuel.
- **Tri des candidatures locataires (immobilier)** : exige une réactivité conversationnelle en continu (ingestion des leads Zillow en temps réel), difficile à simuler à la main, et le canal SEO met des mois à produire. Le risque plateforme est réel.

**Les trois recommandés pour un audit complet :**

1. **Prospection de sponsors pour petites newsletters (créateurs)**. Le plus compatible phase 0 : le livrable peut se vendre en manuel dès la semaine 1 sous forme de rapport payant (liste de sponsors qualifiés + pitchs rédigés pour une newsletter donnée), sans produit à construire. Le geste manuel est exactement le futur workflow agentique. Cible hyper-accessible en ligne (Indie Hackers, Product Hunt, annuaires newsletters). Risque principal : des budgets clients modestes.
2. **Propositions commerciales et SOW (freelances)**. Pur workflow LLM, zéro connecteur lourd, ancrage prix exactement dans la fourchette cible, et Guney connaît ce persona de l'intérieur. Risque principal : la fenêtre se referme, plusieurs builders sont dessus.
3. **Réponse aux chargebacks Shopify (e-commerce)**. Le plus gros parapluie tarifaire des quinze (20-25 % de commission non plafonnée chez les leaders) et un cœur produit littéralement LLM. Mais le chemin passe par une app Shopify (review de plusieurs semaines) et une confiance à construire sur un sujet financier : premier euro plus lent. À auditer comme candidat de venture 2 ou 3 plutôt que comme venture phase 0.

## Prochaine étape

Audit complet (compétence audit-niche-reddit, 7 étapes dont corridor de prix détaillé et unit economics) sur la ou les niches retenues par Guney parmi les trois recommandées. Le Go final est L2 : décision humaine.
