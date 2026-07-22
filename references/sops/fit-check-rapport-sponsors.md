# SOP : fit check du rapport de prospection sponsors

Créée le 2026-07-22, pour la venture 01 (rapport one-shot 349 euros). Rend exécutable la promesse publique du site : « Fit check first: if your newsletter isn't right for the method, we say so and refund in full before any work starts. »

## Quand

Après paiement Stripe et soumission du formulaire d'intake, avant tout travail de production. Délai : sous 24 h ouvrées après réception de l'intake. Temps passé : 60 minutes maximum, chronométrées et consignées au journal de phase 0.

## Séquence

1. Rapprocher le paiement et la soumission via session_id (voir formulaire-intake.md). Si le formulaire manque 24 h après paiement, relancer depuis la boîte de contact.
2. Ouvrir la newsletter du client : URL, archive publique, 3 derniers numéros.
3. Dérouler la checklist ci-dessous, dans l'ordre. Le premier critère bloquant rencontré suffit à déclencher la procédure de remboursement, inutile de finir la liste.
4. Consigner la décision (PASS ou REFUND, critères en cause, temps passé) au journal de phase 0.
5. Envoyer l'email correspondant (gabarits en bas de page).

## Checklist

Critères bloquants (tous requis pour PASS) :

- B1. Audience entre 2 000 et 50 000 abonnés déclarés. Sous 2 000 : REFUND (le canal direct ne fonctionne pas encore, le dire honnêtement). Au-dessus de 50 000 : traiter au cas par cas, la promesse publique vise 2k-50k ; si on accepte, le noter au journal.
- B2. Niche identifiable en une phrase, B2B ou prosumer, avec un persona acheteur clair pour des annonceurs (la FAQ du site l'assume : une newsletter généraliste relève d'une régie, pas de la méthode).
- B3. Au moins 10 newsletters ou podcasts comparables portant des sponsors, trouvables en 30 minutes de recherche. C'est le seuil publié dans la FAQ. Comparables = même verticale ou audience adjacente, archives publiques consultables.
- B4. Activité sponsor observable dans la verticale sur les 6 derniers mois : au moins quelques achats datables chez les comparables. Une verticale où personne n'achète ne produira pas 30 marques honnêtes.
- B5. Langue de la newsletter : anglais ou français (langues que l'on peut auditer sérieusement en phase 0).

Critères d'alerte (non bloquants, à consigner et à signaler au client dans l'email de kickoff) :

- A1. Newsletter très jeune (moins de 6 mois ou moins de 20 numéros) : la recommandation de prix devra être prudente.
- A2. Niche à comparables peu nombreux (10 à 14) : rapport faisable, mais le tier 3 sera plus mince, le dire d'avance.
- A3. Le client vend déjà des sponsorships à un tarif publié : le rapport reste utile (nouveaux acheteurs, benchmark), mais l'argument « inventaire vierge » disparaît des pitchs.

## Règle de décision

- Tous les B passent : PASS. Email de kickoff, production lancée, horloge des 5 jours ouvrés déjà courante depuis la soumission de l'intake.
- Un B échoue : REFUND. Remboursement intégral immédiat via le dashboard Stripe, avant toute production. Pas de demi-mesure négociée : la promesse publique dit « in full », on rembourse en entier. Si le cas est limite (ex. 1 800 abonnés en forte croissance), on peut proposer dans l'email de remboursement de revenir vers nous plus tard ; jamais de production à contre-indication.

## Gabarits d'email (anglais, depuis la boîte de contact)

PASS :

> Subject: Your report is in production
>
> Hi [First name],
>
> Quick note to confirm your newsletter passed our fit check: your vertical has enough comparable, sponsored titles for the method to work. Your report is now in production and will reach this inbox within 5 business days of your form submission[, with one heads-up: A1/A2/A3 formulé en une phrase honnête].
>
> No action needed on your side. If anything in your submission needs clarifying, we'll ask; otherwise the next email is your report.

REFUND :

> Subject: Full refund issued, here's why
>
> Hi [First name],
>
> We ran the fit check before starting any work, as promised, and your newsletter isn't a fit for this method today: [raison en une phrase factuelle, ex. "we could only find X comparable sponsored titles in your vertical, and below ~10 the report can't reach 30 honest matches"].
>
> Your full payment has been refunded (you'll see it in 5-10 business days depending on your bank). No partial work, no partial charge.
>
> [Si pertinent : If your list crosses 2,000 engaged subscribers / if your vertical's sponsor activity picks up, we'd genuinely like another look.]

## Critères de validation de la SOP

1. Testée à blanc sur le cas DEW (doit donner PASS : ~15k abonnés, niche cyber claire, 14+ comparables sponsorisés, activité 6 mois documentée, anglais).
2. Testée à blanc sur un contre-cas (newsletter généraliste < 2k : doit donner REFUND sur B1 et B2 sans finir la checklist).
3. Chaque décision réelle produit une ligne de journal avec temps passé et critères.
4. L'email part depuis la boîte de contact officielle (bloquant domaine à lever avant la première vente).
