---
name: generation-skill-md
description: Créer une nouvelle compétence Claude Code en générant .claude/skills/<nom>/SKILL.md à partir d'un flux de travail décrit. Utiliser quand Guney remarque qu'une demande revient, demande de créer une compétence, ou veut transformer une procédure en modèle réutilisable.
---

# Génération de SKILL.md

Objectif : transformer un flux de travail récurrent en compétence propre, actionnable et vérifiable.

## Étapes

1. Clarifier le flux si nécessaire, en une passe de questions maximum : déclencheur (quand la compétence doit s'activer), entrées requises, étapes concrètes, sortie attendue, garde-fous. Si Guney a déjà tout décrit, ne rien redemander.
2. Nommer la compétence en kebab-case, nom court et descriptif.
3. Écrire .claude/skills/<nom>/SKILL.md avec un frontmatter YAML contenant name et description. La description dit quand utiliser la compétence et contient les mots déclencheurs probables : c'est elle qui décide de l'activation.
4. Structurer le corps : objectif en une phrase, entrées (avec ce qu'il faut demander si absent), étapes numérotées et actionnables, contraintes, sortie avec critères de validation explicites.
5. Mettre à jour la section Compétences de CLAUDE.md (retirer du backlog si elle en vient, ajouter à la liste des compétences disponibles).
6. Proposer un commit git.

## Règles de qualité

- Une compétence couvre un seul flux de travail. Deux flux : deux compétences.
- Chaque étape doit être exécutable sans interprétation. Une étape floue est une étape à réécrire.
- La sortie inclut toujours comment vérifier qu'elle est correcte.
- Respecter .claude/rules/communication-style.md : jamais de tirets cadratins, pas d'emojis, prose claire.

## Sortie

Le dossier .claude/skills/<nom>/ avec son SKILL.md, CLAUDE.md à jour. Validation : le frontmatter est du YAML valide, la description contient le déclencheur, chaque étape est actionnable.
