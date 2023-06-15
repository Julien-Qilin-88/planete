# Fun with flags

Le projet _Fun with flags_ a été démarré. Pour l'instant seules les étapes de mise en place ont été réalisées.

Un serveur HTTP a été mis en place avec express avec un contenu temporaire sur une route d'accueil. Et c'est tout.

A toi de récupérer le projet pour le terminer.

A terme ce qu'on veut c'est afficher une liste de pays qui renvoie à une page de détail nous donnant le drapeau associé.  

Bref un problème à la fois, à toi de jouer !

## Exercice 1 - Router

Pour l'instant la route d'accueil est dans `index.js`. On va séparer les concepts par anticipation avant de surcharger notre index de routes.

Crée un routeur à l'aide d'express dans un module à part et importe le dans l'index pour l'utiliser. Ton routeur ne contient pour l'instant que la route d'accueil.

## Exercice 2 - Dynamisation de l'accueil

On veut afficher une liste contenant tous les pays sur l'accueil.  
La liste des pays et de leur code correspondant est disponible dans `app/flags.js`.  

1. Importe le module `flags.js` pour l'utiliser sur l'accueil
2. Fais en sorte de construire une liste à partir des données récupérées

## Exercice 3 - Route paramétrée

On veut maintenant afficher une page de détail au clic sur un pays.  
Cette page de détail doit afficher le drapeau du pays en plus de son nom.  
Elle doit aussi comporter un lien pour revenir à la liste.

Ce qu'on veut dire donc c'est "Quand l'utilisateur demande le détail d'un pays, mon serveur doit trouver les informations du pays demandé et apporter une réponse"

Comme toujours il faut procéder par étape

## A - préparation de la page de détail

1. Ajoute un lien autour de chaque pays de l'accueil pour permettre aux utilisateur de demander facilement le détail d'un pays.  
Ce lien doit renvoyer vers une chemin comportant le code du pays.  
En effet cela nous permettra d'identifier le pays demandé par la suite
2. Ajoute une route pour que notre serveur soit capable de répondre à ces nouvelles requêtes.  
Utilise une route paramétrée pour répondre quel que soit le pays demandé.  
Envoie une réponse simple pour tester dans un premier temps.
3. Récupère le code du pays demandé, cela nous permettra ensuite de trouver les informations du pays demandé.
4. Partant de la liste de tous les pays, trouve celui qui a le code demandé identifié dans l'étape précédente.
5. Si le pays a été trouvé renvoie le détail du pays en réponse (le nom + un lien de retour à l'accueil pour commencer)
6. Sinon renvoie une erreur

## B - ajout de l'image

Il faut ajouter le drapeau sur la page de détail.

- Fais en sorte que ton serveur serve de manière statique les images
- Ajoute une image sur la page de détail d'un pays, tu peux utiliser le code du pays pour trouver l'image associée puisque le nom du fichier correspond ;)

_PS_, l'image étant vectorielle elle risque de prendre beaucoup de place, si tu veux ajouter quelques styles fais-toi plaisir !

## Exercice 4 - Bonus : filtre alphabétique

Si tu as fais tous les exercices précédents, prends le temps de savourer. S'il te reste du temps pourquoi pas faire celui ci :

On a beaucoup de pays, ça pourrait être pratique pour les utilisateur de n'avoir que les pays commençant par une certaine lettre de l'alphabet

1. Crée une route paramétrée avec un paramètre représentant une lettre de l'alphabet
2. Filtre tous les pays pour ne garder que ceux dont la première lettre est celle demandée
3. Construit une réponse à partir de ça
4. Ajoute un menu avec des liens vers chaque lettre de l'alphabet dans tes réponses

## Aller plus loin

Si tu as fini, fais-toi plaisir en ajoutant des styles par exemple.  
Ou alors pourquoi pas faire une page qui affiche un drapeau aléatoire pour nous permettre de le deviner. Au clic on aura la réponse (ou au passage de la souris pour changer).  
Si tu as d'autres idées n'hésite pas.
