# Usine à Business Autonome, architecture v2

Système autonome de bout en bout: détection de niches sur Reddit, stratégie et pricing, construction du produit, création des agents opérateurs, acquisition, gestion de portefeuille. L'humain intervient sur trois décisions, tout le reste tourne seul.

Ce document remplace l'architecture v1 (pipeline de dossiers de niche). Le dossier de niche n'est plus un livrable, c'est un état intermédiaire interne.

---

## 1. Principes fondateurs

Cinq principes non négociables, dérivés des échecs documentés des systèmes comparables.

**1. La distribution est une couche de première classe.** Une niche dont le système ne sait pas exécuter lui-même l'acquisition est rejetée au scoring, même si la douleur est réelle. Construire sans savoir vendre est le mode d'échec numéro un des plateformes autonomes existantes.

**2. L'agent est une donnée, pas du code.** Un seul moteur d'exécution générique. Les agents sont des enregistrements en base: rôle, prompt, outils autorisés, modèle, budget, niveau d'autonomie. Créer un agent est un INSERT. Sans ce principe, chaque venture exige du développement humain et le système n'est pas autonome.

**3. Golden path contraint.** La fonderie ne sait construire que des archétypes de produit validés à l'avance, assemblés depuis des blocs éprouvés. La génération libre de produits est interdite: c'est elle qui produit des builds médiocres et des coûts imprévisibles.

**4. Le kill est plus important que le lancement.** Le coût mortel du système n'est pas une venture ratée, c'est la venture zombie qui brûle des tokens sans mourir. Critères de kill explicites, exécutés sans état d'âme.

**5. 95% d'autonomie par design.** Trois moments humains incompressibles: le Go de lancement public, la grille de prix initiale, le kill d'une venture ayant des clients payants. Viser 100% est le piège documenté du marché.

---

## 2. L'arbitrage volume / ticket: les deux, séquencés

Décision actée: le système vise les deux régimes, dans cet ordre.

| | Régime Volume (départ) | Régime Pro (débloqué) |
|---|---|---|
| Archétype | Micro-SaaS agentique petit ticket | Outil métier pour professionnels |
| Rôle | Entraînement du système | Récolte |
| Cycle de vie | Court, kill rapide | Long, qualité par build |
| Ce qu'il calibre | Poids du scoring, bibliothèque de capacités, canaux d'acquisition | Rentabilité du portefeuille |

**Critères de graduation** vers le régime Pro (tous requis):
- Au moins 15 ventures Volume lancées et arbitrées (kill ou scale)
- Au moins une venture Volume avec des clients payants récurrents
- Précision du scoring vérifiée: les niches à score haut surperforment les niches à score bas sur les outcomes réels
- Bibliothèque de capacités couvrant le build d'une venture sans intervention humaine sur le code

Le ticket cible devient une **sortie** du Unit Economics Modeler (niveau 1), pas un réglage global. À terme, le système route chaque niche vers l'archétype adapté.

---

## 3. Architecture en cinq niveaux

```
N0  DÉCOUVERTE      Reddit -> douleurs validées, pré-qualifiées
N1  STRATÉGIE       marché, pricing, unit economics -> Go/No-Go
N2  FONDERIE        build du produit + instanciation des agents
N3  OPÉRATIONS      un Mini-CEO et son équipe par venture
N4  HOLDING         allocation de capital, kill/scale, portefeuille
```

Chaque niveau ne communique avec le suivant que par des objets typés écrits en base. Aucun niveau ne voit le contexte brut du niveau précédent.

### 3.1 Niveau 0, Découverte

Architecture inchangée par rapport à la v1: Scout et Miner en code déterministe, Analyst (embeddings pgvector + LLM d'étiquetage), Validator en CRAG avec fan-out sur sources externes indépendantes. Score déterministe /100 calculé en code, poids externalisés en base.

Deux changements:

- Le score devient une **pré-qualification** interne, plus un livrable
- Un sixième critère entre dans le score: **acquisition autonome exécutable**. Mesure: existence d'au moins deux canaux que les agents du niveau 3 savent opérer (SEO programmatique, annuaires et marketplaces d'outils, contenu comparatif). Une niche magnifique sans canal exécutable est archivée avec ce motif.

