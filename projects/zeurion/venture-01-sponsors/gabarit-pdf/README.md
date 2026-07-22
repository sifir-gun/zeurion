# Gabarit PDF de livraison du rapport sponsors

Convertit le markdown d'un rapport de prospection (spec : ../livrable-rapport-spec.md) en PDF client au design « Salle de tri » (tokens : ../site/design-system.md). Créé le 2026-07-22. Le PDF est la moitié du livrable ; l'autre moitié est le CSV des contacts (hors périmètre de ce gabarit).

## Usage

```
cd gabarit-pdf
npm install          # première fois uniquement
node build.mjs ../rapport-echantillon/sponsor-report-dew.md
```

Sortie par défaut : out/<nom-du-md>.pdf. Options :

- `-o fichier.pdf` : chemin de sortie
- `--client "Nom"` : nom du client sur la couverture (défaut : partie du titre H1 après « : »)
- `--contact "email"` : email de contact au colophon (défaut : placeholder [TO COMPLETE], à passer en contact@zeurion.ai dès que la boîte existe)
- `--format letter|a4` : défaut letter (clients anglophones, majoritairement US)
- `--keep-html` : conserve le HTML intermédiaire dans out/ pour débogage

Prérequis : Node 18+, Google Chrome installé dans /Applications (rendu print). Aucun accès réseau nécessaire : les polices (Space Grotesk, Inter, IBM Plex Mono, licence OFL) sont embarquées dans template/fonts/.

## Conventions structurelles attendues du markdown

Le gabarit est piloté par la structure, pas par le contenu : tout rapport suivant la spec se met en page sans adaptation.

- Premier H1 = titre du rapport ; les paragraphes qui suivent (jusqu'au premier `---` ou H2) deviennent la méta de couverture.
- H2 = section, une page chacune, numérotée automatiquement (01, 02...).
- H2 contenant « tier N » = page de bascule de tier (filet accent, gros titre, non numérotée) ; fixe le tier des fiches suivantes.
- H3 « N. Marque » = fiche sponsor, une page, en-tête en ligne d'inbox : pastille pleine (tier 1) ou vide (tiers 2-3), numéro mono, drapeau rouge priorité sur les tier 1 (même SVG que la landing).
- Paragraphe ouvrant sur `**Étiquette** :` = champ étiqueté (étiquette mono majuscules en accent).
- Blockquote dont la première ligne commence par `Subject:` = carte email (bandeau objet sur fond muted).
- Tableaux GFM = tableaux de benchmarks (en-têtes mono, données sourcées).

Le nombre de fiches détectées alimente la pilule « N unread » de la fenêtre d'inbox en couverture.

## Critères de validation avant livraison

1. Le build affiche le bon nombre de fiches (30 pour un rapport conforme à la spec) et le bon nom de client.
2. Contrôle visuel : couverture (titre, client, pilule), une fiche tier 1 (pastille pleine + drapeau), une fiche tier 3 (pastille vide), le tableau de prix, la dernière page (colophon).
3. Aucun débordement de page au milieu d'une carte email ; chaque fiche tient sur sa page.
4. Le colophon porte un email de contact réel, pas le placeholder [TO COMPLETE].
5. Les liens de preuve restent cliquables dans le PDF (test sur 2-3 URLs).

## Limites connues

- Chemin Chrome codé en dur (poste macOS de Guney) ; à paramétrer si le build déménage.
- Le pied de page (zeurion · pagination) utilise une police système : les templates de pied Chrome n'accèdent pas aux polices embarquées.
- Une fiche plus longue qu'une page déborderait sur la suivante sans casse, mais sans en-tête de continuation.
