# Scan de verticale : freelances et petites agences

Date : 2026-07-21. Balayage de découverte multi-verticales, rapport brut de l'agent de recherche.

Méthodologie : recherche sur le contenu public de Reddit (r/freelance, r/agency, r/consulting, r/bigseo, r/PPC, r/marketing) via l'archive publique PullPush, plus recherches web pour les prix des concurrents. Extraits courts, permaliens publics, aucun pseudonyme cité.

---

## Candidat : La rédaction de propositions commerciales et de SOW, du temps non facturable perdu

- **Douleur** : Après chaque appel découverte, le freelance ou la petite agence doit transformer ses notes en proposition/devis soigné, un travail de 2 à 3 heures entièrement non facturable, souvent le soir ou le week-end. Pire : le prospect « ghoste » fréquemment avant même l'envoi, ce qui rend chaque heure investie doublement douloureuse.

- **Preuves** :
  - « After every discovery call I'm still sinking 2-3 hours into turning notes into a polished proposal/PDF. It's unpaid, it kills my evenings, and clients sometimes ghost before I finish. » : https://www.reddit.com/r/consulting/comments/1kjez4h/do_postcall_proposals_and_scope_of_work_burn_a/ (22 pts)
  - « I've been trying to write a new proposal for a great potential client. I know what he needs and I know how to deliver it. But I cannot write the damn proposal. » : https://www.reddit.com/r/freelance/comments/spcgyi/i_need_to_stop_undercharging/ (38 pts)
  - « I want to make proposal documents which look half-decent for clients, but I don't really know where to start without potentially paying loads and loads of money. » : https://www.reddit.com/r/freelance/comments/wpbfb9/proposal_software/
  - « We use Proposify, have templates for everything and get this done in a few hours at most. » (même outillés, plusieurs heures par proposition) : https://www.reddit.com/r/agency/comments/1k0buae/how_painful_is_writing_client_proposals_for_you/mnedmc9/

- **Volonté de payer** : Très bons ancrages prix : Proposify (19-41 $/utilisateur/mois), PandaDoc (19-49 $/siège/mois), Better Proposals (19-20 $/mois environ) sont déjà payés par la cible. Sensibilité prix documentée : un commentaire recommande Super Proposal à 20 $/mois comme « 1/3 de ce que vous paierez chez Proposify ou PandaDoc ». La fourchette 10-50 euros/mois est exactement le terrain de jeu.

- **Concurrence** : Proposify, PandaDoc, Better Proposals, Qwilr (35 $/mois environ), mais ce sont des éditeurs de documents + e-signature basés sur des templates, pas des générateurs « notes d'appel vers proposition rédigée ». Signal de marché : plusieurs posts récents de builders validant cette idée sur r/agency et r/consulting (2024-2025), preuve que la niche attire mais n'est pas encore verrouillée.

- **Acquisition en liste blanche** : Excellente. SEO programmatique sur « [métier] proposal template » (web design proposal template, SEO proposal template, branding proposal example...), des centaines de variantes à longue traîne ; contenu comparatif « Proposify alternative », « PandaDoc vs Proposify pricing » (requêtes déjà très travaillées, preuve de volume) ; annuaires : G2, Capterra, Product Hunt, AppSumo (canal historique de la cible freelance), There's An AI For That.

- **Faisabilité micro-SaaS agentique** : Oui, le cœur est un workflow LLM pur : transcript/notes d'appel + profil de l'émetteur, sortie proposition structurée avec périmètre, prix et conditions, exportée en PDF/lien.

- **Score préliminaire : 8/10**. Douleur non facturable explicite et récurrente, ancrage prix parfait pour 10-50 euros/mois, workflow LLM natif, mais fenêtre concurrentielle qui se referme vite.

---

## Candidat : Le reporting client mensuel des petites agences marketing

- **Douleur** : Les agences de moins de 10 personnes assemblent chaque mois des rapports par client (SEO, Google Ads, Meta, e-commerce) en copiant des captures de dashboards et en rédigeant à la main le commentaire d'analyse. À 20-35 clients, cela représente des journées entières par mois, et aucun outil ne couvre toutes leurs sources ni ne rédige la partie narrative que les clients non techniques exigent.

- **Preuves** :
  - « We're wildly inefficient with our time when reporting to clients & I haven't been able to think of a good solution. » (20 min de rapport par client, chaque semaine, pour 10-20 clients) : https://www.reddit.com/r/agency/comments/10s8y92/how_can_agencies_report_to_clients_efficiently/ (12 pts, 14 comm.)
  - « My monthly client reporting is driving me crazy... My dream is to fully automate sending reports, but my clients aren't super tech savvy and are often confused by even basic reports. » : https://www.reddit.com/r/agency/comments/1aeqtru/client_reporting_gut_check/ (37 comm.)
  - « Just curious if anyone has a solution for not spending SO much time on monthly reports for clients... » : https://www.reddit.com/r/bigseo/comments/49dlxx/integratedautomated_monthly_reports_for_clients/
  - « I've been generating reports with Google Data Studio. Any better options out there? » : https://www.reddit.com/r/PPC/comments/1eft4ou/reporting_for_your_clients/