### 3.2 Niveau 1, Stratégie

Le maillon absent de la v1. S'exécute uniquement sur les niches pré-qualifiées.

**Pricing Scout.** Collecte les prix pratiqués: pages pricing des concurrents, plateformes d'avis logiciels, boutiques d'applications. Sortie: corridor de prix du marché (plancher, médiane, plafond) avec sources.

**Unit Economics Modeler.** Le garde-fou le plus important du système. Dans un business agentique, le COGS c'est les tokens. Il modélise AVANT le build:

```
coût de service par client par mois
  = (appels LLM par usage type × coût par appel selon le modèle prévu)
  + quote-part infra (hébergement, base, embeddings)

marge brute = prix cible corridor − coût de service
```

Gate dur: marge brute estimée sous un plancher configuré, No-Go automatique, quel que soit le score de la douleur. C'est ce gate qui empêche de lancer un business structurellement déficitaire qui "tourne" très bien.

**Positioning.** Angle, persona d'achat, message principal, objection principale. Sortie structurée réutilisée telle quelle par le Copywriter du niveau 2.

**Gate Go/No-Go final** (code, déterministe): marge brute estimée, coût de build estimé en tokens, délai estimé au premier euro, capacité d'acquisition. Le Go de la toute première venture d'un archétype est L2 (humain). Les suivantes du même archétype passent en L1.

### 3.3 Niveau 2, Fonderie

Deux ateliers: le produit et les agents.

**Atelier produit.** Assemblage, jamais génération libre.

- Boilerplate validé une fois pour toutes par archétype: auth, checkout Stripe, pages légales paramétrées (mentions, CGV, confidentialité), structure de landing, espace client minimal
- Le Builder (agent de code en mode headless) ne code que le workflow agentique cœur de la venture, dans un périmètre de fichiers délimité
- Provisioning sur infrastructure propriétaire: VPS avec Coolify ou Dokploy, un projet Supabase par venture, un sous-domaine par venture, produits et prix créés dans le Stripe unique de la société
- Quality gate de build: tests du boilerplate au vert, parcours d'achat testé en mode test Stripe, budget de build non dépassé. Échec au gate: une seule relance de build, puis escalade humaine

**Atelier agents (Agent Forge).** L'Architect ne produit plus un document mais un **Bill of Agents**: la liste des instances nécessaires à la venture, chacune référençant un gabarit de la bibliothèque avec ses paramètres (spécialisation du prompt, outils, budget, autonomie). La sortie concrète de l'Agent Forge est un **template de company Paperclip**: la Fonderie instancie la venture par import de template, organigramme et budgets pré-câblés (voir section 4).

La bibliothèque de gabarits, six au départ, découpés par **frontières de contexte** et non par rôles: deux sous-tâches qui ont besoin du même contexte en profondeur vivent dans le même gabarit.

| Gabarit | Rôle | Modèle par défaut | Autonomie max |
|---|---|---|---|
| Mini-CEO | Boucle nocturne de la venture, choix de l'action au levier maximal, unique coordinateur | Haut de gamme | L1 |
| Builder | Code du workflow cœur, correctifs, ET ses propres tests (même contexte, jamais séparés) | Haut de gamme, cache actif | L1 |
| Growth | Positionnement, copy (landing, emails, pages SEO) et exécution des canaux d'acquisition: un seul contexte, du vocabulaire du persona jusqu'au titre publié | Mi-gamme | L1, L2 pour toute publication externe |
| Vérificateur | Contrôle indépendant des builds et des contenus publics contre des critères explicites. Frontière volontaire: il ne partage PAS le contexte du producteur, son regard neuf est sa valeur | Mi-gamme | L0 |
| Support | Réponses clients, remboursements sous plafond | Mi-gamme | L1 sous plafond, L2 au-delà |
| Observateur | Métriques, anomalies et veille concurrentielle de la venture (lecture seule) | Économique | L0 |

