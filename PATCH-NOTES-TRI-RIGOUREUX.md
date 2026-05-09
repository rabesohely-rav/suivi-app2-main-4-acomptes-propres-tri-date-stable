# Patch ciblé — tri chronologique rigoureux

Base de départ : `main-4-acomptes-propres`.

Fichier modifié :
- `assets/js/depenses-budget.js`

Objectif :
- garantir que tout le tableau Dépenses reste trié chronologiquement dès qu'une date est saisie ou modifiée.

Corrections appliquées :
- ajout d'un identifiant interne stable par ligne (`_rowId`) pour éviter les erreurs d'index après re-tri ;
- tri global par date ISO `YYYY-MM-DD` ;
- lignes sans date ou date invalide maintenues en bas ;
- tri déclenché après saisie/changement de date ;
- tri appliqué aussi au chargement, à l'import JSON, à la réinitialisation et à la sauvegarde ;
- conservation du comportement validé : acompte, reste à régler, footer, import/export, responsive mobile.

Règle de tri :
1. dates valides de la plus ancienne à la plus récente ;
2. lignes sans date en bas ;
3. ordre stable entre lignes de même date.
