# Scan de verticale : créateurs et solopreneurs de contenu

Date : 2026-07-21. Balayage de découverte multi-verticales, rapport brut de l'agent de recherche.

Méthode : Reddit étant inaccessible aux crawlers (blocage réseau), les fils publics ont été retrouvés via l'index Wayback Machine (API CDX) et lus dans leurs copies archivées publiques. Les permaliens pointent vers les fils Reddit d'origine. Les douleurs déjà saturées d'outils IA (show notes, transcription, découpage en clips : Castmagic 39 $/mois, Podsqueeze 12-24 $/mois, Capsho, Opus Clip) ont été volontairement écartées.

---

## Candidat : La prospection de sponsors pour les petites newsletters

- **Douleur** : Les opérateurs de newsletters (1 000 à 50 000 abonnés) ne savent pas où trouver des sponsors pertinents et le font manuellement : repérer qui sponsorise les newsletters voisines, chercher les contacts, écrire les pitchs, suivre les négociations dans un tableur. Les marketplaces existantes prélèvent 15 à 30 % et servent mal les petites listes ; Substack n'offre rien nativement.
- **Preuves** :
  - « My newsletter has 18K+ readers, with 36% open rate and 3% CTR. [...] How do you find related sponsors in your niche? » : https://www.reddit.com/r/Substack/comments/1huujfs/where_to_find_sponsors_for_my_newsletter/
  - « I run a newsletter and it is very difficult for me to find sponsors. » (réponse dans le fil : « Finding sponsors for micro newsletters is brutal. ») : https://www.reddit.com/r/Substack/comments/1mc55yf/how_to_find_sponsors_for_my_newsletter/
  - « Does Substack offer something similar [a sponsor marketplace]? Where do you find sponsors? » : https://www.reddit.com/r/Substack/comments/15fdru4/where_do_you_find_sponsors/
  - « Is there a CRM type thing people use to manage the whole thing + negotiations + workflow to easily embed things into our newsletter? » : https://www.reddit.com/r/Substack/comments/1dm3su6/how_are_you_all_tracking_sponsorships/
