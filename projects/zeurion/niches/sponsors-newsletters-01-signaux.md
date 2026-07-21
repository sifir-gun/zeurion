# Audit sponsors newsletters, étapes 1-2 : signaux et clustering

Date : 2026-07-21. Rapport brut de l'agent de recherche.

Sources : archives publiques PullPush (api.pullpush.io), snapshots Wayback Machine (Reddit bloque l'accès direct datacenter, confirmé pendant l'audit), recherche web d'appoint. Subreddits couverts : r/Substack, r/Newsletters, r/beehiiv, r/juststart, r/Blogging, r/EntrepreneurRideAlong. Note sur l'engagement : PullPush fige les scores au moment de la capture, les scores « 1 » sont donc des planchers.

---

## 1. Nouveaux signaux collectés (16 distincts, hors les 4 fils déjà connus)

| # | Sub / date | Signal (extrait court) | Engagement visible |
|---|---|---|---|
| S1 | r/Substack, oct. 2024 | « How are you guys getting sponsorships? », 800 abonnés : « I have reached out to many potential sponsors, but haven't got a single response! » [permalien](https://www.reddit.com/r/Substack/comments/1g38bpf/how_are_you_guys_getting_sponsorships/) | 4+ commentaires |
| S2 | r/Newsletters, mai 2025 | « Where to sell sponsorships » : « What is the best place to find sponsors? » Réponse : « Who Sponsors Stuff and other databases. Cold email sponsors. We've been having a lot of success with that. » [permalien](https://www.reddit.com/r/Newsletters/comments/1kdjlkc/where_to_sell_sponsorships/) | 2+ commentaires |
| S3 | r/Newsletters, avr. 2025 | « How to find sponsorships opportunities? », newsletter dev iOS, 500 abonnés environ. Réponse : « make a targeted list of them and just go hard. Sending 2 follow ups... It might sound like a time suck » [permalien](https://www.reddit.com/r/Newsletters/comments/1js0feb/how_to_find_sponsorships_opportunities/) | 2+ commentaires |
| S4 | r/Newsletters, sept. 2024 | « Which are some of the best platform to get sponsorship » : « Make a list of businesses that would fit, get on LinkedIn and start writing cold messages. » / « But doesn't that process take alot of time » [permalien](https://www.reddit.com/r/Newsletters/comments/1f79h2f/which_are_some_of_the_best_platform_to_get/) | 6+ commentaires |
| S5 | r/Newsletters, mai 2025 | « How much should I charge for an ad slot? », 1 100 abonnés, 40 % open : « Chatgpt tells me that 50USD for top spot... I have 0 trust in myself » [permalien](https://www.reddit.com/r/Newsletters/comments/1ko75kt/how_much_should_i_charge_for_an_ad_slot_remote/) | 2 pts, 5 com. |
| S6 | r/Newsletters, mars 2025 | « Good price for newsletter ads w/under 1,000 subs? », 400 abonnés locaux, a improvisé 25 $/pub. Réponse : « I signed up 1 ad for $300 when I was about ~600 subs, and plenty of others told me to pound sand » [permalien](https://www.reddit.com/r/Newsletters/comments/1j3m3kr/good_price_for_newsletter_ads_wunder_1000_subs/) | 6 pts, 5 com. |
| S7 | r/beehiiv, févr. 2025 | « Inquiry about sponsored ad » : « I just got a request for a sponsored ad... I don't know how much to charge » (2 673 abonnés, 75 % open) [permalien](https://www.reddit.com/r/beehiiv/comments/1iwdt62/inquiry_about_sponsored_ad/) | — |
| S8 | r/Substack, avr. 2025 | « Substack stats are useless! », media kit en cours : « Since I'll need to explain these metrics to potential sponsors, I want to get them right » [permalien](https://www.reddit.com/r/Substack/comments/1k5uh1c/substack_stats_are_useless/) | — |
| S9 | r/Substack + r/Newsletters, mai 2025 | « If You're Pitching Newsletter Sponsors... » : « got tired of rewriting the same pitch every time. So I made a reusable RFP template » [permalien](https://www.reddit.com/r/Substack/comments/1kh0qw4/if_youre_pitching_newsletter_sponsors_this_might/) | cross-posté 3 subs |
| S10 | r/Newsletters, févr. 2025 | « Sponsor Agreement/Contract » : « Does anyone have a sponsorship agreement that they might be willing to let me look at? » [permalien](https://www.reddit.com/r/Newsletters/comments/1iqsmi3/sponsor_agreementcontract/) | — |
| S11 | r/Newsletters, avr. 2025 | « How do sponsorship payments actually work in practice? » : « Most resources talk about CPM rates... but very little about payment timing and terms » [permalien](https://www.reddit.com/r/Newsletters/comments/1k3rqjz/newsletter_creators_how_do_sponsorship_payments/) | — |
| S12 | r/Newsletters, mars 2025 | « Newsletter Scam », niche beauté : faux annonceur demandant « my media kit and rates » avant tentative d'arnaque au paiement [permalien](https://www.reddit.com/r/Newsletters/comments/1jar3lf/newsletter_scam/) | — |
| S13 | r/beehiiv, déc. 2024 | Feature request explicite : « a sponsor management platform to deal with the ads i got on my own - similar to paved or passionfroot - with a unified calendar and price menu, invoicing, discounts on a volume basis » [permalien](https://www.reddit.com/r/beehiiv/comments/1hqcetv/some_ideas_for_the_beehiiv_product_team/) | — |
| S14 | r/beehiiv, mars 2025 | « thoughts on the direct sponsorships feature » : « Ad offers through the beehiiv network have more or less dried up of late » / « I have only seen 5 unique advertisers over the span of last 5 months » / facturation via le Stripe de beehiiv et non celui de l'éditeur [permalien](https://www.reddit.com/r/beehiiv/comments/1jcjsyb/thoughts_on_the_direct_sponsorships_feature/) | 9 pts, 19 com. |
| S15 | r/Substack, oct. 2024 | « 2nd paid promotion in the month », méthode manuelle complète : « Follow newsletters getting sponsored and note down the name of the sponsors. Reach out to their marketing people on Linkedin » [permalien](https://www.reddit.com/r/Substack/comments/1gcqhop/2nd_paid_promotion_on_my_newsletter_in_the_month/) | — |
| S16 | r/Newsletters, avr. 2025 | Côté demande : « Sponsors don't know where to find you (I'm telling you this as a sponsor) », les annonceurs ne trouvent pas les petites newsletters de niche [permalien](https://www.reddit.com/r/Newsletters/comments/1k8bqt3/sponsors_dont_know_where_to_find_you_im_telling/) | — |

Signaux d'appoint (contexte, non comptés) : « Ad network for 'micro' but 'niche' newsletter writers » (r/Substack, mars 2024 : « a clear absence of a proper ad network for micro but niche newsletter writers ») ; « 0-$20k » (r/Newsletters, sept. 2024, 21 pts, 19 com., 44 k$/an de sponsors, inbound LinkedIn) ; « I just sold my first ad » (r/EntrepreneurRideAlong, mai 2025, 25 pts, 15 com.) ; multiples offres commerciales dans ces fils (agences à commission, « I'll Find You A Sponsor For Free », recrutement de commerciaux à la commission).

### Commentaires nouveaux extraits des 4 fils connus

- **1huujfs** (janv. 2025, 20 commentaires archivés) : « Find other writers in your niche, see who sponsors them, email the companies » ; face aux marketplaces (Paved, Passionfroot) : « Seems so passive. I don't want to wait for them to find me. I want to act on it » ; « reach out to people on LinkedIn... maybe marketing team or sales team ».
- **1mc55yf** (juil. 2025, 10 commentaires, via Wayback) : « Finding sponsors for micro newsletters is brutal » (3 pts) ; conseil résigné : « Firstly try to improve your subscribers. Then sponsors will come automatically ».
- **15fdru4** (août 2023) : gatekeeping : « it makes sense to get sponsors only when you are above 10,000 » ; « Without a sizable audience... why would they sponsor you? » (3 pts).
- **1dm3su6** (juin 2024, via Wayback) : l'OP demande « Is there a CRM type thing people use to manage the whole thing + negotiations + workflow? », un seul commentaire : « HubSpot. Don't make it complicated » (score du post : 0).

---

## 2. Clustering des douleurs

### C1 : « Trouver qui sponsorise » (découverte des annonceurs), 9 signaux, DOMINANT
1huujfs, 1mc55yf, 15fdru4, S2, S3, S4, S15, S16 + signal d'appoint micro-ad-network.
- **Intensité : recherche active de solution.** Vocabulaire fort (« brutal », « very difficult »), posts récurrents tous les 2-3 mois sur 3 ans, mêmes questions.
- **Méthodes manuelles décrites, très précisément :** (1) lire les newsletters concurrentes et noter leurs sponsors ; (2) bases payantes type Who Sponsors Stuff ; (3) liste ciblée + cold email + 2 relances ; (4) marketplaces (Passionfroot, Paved), jugées passives et calibrées pour les gros (« Seems so passive... I want to act on it »).
- Signal miroir côté demande (S16) : les sponsors eux-mêmes ne savent pas où trouver les petites newsletters.

### C2 : « L'outreach ne répond pas / trop petit pour compter », 4 signaux
S1, commentaires de 15fdru4 et 1g38bpf, 1mc55yf.
- **Intensité : frustration, teintée de résignation** imposée par les pairs : « you need at least 10000 subscribers to get the attention of sponsors ». Le fantasme du seuil des 10k est le mur émotionnel de la niche, alors que des contre-exemples existent (300 $ l'emplacement à 600 abonnés environ, S6).

### C3 : « Fixer son tarif », 5 signaux
S5, S6, S7, + « How many ad sponsors do you get... » (r/beehiiv, janv. 2025), + débat flat fee vs rev-share (r/Newsletters, févr. 2025).
- **Intensité : anxiété aiguë et immédiate**, souvent déclenchée par un sponsor inbound qui attend une réponse : « I don't know how much to charge », « I have 0 trust in myself ». Benchmarks de pairs extrêmement dispersés (20 $ à 300 $ pour des tailles comparables).
- Méthode manuelle : demander à Reddit ou à ChatGPT, puis négocier au doigt mouillé.

### C4 : « Prouver son audience / media kit / pitch », 3 signaux
S8, S9, + liens de prévisualisation cassés pour démarcher (r/beehiiv, janv. 2025).
- **Intensité : moyenne, bricolage.** Templates RFP/media kit faits maison, stats de plateforme illisibles (« Substack stats are useless »).

### C5 : « Gérer le pipeline : CRM, calendrier, facturation », 4 signaux
1dm3su6, S13, S14 (facturation Stripe), question net-30 dans S14.
- **Intensité : demande de produit explicite mais population étroite.** Seuls ceux qui ont déjà des sponsors la ressentent. Le fil CRM n'a récolté qu'un commentaire et un score de 0 : douleur réelle mais minoritaire à ce stade de maturité de la niche.

### C6 : « Se faire payer : contrats, délais, arnaques », 4 signaux
S10, S11, S12, + questions LLC/structure (r/Newsletters, févr. 2025).
- **Intensité : peur** (arnaque documentée en S12, découverte du net-30). Cluster émergent, peu de volume mais forte charge émotionnelle.

### C7 : « Les réseaux/marketplaces existants échouent pour les petits », 4 signaux
S14 (« dried up », « 5 unique advertisers in 5 months »), micro-ad-network (mars 2024), « tired of settling for pennies from network ads » (r/Newsletters, avr. 2025), questions sur ConvertKit Sponsor Network.
- **Intensité : frustration documentée envers les solutions en place.** C'est le cluster qui valide C1 : même équipés d'une plateforme, les petits éditeurs sont renvoyés vers la vente directe, donc vers la prospection.

---

## 3. Verdict de l'étape

**Cluster dominant : C1, trouver qui sponsorise (renforcé par C2 et C7).** Le plus volumineux (9 signaux directs, présent dans les 6 subreddits, récurrent de 2023 à mi-2025), et les deux clusters adjacents convergent vers lui : l'outreach échoue faute de bon ciblage (C2), et les marketplaces abandonnent de facto les moins de 10k abonnés (C7). Le workflow manuel est décrit à l'identique par plusieurs personnes indépendantes : repérer les sponsors des newsletters comparables, trouver le contact marketing sur LinkedIn, cold email + relances. Pipeline entièrement automatisable, qualifié de « time suck » par les intéressés.

**Plus forte intention de payer : C1 également.** Trois preuves : (1) usage déclaré de bases payantes ; (2) un écosystème parasite d'agences à commission prospère dans ces mêmes fils, les éditeurs acceptent déjà de céder une part du revenu pour qu'on leur trouve des sponsors ; (3) le déclencheur est directement monétaire : chaque sponsor trouvé vaut 25-300 $ (petites listes) à 5 000 $ (paquets annuels). C3 (pricing) a une charge émotionnelle forte mais se résout gratuitement en un fil Reddit : excellent contenu d'acquisition (calculateur de tarif) plutôt que produit payant. C5 (CRM) est la douleur de rétention à adresser en V2.

**Angle produit suggéré :** « qui sponsorise déjà des newsletters comme la vôtre, et qui contacter », la réplication automatisée du workflow manuel décrit en S15, avec le calculateur de tarif (C3) comme porte d'entrée gratuite.

Limites : scores PullPush figés à la capture (sous-estimés) ; r/juststart et r/Blogging quasi muets sur cette douleur (la niche vit sur r/Substack, r/Newsletters et r/beehiiv) ; contenu public uniquement, aucun contact établi, aucun pseudonyme relevé.
