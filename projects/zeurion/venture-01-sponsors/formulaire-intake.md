# Formulaire d'intake post-paiement

Créé le 2026-07-22. Contenu prêt à coller dans Tally. Source des champs : livrable-rapport-spec.md, section « Entrées client ». Le formulaire est la première étape du délai annoncé : les 5 jours ouvrés courent à partir de la soumission, pas du paiement, et le formulaire le dit explicitement.

## Branchement Stripe vers Tally

1. Dans le Payment Link Stripe (349 euros), configurer la redirection après paiement vers l'URL du formulaire Tally avec le paramètre de session : `https://tally.so/r/XXXXXX?session_id={CHECKOUT_SESSION_ID}`. Stripe remplace `{CHECKOUT_SESSION_ID}` automatiquement.
2. Dans Tally, créer un champ caché (hidden field) nommé `session_id` qui capture ce paramètre d'URL. C'est la clé de rapprochement paiement-formulaire : sans elle, impossible d'associer une commande à une soumission si le client paie et remplit avec deux emails différents.
3. Activer la notification email Tally vers la boîte de contact à chaque soumission.
4. Réglages Tally : une soumission par personne désactivé (un client peut commander pour deux newsletters), page de confirmation personnalisée avec le texte de la section « Après soumission ».

Cas d'erreur à couvrir : client qui paie mais ne remplit jamais le formulaire. Geste manuel phase 0 : vérifier chaque paiement Stripe sans soumission Tally correspondante sous 24 h et relancer par email depuis la boîte de contact.

## Contenu du formulaire (anglais, à coller dans Tally)

Chaque bloc ci-dessous est un champ Tally. Type et obligation entre crochets, en français : ne pas coller les crochets.

---

**Titre du formulaire** : Your sponsor report starts here

**Introduction** :

> Payment received, thank you. This form takes about 3 minutes and gives us everything we need to build your report. Your 5-business-day delivery window starts the moment you hit Submit.

---

1. [email, obligatoire] **Where should we deliver your report?**
   Aide : We'll send the PDF and the contacts spreadsheet to this address. Use the inbox you actually read.

2. [url, obligatoire] **Your newsletter's URL**
   Aide : The public link to your newsletter or its archive page.

3. [choix unique, obligatoire, avec « Other » et champ libre] **Which platform do you publish on?**
   Options : Substack / beehiiv / Ghost / Kit (ConvertKit) / Other
   Aide : This tells us where to find your public archive and which stats your dashboard can export.

4. [texte court, obligatoire] **Your niche and audience, in one sentence**
   Aide : Who reads you and what do they do for a living? Example: "Detection engineers and SOC analysts at mid-size tech companies." The sharper this sentence, the sharper the sponsor matching.

5. [nombre, obligatoire] **How many subscribers do you have?**
   Aide : Your current total. An exact number beats a round one: sponsors discount figures they can't verify, and so do we.

6. [nombre, optionnel] **Average open rate (%)**
   Aide : From your platform dashboard, last 3 months if available. Leave blank if you don't know; we'll note it as unpublished in the pricing section.

7. [nombre, optionnel] **Average click-through rate (%)**
   Aide : Same source. Optional, but it strengthens the pricing recommendation.

8. [texte long, optionnel] **Do you already sell sponsorships? If so, at what rates and in which formats?**
   Aide : Current rate card, past deals, formats you offer (primary, secondary, classified, dedicated). Write "never sold any" if that's the case: untouched inventory is an argument in itself.

9. [texte long, optionnel] **Up to 3 newsletters or podcasts you consider comparable to yours**
   Aide : Names or URLs. Optional, but it speeds up the matching and anchors the comparison where you want it.

10. [texte long, optionnel] **Anything else we should know?**
    Aide : Topics you won't accept sponsors from, brands you've already talked to, timing constraints. Anything that should shape the report.

11. [champ caché] `session_id`
    Capture le paramètre d'URL de la redirection Stripe. Invisible pour le client.

---

**Bouton de soumission** : Start my report

## Après soumission (page de confirmation Tally)

> **We're on it.**
>
> Your report is now in production. Here's what happens next:
>
> 1. We scan the public archives of 15-20 newsletters and podcasts comparable to yours, covering the last 6 months of sponsor activity.
> 2. Every brand in your report comes with dated, linked evidence of its spend, a named contact, and a ready-to-send pitch.
> 3. Your PDF and contacts spreadsheet arrive in your inbox within 5 business days.
>
> If anything about your submission needs clarifying, we'll reach out from our contact address. Otherwise, the next email you get from us is your report.

## Critères de validation

1. Parcours complet testé en conditions réelles : paiement test Stripe, redirection, `session_id` présent dans la soumission Tally reçue.
2. Les champs obligatoires bloquent la soumission s'ils sont vides ; les optionnels ne la bloquent pas.
3. La notification email de soumission arrive sur la boîte de contact.
4. Le texte ne contient aucune affirmation non sourcée sur les résultats (pas de « you'll close X sponsors ») : le formulaire ne promet que le contenu et le délai du livrable, conformes à la spec et à la landing.
5. Rapprochement testé : une soumission sans `session_id` (accès direct à l'URL Tally sans payer) est détectable et traitée par le geste manuel de vérification sous 24 h.

## Bloquants d'activation

- Compte Tally et création du formulaire (côté Guney).
- Payment Link Stripe créé, avec la redirection configurée (bloquant n°2 de donnees-legales.md).
- Boîte de contact active pour les notifications et les relances (bloquant n°1).
