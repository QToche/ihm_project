# Cabinet d'infirmier

Licence L3 MIAGE - Projet IHM (Quentin MELIARD et Loïc JOVANOVIC)

## Fonctionnalités

Toutes les fonctionnalités disponibles sur le site

### Ajouter un patient

En cliquant sur un "Ajouter un patient", on accède à un formulaire d'ajout. Il est totalement fonctionnel et il est possible de vérifier dans la console la réponse http. Si elle fournit 200, le patient a bien été ajouté, si elle fournit 400, un problème a été détecté (cela ne devrait pas arriver).


### Gestion patient

Sur la page d'accueil, on retrouve la liste des patients non affectés, et sur chaque page des infirmiers, on retrouve la liste des patients qui lui sont affectés. 
* Sur la page d'accueil, il est possible d'affecter les patients non affectés à un infirmier. Au clic sur le bouton "Assigner", la requête d'affectation est effectuée, seulement si un choix avait bien été fait avant.
* Sur chaque page des infirmiers se trouvent les infos de l'infirmier avec ses patients. Il est possible de réaffecter un patient à un autre infirmier de la même façon que sur la page d'accueil. En plus de ça, il est possible de désaffecter un patient.

Pour chaque action, il est possible de voir le résultat de la requête utilisée dans la console.


## Informations supplémentaires

### Outils utilisés

* **Angular Material** pour de nombreux éléments: liste dropdowns, icônes, formulaire d'ajout
* **ng-bootstrap** pour de nombreux éléments: header, boutons, popup (désactivée après changement graphique)
* **AppRoutingModule**, un module permettant la gestion des routes sur Angular


### Informations diverses

Nous avons réalisé un site entièrement **responsive** à l'aide des composants de ng-bootstrap et de Angular Material, mais également des **flexbox** en CSS.

Nous avons tenté de séparer un maximum notre code en **différents composants**, c'est pourquoi nous avons crée les composants Ajout-patient et Infirmier-detail, en supplément aux composants Patient et Infirmier.

Mise à part pour la fonction d'ajout d'un patient qui est localement intégrée au composant Ajout-patient, nous avons intégré nos fonctions de gestion du patient au Cabinet-Medical-Service.

## Evolutions possibles
* Validation plus evoluées du formulaire (patterns complets), ainsi que l'affichage de messages lorsqu'une condition n'est pas remplie.
* Ajout de messages pour l'utilisateur "Succès", "Echec" lors des actions de gestion du patient.
* Drag&Drop [?] (non réalisé à la base car nous ne souhaitions pas afficher les patients/patients non affectés et les infirmiers sur la même page)
