function Question({ question, choix, bonneReponse, reponseChoisie, onAnswer }) {
    function getClasseBouton(choixItem) {
        if (reponseChoisie === null) return "choix-bouton";
        if (choixItem === bonneReponse) return "choix-bouton correct";
        if (choixItem === reponseChoisie) return "choix-bouton incorrect";
        return "choix-bouton";
    }

    return (
    <div>
      <h2 className="question-texte">{question}</h2>
      <ul className="choix-liste">
        {choix.map((choixItem) => (
          <li key={choixItem}>
            <button 
                className={getClasseBouton(choixItem)} 
                onClick={() => onAnswer(choixItem)}
                disabled={reponseChoisie !== null}>
                 {choixItem}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;