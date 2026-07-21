# Scan de verticale : artisans et services terrain

Date : 2026-07-21. Balayage de découverte multi-verticales, rapport brut de l'agent de recherche.

Méthode : recherche sur archives publiques Reddit (r/sweatystartup, r/smallbusiness, r/Plumbing, r/electricians, r/HVAC, r/landscaping) via requêtes ciblées sur les douleurs administratives. Extraits cités tels que publiés (anglais d'origine), scores et permaliens issus de l'archive publique ; aucun contact, aucun pseudonyme reproduit.

---

## Candidat : Les appels manqués pendant les chantiers et l'astreinte téléphonique 24/7

- **Douleur** : L'artisan est sur un toit ou sous un évier quand le téléphone sonne, et chaque appel manqué est un client qui appelle le concurrent suivant. Les petites équipes se relaient la nuit pour les urgences et s'épuisent, ou paient cher un service de permanence humain.
- **Preuves** :
  - r/Plumbing : « I'm getting ~10 after-hour calls a week. Most are non-emergency service requests. » https://www.reddit.com/r/Plumbing/comments/1dj2d0q/what_do_you_pay_your_answering_service/
  - r/smallbusiness : « We basically take turns answering the phones and really never get a full nights rest. » https://www.reddit.com/r/smallbusiness/comments/1fq2b27/ai_answering_service/
  - r/smallbusiness : « I can't really afford to hire a full-time receptionist but I also miss a lot of calls during the day when I'm working, a lot of them new potential clients. » https://www.reddit.com/r/smallbusiness/comments/1h0brqr/recommendations_for_ai_phone_receptionist_service/
  - r/Plumbing : petite entreprise familiale de plomberie cherchant un service de permanence : « For multiple reasons only three of us are able to cover the call rotation. » https://www.reddit.com/r/Plumbing/comments/1kk4tg9/answering_service_recommendations/
- **Volonté de payer** : Très forte et déjà démontrée : les fils comparent ouvertement les tarifs de services de permanence humains (question directe « What do you pay your answering service? ») ; un patron HVAC dit envisager une réceptionniste IA parce que « cheaper than outsourcing or hiring » (https://www.reddit.com/r/smallbusiness/comments/1e1vlgx/should_i_use_an_ai_receptionist/). Les services humains coûtent 100 à 350 $/mois, ce qui ancre le prix.
- **Concurrence** : Dense et bien financée : Smith.ai (dès 95-100 $/mois environ), Ruby (245 $/mois environ), Rosie (dès 49 $/mois), Goodcall (dès 79 $/mois), Avoca et Sameday (spécialisés HVAC), et Jobber intègre désormais sa propre réceptionniste IA.
- **Acquisition en liste blanche** : Oui mais chère : mots-clés « answering service for plumbers », « AI receptionist for HVAC », « after hours call service contractors » (CPC élevés, SERP saturées) ; annuaires Capterra/G2 (catégorie Answering Services), Product Hunt ; contenu comparatif « Smith.ai vs Ruby vs [vous] » fonctionne mais l'espace est déjà couvert par les concurrents eux-mêmes.
- **Faisabilité micro-SaaS agentique** : Non trivial : le cœur est un agent vocal temps réel (téléphonie, latence, transferts), pas un simple workflow LLM, et le coût des minutes vocales comprime la marge d'un ticket à 10-50 euros.
- **Score préliminaire : 5,5/10**. Douleur brûlante et volonté de payer prouvée, mais concurrence féroce et cœur technique hors du gabarit « workflow LLM simple » à petit ticket.

---

## Candidat : Les devis envoyés puis jamais relancés (leads qui refroidissent)

- **Douleur** : Les artisans passent du temps à chiffrer, envoient le devis, puis ne relancent jamais : par oubli, par manque de temps le soir, ou par peur de paraître insistants. Des jobs déjà à moitié gagnés partent chez le concurrent simplement parce que personne n'a écrit le deuxième message.
- **Preuves** :
  - r/sweatystartup, un paysagiste en année 5 : « Contractors are FUCKING AWFUL at closing sales, following up, and showing up. The number of times we've won a client just because we could actually send information in a timely manner is staggering. » https://www.reddit.com/r/sweatystartup/comments/vmq0du/heres_some_of_the_things_youre_doing_wrong_if/
  - r/sweatystartup : « How and when do you follow up with clients who haven't responded to your quote? Do you have a script? » https://www.reddit.com/r/sweatystartup/comments/xet68u/how_and_when_do_you_follow_up_with_clients_who/
  - r/sweatystartup : « I Made $20,250 by Sending Videos to 500 Customer Quotes » (la personnalisation du suivi de devis convertit) https://www.reddit.com/r/sweatystartup/comments/eemo9t/i_made_20250_by_sending_videos_to_500_customer/
  - r/sweatystartup, retour d'expérience détaillé sur la relance de leads dans les services : « one thing we got really good at was lead follow-up and nurturing ». https://www.reddit.com/r/sweatystartup/comments/f5zumm/lead_followup_and_what_ive_learned/
- **Volonté de payer** : Ces mêmes profils paient déjà Jobber (fil citant « the 120 per month tier » : https://www.reddit.com/r/sweatystartup/comments/yrcfx7/starting_a_cleaning_business_anyone_here_use/) ou Housecall Pro ; Hatch, outil dédié au suivi de leads pour la maison, se vend 199 $/mois environ. Un outil mono-tâche à 29-49 euros/mois est un sous-ensemble crédible.
- **Concurrence** : Jobber (39-199 $/mois) inclut des relances de devis automatiques mais génériques ; Hatch (199 $/mois environ, orienté équipes) ; NiceJob et FollowUp CRM en périphérie. Peu d'acteurs à petit ticket centrés uniquement sur la séquence de relance rédigée intelligemment (contexte du devis, ton du métier, SMS + email).
- **Acquisition en liste blanche** : Très bonne : SEO programmatique sur « quote follow-up email template for [plumbers/electricians/landscapers/painters] », « how to follow up on an estimate without being pushy », « estimate follow-up script » (longue traîne peu disputée, pages métier x scénario générables) ; annuaires G2/Capterra (catégories Quoting/Proposal), Zapier App Directory, marketplace d'intégrations Jobber ; contenu comparatif « Jobber follow-ups vs Hatch ».
- **Faisabilité micro-SaaS agentique** : Oui, cœur idéal : un workflow LLM qui lit le devis et l'historique puis rédige et cadence des relances SMS/email personnalisées, avec arrêt automatique à la réponse.
- **Score préliminaire : 8/10**. Douleur avouée avec ROI directement chiffrable en jobs gagnés, faisabilité LLM parfaite et acquisition longue traîne ouverte ; seul risque : Jobber qui améliore sa relance native.

---

## Candidat : La paperasse devis/factures faite à la main le soir

- **Douleur** : Les artisans solo et petites équipes chiffrent et facturent encore sur papier, Excel ou de mémoire, le soir après le chantier. C'est des heures non facturées chaque semaine, des erreurs de marge et des factures qui partent en retard.
- **Preuves** :
  - r/electricians : « We are still using paper invoices and would like to get into the 21st century. » https://www.reddit.com/r/electricians/comments/oj3juu/invoicing_software/
  - r/smallbusiness, paysagiste : « I've been managing my quotes and invoicing on paper and been using excel... the margin of error is a little too high. » https://www.reddit.com/r/smallbusiness/comments/10vv722/benefits_of_jobber/
  - r/landscaping, 300 clients : « My employees carry a printed excel spreadsheet and as they finish mowing a property, they jot down the date. » https://www.reddit.com/r/landscaping/comments/1ehldus/seeking_advice_on_efficient_invoicing_system/
  - r/smallbusiness, nettoyage résidentiel : « The admin side is starting to become a painstaking task each day. » https://www.reddit.com/r/smallbusiness/comments/10qgino/thoughts_on_jobber_for_admin_work/
- **Volonté de payer** : Réelle mais orientée suites : les fils « Jobber vs Quickbooks », « Jobber vs Housecall Pro » montrent des artisans prêts à 39-120 $/mois ; en creux, beaucoup trouvent ces suites trop lourdes ou trop chères pour un solo, ce qui ouvre la case 10-30 euros/mois.
- **Concurrence** : Frontale et mature : Jobber (39-199 $/mois), Housecall Pro (59 $/mois et plus), Tradify (47 $/mois environ), Joist (freemium), QuickBooks. Le seul angle défendable est le « dicté-vers-devis/facture » (l'artisan décrit le job à la voix, le document part tout seul), encore peu occupé à petit ticket.
- **Acquisition en liste blanche** : Correcte : SEO programmatique « invoice template for [electricians/plumbers/lawn care] », « estimate template [métier] » (volume énorme, concurrence moyenne, conversion freemium classique) ; annuaires Capterra/GetApp (catégorie Field Service Management, très encombrée) ; comparatifs « Joist vs Jobber », « cheapest invoicing app for contractors ».
- **Faisabilité micro-SaaS agentique** : Oui : un workflow LLM voix/texte vers document structuré (devis, facture, relevé de chantier) est simple et robuste ; le risque n'est pas technique mais concurrentiel.
- **Score préliminaire : 6,5/10**. Douleur massive et faisabilité simple, mais il faut survivre face à des suites établies dont c'est la fonctionnalité centrale.

---

**Meilleur candidat de la verticale : les devis envoyés puis jamais relancés**, parce que c'est la douleur la plus avouée avec un ROI immédiatement démontrable (un job récupéré paie des années d'abonnement), que le cœur du produit est un pur workflow LLM (lire le devis, rédiger et cadencer des relances personnalisées), et que l'acquisition en liste blanche est grande ouverte via la longue traîne « follow-up template / script par métier », contrairement aux appels manqués (guerre des agents vocaux financés) et à la facturation (territoire natif de Jobber et Housecall Pro).
