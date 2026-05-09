# Patch ciblé — acomptes propres

Base verrouillée : suivi-app2-main-4.

Fichiers modifiés uniquement :
- pages/depenses.html
- assets/js/depenses-budget.js
- assets/css/depenses-budget.css

Améliorations :
- ajout d’une colonne Acompte payé € ;
- calcul automatique du reste à régler ;
- footer Excel-like recalculé : payé / à régler / à vérifier ;
- migration automatique des anciens montants négatifs en acomptes positifs ;
- import JSON compatible avec l’ancien format ;
- aucune modification volontaire des autres pages.
