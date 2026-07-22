# Spec du livrable : rapport de prospection de sponsors (one-shot)

Version 1, 2026-07-21. Révision du 2026-07-22 : ajout du plan d'exécution 14 jours (contenu, point 6) et du schéma du tableur de contacts (gabarit-csv-contacts.md). Spec prête à exécuter en manuel (phase 0). Chaque étape de production est un geste à consigner dans phase-0-journal.md avec son niveau d'automatisation futur.

## Entrées client (formulaire de commande)

- URL de la newsletter et plateforme (Substack, beehiiv, Ghost, Kit, autre)
- Niche et description de l'audience en une phrase
- Nombre d'abonnés, taux d'ouverture, taux de clic si connu
- Tarifs actuels s'ils existent, formats proposés (mention, dédié, classified)
- 3 newsletters que le client considère comme comparables (optionnel, accélère le matching)

## Contenu du rapport livré

1. **30 sponsors probables.** Marques ayant sponsorisé des newsletters ou podcasts comparables dans les 6 derniers mois. Pour chacune : nom, secteur, preuve datée du sponsoring observé (quelle newsletter, quelle date, quel format), raison du match avec la newsletter du client en une phrase.
2. **Contact par sponsor.** Nom, rôle (growth, partnerships, marketing), email vérifié, profil LinkedIn. Un contact par marque minimum.
3. **30 pitchs personnalisés.** Un email par sponsor, prêt à envoyer : accroche liée au sponsoring observé, chiffres de la newsletter, proposition de format et de prix, appel à l'action. Plus 2 templates de relance (J+4 et J+10).
4. **Recommandation de tarification.** Fourchette par format fondée sur les CPM documentés de la niche (15-35 $ généraliste, 30-70 $+ B2B), position recommandée, argumentaire de négociation.
5. **Mini media kit.** Les 5 chiffres à mettre en avant et comment les présenter (les stats brutes des plateformes sont illisibles pour un annonceur, douleur documentée).
6. **Plan d'exécution 14 jours.** L'ordre d'envoi (les 3 recommandés d'abord, puis tier par tier), le rythme par petits lots, les fenêtres de relance, le suivi dans le CSV et l'objectif réaliste du premier cycle (des conversations, pas des signatures). Transforme la liste en programme.

Format de livraison : PDF (gabarit : gabarit-pdf/) + tableur des contacts CSV (schéma : gabarit-csv-contacts.md). Délai annoncé : 5 jours ouvrés à partir de la soumission du formulaire d'intake.

## Processus de production manuel (phase 0)

1. Identifier 15-20 newsletters et podcasts comparables (recherche par niche, annuaires, recommandations Substack/beehiiv).
2. Parcourir leurs archives publiques des 6 derniers mois, relever chaque sponsor observé avec date et format. Objectif : 50+ marques candidates.
3. Filtrer et scorer les 30 meilleures par pertinence (adéquation audience, récurrence du sponsoring, taille apparente du budget).
4. Trouver et vérifier les contacts (LinkedIn + vérification email). Outil : Hunter ou équivalent.
5. Rédiger les 30 pitchs avec assistance LLM, relecture humaine systématique.
6. Calculer la recommandation de tarif à partir des benchmarks CPM sourcés de l'audit.
7. Mise en page, contrôle qualité, livraison.

## Critères de validation (contrôle avant livraison)

- Chaque marque a une preuve de sponsoring datée et vérifiable : zéro affirmation non sourcée.
- Chaque email a passé la vérification (pas de bounce attendu au-delà du taux résiduel de l'outil).
- Chaque pitch mentionne un fait spécifique au sponsor (le sponsoring observé), aucun template générique.
- La recommandation de tarif cite ses benchmarks.
- Temps de production total chronométré et consigné : c'est la donnée qui calibrera l'automatisation et le prix.

## Prix et conditions

- Prix de lancement : 349 euros TTC selon régime TVA applicable, paiement Stripe à la commande.
- Périmètre : une newsletter, une niche, un rapport. Les mises à jour récurrentes relèvent du futur abonnement.
- CGV : gabarits de la société ombrelle (à paramétrer avant la première vente).
