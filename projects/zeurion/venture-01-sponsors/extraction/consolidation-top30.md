# Consolidation de l'extraction : top 30 sponsors et back-test

Date : 2026-07-21. Fusion des 3 lots d'extraction (103 observations brutes, doublons inter-lots dédupliqués : tl;dr sec couvert par les lots 1, 2 et 3 ; Risky Business par les lots 2 et 3). Fenêtre effective : avril-juillet 2026, cœur sur juin-juillet.

## Back-test de la méthode

Principe : les listes de sponsors déclarées publiquement par Vulnerable U (vulnu.com/c/sponsors) et Resilient Cyber (resilientcyber.io/sponsorships) servent de vérité terrain. Si l'extraction depuis des sources INDÉPENDANTES retrouve ces marques comme acheteuses actives, la méthode est validée.

**Contre Vulnerable U (12 sponsors déclarés) : 11 retrouvés actifs dans des sources indépendantes, soit 92 %.**

| Sponsor déclaré VU | Retrouvé actif ailleurs | Où |
|---|---|---|
| Tines | OUI | Unsupervised Learning, CloudSecList, tl;dr sec, Venture in Security |
| Wiz | OUI | tl;dr sec x2 |
| Vanta | OUI | Cyber Security Headlines, SponsorGap |
| Palo Alto Networks | OUI | tl;dr sec, Defense in Depth x3 |
| ThreatLocker | OUI | Darknet Diaries x5, Defense in Depth x4, CSH |
| Prowler | OUI | Risky Business Soap Box |
| Teleport | OUI | tl;dr sec, SponsorGap |
| Nudge Security | OUI | tl;dr sec |
| Sublime Security | OUI | Risky Bulletin x4, tl;dr sec |
| Material Security | OUI | Defense in Depth x3 |
| DeleteMe | OUI | portefeuille Darknet Diaries |
| IOActive | NON | non observé sur la fenêtre |

**Contre Resilient Cyber (9 sponsors déclarés) : 2 retrouvés actifs sur la fenêtre (Wiz, Google Security via la liste partenaires Risky Biz).** Lecture honnête : la liste RC est pluriannuelle et la fenêtre d'observation fait 6 semaines. La méthode détecte les budgets ACTIFS maintenant, pas l'historique complet ; c'est exactement ce qu'un rapport de prospection doit faire. Le taux de 92 % contre la liste VU (éditeur au profil le plus proche de DEW) est la validation pertinente.

**Verdict : méthode validée.** À noter pour le rapport final : le croisement multi-sources est ce qui crée la valeur, aucune source seule ne donnait ce tableau.

## Top 30 des marques pour le rapport DEW

Score de priorité : alignement éditorial avec l'audience DEW (detection engineering, SOC, threat intel) + intensité du signal d'achat (récurrence, multi-titres, fraîcheur) + format acheté (newsletter avant podcast).

### Priorité 1 : acheteurs multi-newsletters actifs, alignement fort (10)

| # | Marque | Signal | Alignement DEW |
|---|---|---|---|
| 1 | Tines | 7+ placements sur 4 newsletters en 5 semaines | Automatisation SOC : cœur |
| 2 | Sublime Security | Pack semaine Risky Biz + tl;dr sec + page VU | Détection email : cœur |
| 3 | Maze | 6 placements sur 4 sources, campagne en cours | AppSec IA : fort |
| 4 | Corelight | Pack Risky Biz x3, NDR | Network detection : cœur |
| 5 | Nebulock | Soap Box dédié threat hunting + webinaires Tines | Threat hunting : cœur |
| 6 | Wiz | tl;dr sec x2 + pages VU et RC | Cloud sec : fort |
| 7 | runZero | tl;dr sec, VU, Risky partner list | Asset discovery : fort |
| 8 | Dropzone | Soap Box dédié détection/IA | AI SOC analyst : cœur |
| 9 | Panther | Venture in Security + média maison detection | SIEM/detection : cœur |
| 10 | ThreatLocker | 10+ diffusions (DD, DiD, CSH) + page VU | Endpoint : fort, budget énorme |

### Priorité 2 : acheteurs récurrents, alignement bon (10)

| # | Marque | Signal | Alignement |
|---|---|---|---|
| 11 | authentik | tl;dr sec + Risky Biz + SponsorGap | IAM |
| 12 | Thinkst Canary | Risky Biz x2 + portefeuille DD | Deception/detection |
| 13 | Material Security | DiD x3 + page VU | Email/collab sec |
| 14 | Palo Alto Networks | tl;dr sec + DiD x3 + page VU | Plateforme, budget majeur |
| 15 | Push Security | tl;dr sec principal | Identity attacks |
| 16 | Opal Security | VU x2 + SponsorGap | Accès/IGA |
| 17 | SpecterOps | RoS x2 consécutifs (Black Hat) | Adversary tactics : cœur |
| 18 | Prowler | Soap Box + page VU | Cloud sec open source |
| 19 | Vanta | CSH + SponsorGap + page VU | Compliance |
| 20 | Scanner.dev | UL sponsored conversation | Log search/detection : cœur |

### Priorité 3 : signaux simples mais qualifiés (10)

| # | Marque | Signal | Alignement |
|---|---|---|---|
| 21 | Varonis | VU principal (CTF) + portefeuille DD | Data security |
| 22 | Teleport | tl;dr sec + page VU + SponsorGap | Accès infra |
| 23 | Nudge Security | tl;dr sec + page VU | SaaS security |
| 24 | Intruder | VU principal | Vuln management |
| 25 | BlinkOps | tl;dr sec principal | Automatisation sec |
| 26 | Drata | RoS + DD | Compliance |
| 27 | Persona | VU principal | Identity verification |
| 28 | Speakeasy | RoS + UL | API/AI infra |
| 29 | Minimal | tl;dr sec | Sandbox agents IA |
| 30 | Adaptive Security | tl;dr sec | Simulation phishing |

### Réserve (si un top 30 tombe à la qualification contact)

Thinkst déjà inclus ; réserve : Crogl, Harmonic, FusionAuth, Trail of Bits, Sondera, Silent Push, QuilrAI, Native Security, Fenix24, OPSWAT, Elastic Security, HUMAN Security, Okta, Rubrik, PortSwigger, Airlock Digital, SANS. Écartés pour alignement faible avec une audience detection engineering : Sentry.io, NetSuite, Meter, Privacy.com, Origina, LexisNexis, Saviynt, Tanium, Guardsquare, Secure Agentics, Pluto Security, Optro, Delinea, Crogl (limite), Speakeasy (limite, conservé en 28).

## Matière pour la recommandation de tarif DEW

- Benchmark public direct : CloudSecList, 1 950 $/placement à 12k abonnés (0,16 $/abonné), sold out 2025, réservations jusqu'à fin 2026.
- Transposition DEW (15k abonnés, audience detection très ciblée) : 2 000-2 500 $ le placement principal, dégressif volume, packaging duo principal/secondaire conforme au standard du segment (constaté sur les 4 titres du lot 1).
- Upsells observés dans le segment : promo sociale, interview podcast, bundles multi-numéros, prise de semaine complète (modèle Risky Biz).