Le Vérificateur travaille sur checklists concrètes (suite de tests complète au vert, parcours d'achat testé de bout en bout, zéro affirmation non sourcée sur les surfaces publiques), jamais sur un jugement d'ensemble: un vérificateur aux critères flous déclare victoire sans vérifier.

Chaque instance créée passe une **éval d'activation** générée depuis son gabarit (jeu d'entrées connues, plages de sortie attendues) avant d'obtenir ses accès. Un agent qui échoue à son éval n'est jamais activé.

### 3.4 Niveau 3, Opérations

Chaque venture lancée reçoit son équipe instanciée et son Mini-CEO. Boucle nocturne par venture:

```
Cron -> lecture de l'état de la venture (trafic, inscrits, conversions, MRR, tickets, budget restant)
     -> choix d'UNE action au levier maximal parmi les capacités de son équipe
     -> exécution via l'agent concerné
     -> écriture du résultat + verdict dans l'état
     -> rapport de venture consolidé vers le niveau 4
```

**Canaux d'acquisition autorisés** (liste blanche, tout le reste est interdit):
- SEO programmatique sur le site de la venture (pages comparatives, pages persona, glossaire métier)
- Soumission aux annuaires et marketplaces d'outils
- Contenu comparatif honnête sur le site propre
- Emailing sur la liste propre de la venture, opt-in uniquement

**Interdits absolus** (L3): astroturfing Reddit ou ailleurs, faux avis, faux témoignages, statistiques inventées, contact des auteurs des posts sources, achat média sans approbation humaine. Ce sont les pratiques exactes qui ont détruit la réputation des plateformes comparables.

### 3.5 Niveau 4, Holding

L'allocateur de capital. Tourne après les boucles de niveau 3.

**Entrée:** rapports de toutes les ventures, budgets consommés (API Paperclip), revenus (Stripe), P&L par venture.

**Exécution:** kill = mise en pause puis archivage de la company Paperclip; scale = relèvement des budgets de la company; les décisions elles-mêmes restent calculées en code côté Zeurion.

**Décisions:**

| Décision | Critère de départ | Autonomie |
|---|---|---|
| Kill | Pas de premier euro après N semaines ET M actions marketing exécutées, ou marge réelle négative sur deux cycles | L1 si zéro client payant, L2 sinon |
| Scale | Conversion au-dessus du seuil, marge réelle positive: budget venture doublé | L1 |
| Maintien | Ni l'un ni l'autre: budget reconduit, une action par nuit | L0 |
| Graduation Pro | Critères de la section 2 atteints | L2 |

Une venture tuée est archivée avec un **post-mortem structuré** (pourquoi le score initial était bon ou mauvais, quel critère a menti) qui alimente la boucle d'apprentissage.

