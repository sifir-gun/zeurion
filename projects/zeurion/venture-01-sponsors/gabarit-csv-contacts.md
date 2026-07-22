# Gabarit du CSV de contacts

Créé le 2026-07-22. Deuxième moitié du livrable (spec : livrable-rapport-spec.md, « PDF + tableur des contacts »). Le CSV permet au client de travailler sa prospection en tableur ou en mail-merge sans ressaisir le rapport.

## Règles

- Une ligne par marque, dans l'ordre du rapport (rang 1 à 30).
- UTF-8, séparateur virgule, champs entre guillemets doubles quand ils contiennent virgule ou apostrophe.
- Aucun email deviné : la colonne email n'est remplie que si l'adresse est publiée ou suit un pattern documenté publiquement, et le statut le dit explicitement. Tout le reste est vide.
- Chaque ligne porte sa preuve : date de l'observation la plus récente et URL publique.
- L'objet du pitch est repris du rapport pour le mail-merge ; le corps du pitch reste dans le PDF.

## Colonnes

| Colonne | Contenu |
|---|---|
| rank | 1-30, ordre du rapport |
| tier | 1, 2 ou 3 |
| brand | Nom de la marque |
| company_domain | Domaine si cité dans le rapport ou ses sources, sinon vide (ne pas deviner) |
| contact_name | Contact recommandé |
| contact_role | Rôle tel que sourcé |
| email | Adresse si publiée ou pattern documenté, sinon vide |
| email_status | Vocabulaire fermé, voir ci-dessous |
| fallback | Contact ou canal de repli |
| evidence_summary | Résumé des sponsorings observés (quoi, où, quand) |
| evidence_latest_date | Date AAAA-MM-JJ de l'observation la plus récente |
| evidence_url | Une URL de preuve publique |
| pitch_subject | Objet de l'email prêt à envoyer (corps dans le PDF) |

## Vocabulaire email_status

- published : adresse publiée dans une source publique récente. Reste soumise à une vérification anti-bounce avant envoi.
- published_stale : publiée mais source ancienne, revalider avant usage.
- pattern_to_verify : suit le pattern d'adresse documenté de l'entreprise, à passer en outil de vérification avant tout envoi.
- to_verify : aucune adresse publiée, à trouver puis vérifier.
- none_found : aucun contact nommé identifiable publiquement (constat honnête, canal de repli fourni).

## Critères de validation avant livraison

1. 30 lignes, une par marque du rapport, mêmes rangs et mêmes tiers.
2. Aucune cellule email remplie sans statut published, published_stale ou pattern_to_verify.
3. Chaque ligne a une evidence_url qui s'ouvre et une date au format AAAA-MM-JJ.
4. Le fichier s'ouvre proprement dans Numbers/Excel/Google Sheets (UTF-8, guillemets équilibrés).
5. Les objets de pitch correspondent à ceux du PDF.
