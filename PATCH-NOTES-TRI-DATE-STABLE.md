# Patch tri date stable

Base : suivi-app2-main-4-acomptes-propres + tri rigoureux.

Correction : le tableau n'est plus rerendu pendant l'événement `input` d'un champ date.

Raison : sur Safari/iOS/macOS, l'utilisation des flèches clavier dans un champ `type=date` déclenche `input` pendant que le contrôle natif est encore actif. Recréer le tableau à cet instant peut provoquer un crash de la page.

Nouveau comportement :
- la valeur de date est mémorisée immédiatement ;
- le tri global est appliqué quand la date est validée (`change`) ou quand le champ perd le focus (`focusout`) ;
- les lignes datées sont triées chronologiquement ;
- les lignes sans date restent en bas.