- **Volonté de payer** : La plus forte de la verticale : la cible paie déjà AgencyAnalytics (59-79 $/mois), Swydo (69 $/mois), DashThis (44-54 $/mois), et se plaint du prix de Whatagraph (229-286 $/mois). Un fil r/bigseo se plaint aussi de ne plus pouvoir « justifier le coût » d'Ahrefs face aux clients. Budget outil de reporting = ligne de dépense déjà acceptée culturellement.

- **Concurrence** : Dense et mature (AgencyAnalytics, Swydo, DashThis, Whatagraph, Looker Studio gratuit). L'angle différenciant réaliste n'est pas le dashboard mais la couche narrative : le commentaire d'analyse rédigé automatiquement, la partie que les incumbents traitent mal et que les posts citent comme le vrai goulot.

- **Acquisition en liste blanche** : Bonne. Contenu comparatif à fort volume (« AgencyAnalytics alternative », « Swydo vs DashThis », « Whatagraph pricing », les concurrents eux-mêmes publient massivement dessus, preuve de demande) ; SEO programmatique « [canal] client report template » (Google Ads report template, SEO monthly report template...) ; annuaires G2/Capterra, marketplaces d'écosystème (Semrush App Center, HighLevel).

- **Faisabilité micro-SaaS agentique** : Partielle. La rédaction LLM du commentaire est simple, mais la valeur exige des connecteurs de données (GA4, Google Ads, Meta), ce qui alourdit le produit au-delà d'un pur workflow LLM.

- **Score préliminaire : 6,5/10**. Douleur intense et budget prouvé, mais concurrence installée et coût d'intégrations élevé pour un micro-SaaS solo.

---

## Candidat : La relance des factures impayées, corvée récurrente et émotionnellement coûteuse

- **Douleur** : Relancer les clients en retard de paiement est une seconde activité non rémunérée du freelance : gênante à formuler, répétée semaine après semaine, avec la peur constante d'abîmer la relation client. Beaucoup relancent « plusieurs fois » manuellement, sans séquence ni escalade structurée.

- **Preuves** :
  - « Invoice chasing. Nonpayment. Clients who vanish in a puff of smoke when invoices become due. Some of our biggest pain points as freelancers. » : https://www.reddit.com/r/freelance/comments/ksh0v1/trouble_chasing_payments_do_you_know_about_the_eu/ (40 pts)
  - « Chasing payments is a waste of my time and shows that the client doesn't respect me. » : https://www.reddit.com/r/freelance/comments/yk37zv/a_reminder_to_know_your_worth/iurmzgx/
  - « Their April retainer... has still not been fulfilled though I reminded them several times. » : https://www.reddit.com/r/freelance/comments/nlhe6e/is_it_fair_this_client_expects_me_to_continue/
  - « When should I bill them for a late fee, and what percentage of the original invoice is appropriate? » : https://www.reddit.com/r/freelance/comments/agu165/when_would_you_recommend_invoicing_a_fee_for_a/ (36 pts)

- **Volonté de payer** : Indirecte mais réelle : les freelances paient déjà Bonsai (21-25 $/mois environ) ou FreshBooks (19 $+/mois) en partie pour les relances automatiques. Côté PME, Paidnice facture 69 $/mois flat et Chaser démarre à 399 AUD/mois environ : il existe un trou de gamme sous 30 euros/mois pour le solo.

- **Concurrence** : Le risque principal : la relance basique est une fonctionnalité déjà incluse dans FreshBooks, QuickBooks, Wave, Stripe Invoicing. Les outils dédiés (Chaser, Paidnice, Upflow) visent les PME, pas les freelances. La différenciation LLM (relances au ton personnalisé, escalade contextuelle, gestion des excuses clients) est réelle mais mince.

- **Acquisition en liste blanche** : Moyenne. SEO sur « payment reminder email template », « how to chase an unpaid invoice politely » (fort volume, mais dominé par les blogs des incumbents) ; annuaires Capterra/G2 catégorie « accounts receivable » ; marketplaces d'apps Xero et QuickBooks, canal précis et sous-exploité pour un positionnement freelance.

- **Faisabilité micro-SaaS agentique** : Oui. Webhook Stripe/Xero sur facture échue + LLM qui rédige et cadence des relances personnalisées est un workflow simple.

- **Score préliminaire : 6/10**. Douleur universelle et émotionnelle, mais forte probabilité de rester une « feature » des outils de facturation plutôt qu'un produit autonome.

---

**Meilleur candidat de la verticale : la rédaction de propositions commerciales et de SOW**, parce que c'est la seule douleur qui combine un temps non facturable explicitement chiffré par la cible (2-3 h par proposition), des ancrages de prix existants pile dans la fourchette 10-50 euros/mois (Proposify, PandaDoc, Better Proposals), un cœur de produit qui est un pur workflow LLM sans connecteurs de données lourds, et une acquisition SEO programmatique évidente sur les templates de propositions par métier.