- **Volonté de payer** : Paved prélève 30 % de commission côté éditeur ; Passionfroot prend 5 à 15 % par deal ; un fil cite beehiiv à partir de 39 $/mois et des revenus de « boosts » de 100-140 $/semaine. Ces créateurs paient déjà, en commission ou en abonnement, pour monétiser. La méthode artisanale recommandée en commentaire (« see who sponsors them, email the companies ») est exactement le travail à automatiser.
- **Concurrence** : Paved (30 % de commission), Passionfroot (5-15 %), beehiiv Ad Network (réservé à beehiiv), Who Sponsors Stuff (base de 3 000+ contacts sponsors, orientée équipes/grosses newsletters), Letterwell, Sponsy (gestion d'opérations, pas de prospection). Angle mort : la prospection agentique à abonnement fixe pour les petites newsletters, notamment sur Substack.
- **Acquisition en liste blanche** : Très bonne. SEO programmatique « who sponsors [nom de newsletter] » et « brands that sponsor [niche] newsletters » (une page par marque et par niche) ; mots-clés « how to find newsletter sponsors », « newsletter sponsorship rates », « Paved alternatives » ; contenu comparatif « Paved vs Passionfroot » ; annuaires : InboxReads (section tools), Product Hunt, Indie Hackers, There's An AI For That.
- **Faisabilité micro-SaaS agentique** : Oui. Veille des newsletters comparables, extraction des sponsors observés, enrichissement du contact et rédaction du pitch personnalisé forment un workflow LLM + scraping simple, sans intégration profonde.
- **Score préliminaire : 8/10**. Douleur posée en boucle depuis 2023, concurrence structurée en commissions que les créateurs veulent éviter, et canal SEO programmatique évident.

---

## Candidat : La recherche, la prise de contact et la fiabilisation des invités de podcasts d'interview

- **Douleur** : Pour un podcast d'interview, chaque épisode exige de trouver un invité pertinent hors de son réseau, de le rechercher (articles, interviews passées), de rédiger un outreach personnalisé, puis de gérer relances, replanifications et no-shows. Les hôtes décrivent des heures de préparation par heure d'antenne, jusqu'au burnout et à l'abandon du show.
- **Preuves** :
  - « I read their articles, watch their past interviews, and check out their work. It's hours of work for a one-hour interview. » : https://www.reddit.com/r/podcasting/comments/1mdcssb/i_spend_so_much_time_researching_guests_that_im/
  - « The toll of finding and booking podcast guests became too burdensome and was a huge drag on the entire process. [...] I'm willing to pay someone to do it » : https://www.reddit.com/r/podcasting/comments/1fqms9o/finding_and_booking_guests_should_i_outsource_this/
  - « It's common that within an hour before we record, someone emails with an emergency and is unable to join. » : https://www.reddit.com/r/podcasting/comments/1fg0t4x/guests_cancelling/
  - « We exchange messages back and forth, agree to a podcast on Monday. I asked for their email to send invite too. Nothing. » : https://www.reddit.com/r/podcasting/comments/18ba1w4/guests_ghosting/
- **Volonté de payer** : Un commentaire chiffre un producteur externalisé à « $50-$100 per episode » ; l'auteur du fil envisageait Fiverr ; PodMatch facture 6 à 64 $/mois et MatchMaker.fm 129 $/an. Le budget existe déjà dans cette fourchette micro-SaaS.
- **Concurrence** : PodMatch (6-64 $/mois), MatchMaker.fm (freemium, 129 $/an), PodcastGuests.com, agences de booking (bien plus chères). Limite structurelle des marketplaces : elles ne proposent que des gens qui veulent se faire inviter (souvent des marketeurs en auto-promotion). Angle mort : un agent qui identifie des invités hors marketplaces (auteurs, chercheurs, praticiens), génère la fiche de préparation et rédige outreach + relances anti-no-show.
- **Acquisition en liste blanche** : Bonne. Mots-clés « how to find podcast guests », « podcast guest research », « PodMatch alternatives » ; comparatif « PodMatch vs MatchMaker.fm » ; SEO programmatique « podcast guest ideas for [niche] podcasts » ; annuaires : Product Hunt, There's An AI For That, AppSumo, Podnews (classifieds/outils), listes d'outils des blogs Buzzsprout/Riverside.
- **Faisabilité micro-SaaS agentique** : Oui. Recherche web ciblée, scoring de pertinence, génération d'un brief d'interview et des emails de contact/relance : une chaîne LLM avec outils web, sans infrastructure lourde.
- **Score préliminaire : 7/10**. Douleur vive et récurrente avec volonté de payer explicite, mais il faudra se différencier nettement des marketplaces installées.

---

## Candidat : La relance des étudiants et clients inactifs (créateurs de cours, mentors, coachs)

- **Douleur** : Les mentors et créateurs de programmes passent des heures chaque semaine à relancer les étudiants fantômes, envoyer des rappels et retenir la même conversation « qu'est-ce qui te bloque », avec une progression éparpillée entre plateformes. La relance personnalisée ne passe pas à l'échelle au-delà d'une poignée d'élèves.
- **Preuves** :
  - « I waste 10+ hours weekly chasing students who won't take action. [...] Sending endless reminder messages » : https://www.reddit.com/r/coursecreators/comments/1ghzpsb/mentors_i_waste_10_hours_weekly_chasing_students/
  - « It surprised me how many are still handling everything manually, like follow-up emails, DMs, reminders, even onboarding. » : https://www.reddit.com/r/coursecreators/comments/1lkcb5m/curious_do_you_still_manually_follow_up_with/
  - « I started automating my follow ups and reminders to save me time » (coach, à propos de sa tâche admin la moins aimée) : https://www.reddit.com/r/lifecoaching/comments/1mhblky/hi_all_whats_your_least_favourite_admin_tasks/
- **Volonté de payer** : La réponse recommandée dans le fil principal est GoHighLevel (à partir de 97 $/mois environ, surdimensionné pour un solopreneur) ; le marché paie déjà CoachAccountable (dès 20 $/mois), Paperbell (57 $/mois) ou Skool (99 $/mois) pour héberger et suivre ces mêmes clients.
- **Concurrence** : GoHighLevel, automatisations Kajabi/Teachable, CoachAccountable (check-ins programmés), workflows Circle. Tous envoient des rappels génériques déclenchés par des règles ; l'angle mort est le check-in rédigé par LLM qui lit la progression réelle, personnalise la relance et remonte un digest « qui décroche et pourquoi » au mentor.
- **Acquisition en liste blanche** : Moyenne. Mots-clés « student accountability software », « increase course completion rate », « coaching client check-in tool » ; comparatifs « CoachAccountable vs Paperbell » ; annuaires : Product Hunt, AppSumo, There's An AI For That. Pas de marketplace d'apps forte côté Teachable/Skool, ce qui limite un canal.
- **Faisabilité micro-SaaS agentique** : Le cœur (générer relances personnalisées + digest hebdo à partir des données de progression) est un workflow LLM simple, mais la valeur dépend d'intégrations multiples (Skool, Kajabi, Teachable, Discord) qui alourdissent le produit.
- **Score préliminaire : 6/10**. Douleur réelle et chiffrée (10 h/semaine) mais preuves partiellement issues de posts semi-promotionnels et coût d'intégration multi-plateformes élevé pour un petit ticket.

---

**Meilleur candidat de la verticale : la prospection de sponsors pour les petites newsletters**, parce que la douleur revient sans cesse sur r/Substack avec une volonté de payer déjà démontrée (commissions de 15-30 % que les créateurs cherchent à fuir), que la concurrence ignore structurellement les petites listes, que le cœur du produit est un pur workflow LLM sans intégration lourde, et que le SEO programmatique « who sponsors X » offre un canal d'acquisition en liste blanche immédiat.
