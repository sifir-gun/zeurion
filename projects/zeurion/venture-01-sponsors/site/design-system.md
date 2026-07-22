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

## Révision v1.1 (2026-07-21, après retour de Guney sur la timidité du design)

- Header sticky avec wordmark « zeurion. » (point en accent) et CTA mono encadré.
- La signature s'assume : l'inbox est rendue comme une fenêtre d'application mail (barre avec pastilles, libellé mono « inbox · sponsor-opportunities », compteur « 30 unread » en pilule accent, ombre portée douce, ligne « + 24 more in the full report »).
- Échelle typographique relevée : h1 jusqu'à 3,6rem, h2 jusqu'à 2,1rem.
- Un seul moment de contraste : la section prix passe en bande sombre pleine largeur (fond --ink, texte clair), le reste de la page reste clair. C'est l'unique inversion autorisée.

## Révision v1.2 (2026-07-22, extractions ui-ux-pro-max exploitées à fond)

- Nouveau token --priority : #DC2626, issu de la palette « Inbox blue + priority red » de ui-ux-pro-max. Usage strictement fonctionnel : le drapeau de priorité SVG sur les lignes tier 1 de l'inbox. Jamais décoratif, jamais sur les CTA.
- Scroll reveal subtil sur les sections (opacity + 12px, 350ms, une seule fois, IntersectionObserver), conforme au preset « Scroll Reveal (Subtle) » de ui-ux-pro-max. Dégradation propre : sans JS tout est visible, prefers-reduced-motion désactive tout.
- Rythme de page : la section offre passe sur fond --muted (bande bordée), créant l'alternance clair / gris / clair / sombre.
- Typo : paires alternatives évaluées via le domaine typography (Fira Code/Sans, Space Mono), rejetées : Space Grotesk + Inter + IBM Plex Mono reste plus adapté au concept.
