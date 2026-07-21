# Système de design zeurion.ai : « Salle de tri »

Choisi par Guney le 2026-07-21 parmi 4 directions (base ui-ux-pro-max « Trust & Authority » retravaillée avec frontend-design). Source de vérité pour tout le site. Ne pas dériver de ces tokens sans décision consignée.

## Concept

L'univers du produit est l'inbox : le rapport trouve des sponsors, le client envoie des emails. La landing rend les 30 sponsors de l'échantillon comme des lignes de boîte de réception (expéditeur, objet, pastille). Ton : outil professionnel, précis, zéro décoration.

## Tokens

### Couleurs

- --bg : #FAFBFC (fond, blanc cassé froid)
- --surface : #FFFFFF (cartes, lignes d'inbox)
- --ink : #16181D (texte principal)
- --ink-soft : #4B5563 (texte secondaire)
- --accent : #1D4ED8 (bleu postal, unique accent : CTA, pastilles non-lu, liens)
- --accent-ink : #FFFFFF (texte sur accent)
- --line : #E5E8EC (bordures, séparateurs)
- --muted : #F1F3F6 (fonds de sections alternées, tags)
- --ok : #047857 (uniquement pour les preuves vérifiées, usage rare)

Contraste : ink sur bg 15,8:1, accent sur blanc 6,6:1, AA garanti partout. Pas de dégradés, pas de deuxième accent.

### Typographie

- Display : Space Grotesk 500/700, titres serrés (letter-spacing -0.02em)
- Corps : Inter 400/600, 16px base, line-height 1.6
- Data (dates, montants, tags de format, URLs) : IBM Plex Mono 400/500, toujours pour les données d'observation

Échelle : 40/28/20/16/14. Les chiffres clés en Space Grotesk 700, jamais animés en compteur.

### Signature

Le composant « inbox row » : une ligne par sponsor avec pastille (pleine = tier 1, vide = tier 2/3), nom en semibold, « objet » décrivant le signal observé, tag mono du format (PRIMARY, DEDICATED...), date mono à droite. Hover : fond muted, translation 2px. C'est le seul élément avec micro-interaction.

### Interdits

Émojis en icônes (SVG Lucide uniquement), dégradés violets, compteurs animés, fausse urgence, badges de confiance décoratifs, deuxième famille d'accent. Motion : 150-250ms, respecter prefers-reduced-motion, aucune animation en boucle.

### Modes

V1 : clair uniquement (l'inbox de référence est claire). Le sombre attendra une vraie demande.
