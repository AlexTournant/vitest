# TaskFlow Pro

Application interne de gestion de tickets pour entreprise, développée avec React, TypeScript et Vite.

## Fonctionnalités principales

- Authentification des utilisateurs
- Tableau de bord pour la gestion des tickets (création, suivi, modification)
- Vue détaillée des tickets
- Gestion des projets
- Gestion des utilisateurs
- Rapports d’activité
- Interface moderne (Material UI)

## Prérequis

- Node.js >= 18
- npm >= 9

## Installation

```bash
git clone https://github.com/AlexTournant/vitest.git
cd vitest
npm install
```

## Démarrage en développement

```bash
npm run dev
```

L’application sera accessible sur [http://localhost:5173](http://localhost:5173).

## Scripts utiles

- `npm run dev` : Lance l’application en mode développement
- `npm run build` : Build production
- `npm run preview` : Prévisualise la version buildée
- `npm run lint` : Vérifie la qualité du code
- `npm run test` : Lance les tests avec Vitest
- `npm run test:coverage` : Génère le rapport de couverture de tests

## Connexion

Pour tester l’application, utilisez le compte de démonstration :

- **Email** : admin@taskflow.com
- **Mot de passe** : password

## Structure des principales routes

- `/login` : Page de connexion
- `/dashboard` : Tableau de bord
- `/tickets` : Liste des tickets
- `/tickets/:ticketId` : Détail d’un ticket
- `/projects` : Projets
- `/users` : Utilisateurs
- `/reports` : Rapports

## Personnalisation ESLint

Le projet inclut une configuration ESLint adaptée à TypeScript et React. Pour des règles plus strictes ou stylistiques, voir la documentation dans le fichier source.

## Technologies

- React 18 + TypeScript
- Vite
- Material UI (MUI)
- Zustand, React Query
- Vitest pour les tests

---

Développé par [Alex Tournant](https://github.com/AlexTournant).