**Rapport matinal unique** (Telegram, horodaté, hash d'audit): état du portefeuille, P&L par venture, actions de la nuit, décisions L2 en attente en tête de message.

---

## 4. Le runtime d'agents: Paperclip comme plan de contrôle

Décision d'implémentation: le runtime n'est pas développé, il est adopté. Paperclip (open source, licence MIT, auto-hébergé, Node.js + Postgres) fournit le plan de contrôle complet: companies, organigrammes, tickets, budgets, heartbeats, approbations, audit. Zeurion garde l'intelligence (découverte, scoring, unit economics, fonderie, allocation de capital), Paperclip fait tourner les ventures.

Correspondance directe entre l'architecture v2 et Paperclip:

| Concept Zeurion | Implémentation Paperclip |
|---|---|
| Une venture | Une company (isolation native des données et de l'audit, companies illimitées sur un seul déploiement) |
| Bill of Agents | Template de company exporté/importé par la Fonderie (organigramme, agents, budgets pré-câblés) |
| Boucle nocturne du Mini-CEO | Heartbeats planifiés + routines cron, chaque exécution créant un ticket tracé |
| Backlog et blocked_by | Tickets avec dépendances bloquantes natives et checkout atomique (zéro double travail) |
| Disjoncteur par venture | Budgets par agent et par company avec hard stop natif: dépassement = agents en pause, travaux en file annulés |
| HITL niveau L2 | Portes d'approbation avec rollback des configurations |
| Piste d'audit venture | Journal immuable + traçage complet des tool calls |
| Cockpit Zeurion | Dashboard React de Paperclip, accessible mobile, hébergé sur le domaine zeurion |

Les agents se branchent en adapters: Mini-CEO et Builder en Claude Code, les autres gabarits en agents HTTP, et un agent HTTP peut être un simple webhook n8n, ce qui permet de recycler les sous-workflows existants comme employés de la company.

**Schéma d'une instance d'agent** (la spécialisation que la Fonderie écrit dans le template):

```json
{
  "instance_id": "...",
  "venture_id": "...",
  "template_id": "mini-ceo | builder | growth | verificateur | support | observateur",
  "description": "quand invoquer cet agent: c'est le signal de routage lu par le Mini-CEO",
  "out_of_scope": "ce que cet agent ne couvre pas: la parade contre la duplication de travail",
  "system_prompt_final": "gabarit + spécialisation venture",
  "model": "...",
  "tools_allowed": ["..."],
  "budget_tokens_cycle": 0,
  "budget_eur_cycle": 0,
  "autonomy_level": "L0 | L1 | L2",
  "status": "pending_eval | active | suspended | retired",
  "eval_score": 0.0
}
```

**Cycle d'exécution à chaque heartbeat:**

1. Paperclip réveille l'agent avec son ticket et l'ascendance complète de l'objectif (le pourquoi, pas juste le titre)
2. Vérification budgétaire native AVANT exécution (atomique)
3. Zeurion injecte le digest compact du World Model de la venture (jamais l'historique brut), partie stable en cache
4. L'agent exécute et rend une sortie au schéma JSON de son gabarit
5. Validation de la sortie, routage selon le niveau d'autonomie (L2 = porte d'approbation Paperclip)
6. Journalisation native: tokens, coût, latence, tool calls, session persistée entre heartbeats

Deux règles de coordination, héritées du paradigme sous-agents, portées par l'organigramme:

- **Aucune communication directe entre agents d'une venture.** Les lignes hiérarchiques Paperclip font remonter chaque résultat compressé au Mini-CEO, unique coordinateur. Flux prévisible, audit trivial
- **Le séquençage vit dans les tickets, pas dans le raisonnement.** Les dépendances bloquantes sont des données lues par Paperclip; le Mini-CEO n'a pas à re-déduire l'ordre des tâches à chaque cycle

**Durcissement obligatoire du déploiement** (projet jeune, accès indirect au Stripe):

- Version épinglée, aucune mise à jour automatique
- Télémétrie coupée dès l'installation: PAPERCLIP_TELEMETRY_DISABLED=1
- Mode authentifié (pas le mode local de confiance) dès que le serveur quitte la machine locale
- Aucun skill du marketplace sans lecture du code (failles reconnues dans l'écosystème de skills)
- Secrets scopés par company via le gestionnaire de secrets Paperclip, jamais dans les prompts
- Permissions minimales par agent, et le World Model reste dans le Postgres Zeurion: Paperclip exécute, il ne possède pas la connaissance, et doit rester remplaçable

---

## 5. Modèle de données

Postgres + pgvector, un seul cluster, schémas séparés par niveau.

```
-- Découverte (inchangé v1)
subreddits, raw_signals, pain_clusters, evidence, scores

-- Stratégie
market_scans        venture candidate, corridor de prix, sources
unit_economics      coût de service, marge estimée, hypothèses
go_decisions        verdict, critères, opérateur si L2

-- Fonderie
archetypes          golden paths disponibles, statut (actif/verrouillé)
capabilities        blocs réutilisables, version, ventures utilisatrices
ventures            id, nom, archetype, statut, sous-domaine, stripe_ids
builds              venture, version, résultat des gates, coût

-- Runtime agents (propriété partagée avec Paperclip)
agent_templates     gabarit, prompt de base, outils, éval de référence (source de vérité Zeurion)
-- Instances, tickets, dépendances, budgets, sessions et audit des ventures vivent
-- dans le Postgres de Paperclip. Zeurion réplique les événements de coût via son
-- API dans venture_pnl et n'y stocke aucune connaissance stratégique.

-- Opérations et Holding
venture_state       kpis courants par venture (jsonb versionné)
-- venture_backlog est remplacé par les tickets Paperclip (dépendances bloquantes natives)
venture_pnl         revenus Stripe, coûts tokens, coûts infra, marge
capital_decisions   kill/scale/maintien, critères déclencheurs, opérateur
post_mortems        venture, cause, écart score/réalité, leçons
runs                cycle global, coûts, hash d'audit chaîné
```

Règle transverse: pas de pseudonymes Reddit en clair, pas de contenu tiers intégral stocké durablement, permaliens et extraits courts uniquement.

---

## 6. Économie du système

**Tiering des modèles.** Économique pour triage, métriques, veille. Mi-gamme pour rédaction, support, marketing. Haut de gamme uniquement pour Mini-CEO, Builder et la décision stratégique de niveau 1. Prompt caching obligatoire sur toute partie stable (leçon directe du test Superviseur du 19/07: des millions de tokens d'entrée pour quelques milliers de sortie, c'est la signature d'un contexte non cachés réinjecté en boucle).

**Disjoncteur à deux étages.** Plafond par venture par cycle, porté nativement par les budgets Paperclip (hard stop: agents en pause, travaux en file annulés), ET plafond portefeuille par nuit vérifié en code côté Zeurion. Dépassement venture: la venture passe son tour. Dépassement portefeuille: arrêt propre de la nuit, rapport, reprise le lendemain. Avec dix Mini-CEO nocturnes, une boucle défaillante non plafonnée se multiplie par dix.

**Comptabilité par venture.** Chaque appel LLM est imputé à une venture. Le P&L par venture inclut les tokens comme COGS. C'est ce qui rend les décisions kill/scale honnêtes.

---

## 7. Niveaux d'autonomie consolidés

| Niveau | Périmètre | Traitement |
|---|---|---|
| L0 | Collecte, scoring, métriques, veille, archivage | Automatique silencieux |
| L1 | Build, contenu sur sites propres, support sous plafond, kill d'une venture sans client, scale budgétaire | Automatique + notification |
| L2 | Go de lancement public, grille de prix initiale, kill d'une venture avec clients payants, achat média, remboursement au-dessus du plafond, graduation Pro | Approbation humaine, Send + Wait, timeout 24h, jamais d'auto-approbation |
| L3 | Astroturfing, faux avis, contact des auteurs sources, création d'entité légale ou de compte bancaire ou Stripe, communication en ton nom personnel | Interdit au système, sans exception |

Classement par réversibilité d'abord, coût ensuite.

---

## 8. Les trois volants d'inertie

1. **Outcomes vers scoring.** Chaque post-mortem et chaque scale réécrit les poids du score de découverte (table de poids versionnée, historique rejouable). Après 20 ventures, le détecteur est entraîné sur du réel, ce qu'aucun outil du marché ne possède.
2. **Bibliothèque de capacités.** Chaque bloc construit pour une venture (connecteur, gabarit de page, sous-workflow) entre au catalogue. Le coût marginal de build décroît à chaque venture.
3. **Audience mutualisée.** Listes email et preuves sociales des ventures vivantes réutilisables pour les lancements suivants, dans le respect du consentement (opt-in croisé explicite uniquement).

---

## 9. Cadre légal et conformité

- Toutes les ventures sont des produits et marques commerciales de la société ombrelle (SASU existante). Aucune création d'entité, de compte bancaire ou de compte de paiement par le système
- Un seul compte Stripe, produits et prix séparés par venture
- CGV, mentions légales, politique de confidentialité: gabarits validés une fois par un humain (idéalement relus par un professionnel du droit), paramétrés ensuite automatiquement par venture
- TVA et facturation dans le périmètre comptable existant de la société
- RGPD: registre des traitements par venture, opt-in explicite, suppression sur demande exécutable par le Support
- API Reddit officielle uniquement, quotas respectés, attribution systématique des citations
- Aucune affirmation non sourcée sur aucune surface publique d'aucune venture

---

## 10. Observabilité et audit

Journal par exécution d'agent: horodatage, instance, venture, modèle, tokens, coût, latence, hash d'entrée, hash de sortie, décision et confiance, intervention humaine éventuelle.

La couche venture est fournie par Paperclip: journal d'audit immuable, traçage complet des tool calls, événements de coût, export OpenTelemetry optionnel. La chaîne de hachage ci-dessous reste côté Zeurion, sur le journal global des cycles et des décisions de capital.

Chaîne de hachage sur le journal global:

```
hash_n = SHA-256(execution_id + horodatage + hash_entrée + hash_sortie + hash_n-1)
```

Tableaux de suivi minimum: coût par venture par nuit, ratio entrée/sortie tokens par gabarit (détecteur de contexte non caché), taux d'échec aux gates, délai moyen au premier euro, précision du scoring (corrélation score initial / outcome).

Kill switch global et par venture depuis Telegram. Dead man's switch: absence de rapport matinal à l'heure prévue, alerte immédiate.

---

## 11. Évaluations avant autonomie

À construire avant toute mise en boucle nocturne.

- **Jeu de référence découverte:** 20 niches à outcome connu, le scoring doit les ordonner correctement
- **Évals d'activation par gabarit:** chaque type d'agent a son jeu d'entrées connues et ses plages de sortie
- **Éval de fonderie:** un build complet sur une niche de test, gates au vert, en budget
- **Évals adverses:** contenu Reddit contenant des instructions adressées aux agents (traité comme donnée, jamais suivi), source externe indisponible, réponse client hostile au Support, dépassement de budget simulé
- **Régression:** tout changement de prompt, poids, gabarit ou modèle rejoue la suite complète avec comparaison des distributions

---

## 12. Roadmap

**Phase 0, preuve manuelle.** Une venture complète menée à la main: niche choisie via une analyse Reddit manuelle, pricing décidé, produit assemblé avec les outils existants, mise en ligne, premières actions d'acquisition. Objectif: un premier euro et la liste exacte des gestes accomplis, qui devient le cahier des charges de l'automatisation. Rien ne s'automatise avant ce premier euro.

**Phase 1, découverte automatisée.** Niveau 0 complet (architecture v1). Sortie: flux de niches pré-qualifiées reproductibles.

**Phase 2, stratégie et fonderie produit.** Niveau 1, puis atelier produit du niveau 2 sur l'archétype Volume unique. Le Bill of Agents existe mais les agents sont encore lancés manuellement.

**Phase 3, runtime et opérations.** Déploiement Paperclip durci (version épinglée, télémétrie coupée, mode authentifié, secrets scopés), Agent Forge produisant les templates de company, évals d'activation, Mini-CEO sur UNE venture pilote via heartbeats, une action par nuit, deux semaines d'observation.

**Phase 4, holding et portefeuille.** Allocateur de capital, kill/scale, montée progressive du nombre de ventures. Graduation Pro uniquement sur critères de la section 2.

Chaque phase produit de la valeur seule et sert de critère d'entrée à la suivante.

---

## 13. Anti-patterns spécifiques à ce système

1. Générer les produits librement au lieu d'assembler des golden paths: builds médiocres, coûts imprévisibles
2. Coder les agents à la main par venture: le système cesse d'être autonome à la deuxième venture
3. Lancer sans modèle de coût de service: le COGS tokens transforme un succès d'usage en gouffre
4. Garder les ventures zombies: le kill discipliné est la rentabilité du portefeuille
5. Confier le score final ou les décisions de capital à un LLM: signaux LLM, décisions en code
6. Acquisition par imitation humaine (astroturfing, faux avis): destruction de réputation documentée chez les comparables, L3 absolu
7. Contexte brut entre niveaux: chaque niveau ne reçoit que des objets typés et des digests
8. Automatiser avant le premier euro manuel de la phase 0
9. Multiplier les archétypes avant que le premier soit rentable
10. Oublier que dix boucles nocturnes multiplient par dix toute erreur non plafonnée
11. Découper les agents par rôle plutôt que par frontière de contexte: chaque frontière inutile dégrade l'information au passage et facture deux fois le même contexte
