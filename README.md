# Quiz React 🎮

Petit jeu de quiz en React pour pratiquer `useState`, les événements, et les props.

## Fonctionnalités
- 10 questions à choix multiples
- Score qui s'incrémente à chaque bonne réponse
- Questions stockées dans un fichier séparé (`questions.js`)
- Bouton pour recommencer le quiz.
- Indicateur "Question X sur Y"
- Sauvegarde du meilleur score (localStorage)
- Feedback visuel (vert/rouge) après chaque réponse

## Structure du projet
- `src/App.jsx` → composant principal, gère le score et la question actuelle
- `src/components/Question.jsx` → affiche une question et ses choix de réponse
- `src/data/questions.js` → contient la liste des questions

## Lancer le projet

\`\`\`bash
npm install
npm run dev
\`\`\`

Puis ouvrir l'adresse indiquée dans le terminal (généralement `http://localhost:5173`).

## Ce que j'ai appris avec ce projet
- `useState, useEffect` pour gérer l'état (score, question actuelle, meilleur score)
- Les événements (`onClick`) pour réagir aux clics de l'utilisateur
- Les props pour faire communiquer un composant parent et un composant enfant