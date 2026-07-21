---
name: site-venture
description: Construire et mettre en ligne le site d'une venture Zeurion, landing page, pages SEO programmatiques, checkout et pages légales. Utiliser quand Guney demande une landing, un site de venture, des pages SEO, un calculateur ou aimant à leads, ou la mise en ligne d'une offre.
---

# Site de venture

Objectif : un site sobre, rapide et conforme, qui vend une offre et alimente l'acquisition en liste blanche. Le site est un actif de la venture : chaque bloc construit (gabarit de page, composant, structure SEO) a vocation à entrer au catalogue de capacités réutilisables.

## Entrées

Demander si absent : nom de la venture, offre et prix (normalement dans le README de la venture), domaine ou sous-domaine cible, preuves disponibles (échantillon, chiffres sourcés).

## Stack par défaut (ajustable sur demande)

- **Astro** en site statique : rapide, SEO natif, pages programmatiques générées depuis des fichiers de données (JSON/CSV), pas de backend à maintenir.
- **Déploiement** : VPS via Coolify (ou équivalent statique), un sous-domaine par venture.
- **Paiement phase 0** : Stripe Payment Links, zéro code de checkout. Le checkout intégré attend le boilerplate de la Fonderie.
- **Analytics** : solution respectueuse du RGPD sans bannière cookie si possible (Plausible ou umami auto-hébergé).
- **Capture email** : opt-in explicite uniquement, double confirmation, liste propre à la venture.

## Étapes

1. **Structure de la landing**, dans cet ordre : titre orienté résultat, sous-titre qui nomme la cible, preuve (échantillon, chiffres sourcés), déroulé de l'offre, prix et ce qu'il inclut, FAQ (objections réelles relevées dans l'audit de niche), appel à l'action unique. Une page, un objectif.
2. **Copywriting** : ton externe des règles (professionnel, sobre). Zéro affirmation non sourcée : chaque chiffre affiché a une source, chaque promesse est tenable. Pas de superlatifs creux, pas de faux compteurs, pas de fausse urgence. Les comparaisons avec les concurrents sont factuelles et sourcées (prix publics).
3. **Design** : utiliser les compétences installées dans l'ordre : ui-ux-pro-max (génération du système : style, palette, typographie adaptés au type de produit, avec persistance dans design-system/) puis frontend-design (direction artistique distinctive, anti-templates). Proposer 3-4 directions visuelles concrètes (fond, accent, typographie, une ligne de justification chacune) et faire choisir Guney avant d'implémenter. Éviter les esthétiques génériques (Inter partout, dégradés violets) ; viser un caractère propre à la niche de la venture. Contraste AA minimum, lisible en clair et sombre si le thème double existe.
4. **Pages SEO programmatiques** : une source de données par patron de requête (ex. un JSON des niches), un gabarit par patron, génération d'une page par entrée. Chaque page a un contenu réellement utile et distinct (pas de doorway pages), un maillage interne, un title et une meta description uniques. Sitemap et robots.txt générés.
5. **Aimant à leads** s'il est prévu (calculateur, outil gratuit) : fonctionnel sans inscription, la capture email est optionnelle et opt-in, la valeur est donnée avant la demande d'email.
6. **Pages légales** : mentions légales, CGV, politique de confidentialité depuis les gabarits de la société ombrelle, paramétrées pour la venture. Bloquer la mise en vente tant qu'elles ne sont pas en place.
7. **Mise en ligne et contrôle** : déploiement, vérification du checkout en mode test Stripe de bout en bout, puis contrôle qualité : passer la compétence web-design-guidelines sur le code du site (audit accessibilité et bonnes pratiques) en plus des critères de sortie ci-dessous.

## Contraintes

- Respecter .claude/rules/zeurion-garde-fous.md : acquisition liste blanche, aucune affirmation non sourcée sur une surface publique.
- RGPD : registre des traitements de la venture mis à jour, opt-in explicite, pas de tracking tiers sans consentement.
- Chaque geste de construction en phase 0 est consigné dans le journal de phase 0 avec son niveau d'automatisation futur.

## Sortie

Le site déployé sur son sous-domaine. Validation : Lighthouse 90+ sur les quatre scores, parcours d'achat testé en mode test Stripe, pages légales présentes et liées depuis le footer, chaque affirmation chiffrée de la landing tracée vers sa source, sitemap accessible.
