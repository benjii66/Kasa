# Créez une application web de location immobilière avec React 

>[!NOTE]
>Projet réalisé lors de ma formation d'intégrateur web au sein d'OpenClassrooms

Le but de ce projet est d'implémenter le front-end d'une application immobilière, Kasa, utilisant React et React Router pour offrir une interface utilisateur réactive et interactive.

## Apprentissage des outils/technologies suivantes : 
- 🌐 **React.js** : Utilisé pour la création de l'interface utilisateur.
- 🔗 **React Router** : Gère la navigation entre les pages de l'application sans rechargement.

## Fonctionnalités de l'Application

### Page d'accueil
- **Affichage des logements** : Récupération et affichage des données depuis un fichier JSON.
- **Navigation** : Liens vers les détails des maisons et autres pages via React Router.

### Page 'À Propos'
- **Composant Collapse** : Composant de collapse réutilisable pour afficher les informations sur les valeurs de Kasa.

### Page de Détail du Logement
- **Carrousel de photos** : Caroussel infini et interactif des photos du logement.
- **Informations détaillées** : Utilisation du composant collapse pour afficher des informations détaillées sur le logement.

### Page d'Erreur
- **Gestion des erreurs** : Redirection dynamique en cas de lien erroné ou inexistant.
- **Redirection de l'URL** : Modification de l'URL via un React Hook.
- **Navigation sécurisée** : Options de redirection vers la page d'accueil ou la page 'À Propos'.


### Prérequis

**Node.js** : version 14.x ou plus récente


## Accès vers le site : 
Le site est hébergé et accessible à l'adresse suivante : https://kasa-silk.vercel.app/

### Cloner le répertoire 

```shell
git clone https://github.com/benjii66/Kasa.git
cd project-8
npm install 
npm start
```
