import { useState, useEffect } from "react";
import questions from "../data/questions";
import Question from "./Question";

function Quiz() {
    const [indexActuel, setIndexActuel] = useState(0);
    const [score, setScore] = useState(0);
    const [meilleurScore, setMeilleurScore] = useState(0);
    const [reponseChoisie, setReponseChoisie] = useState(null);

    const quizTermine = indexActuel >= questions.length;

    // Récupération du meilleur score sauvegardé
    useEffect(() => {
        const scoreSauvegarde = localStorage.getItem("meilleurScore");
        if (scoreSauvegarde) {
        setMeilleurScore(Number(scoreSauvegarde));
        }
    }, []);

    // Quand le quiz se termine, on sauvegarde le score s'il bat le record
    useEffect(() => {
        if (quizTermine && score > meilleurScore) {
        setMeilleurScore(score);
        localStorage.setItem("meilleurScore", score);
        }
    }, [quizTermine]);

    // Après un clic, on attend 2 secondes puis on passe à la question suivante
    useEffect(() => {
        if (reponseChoisie === null) return;

        const timer = setTimeout(() => {
            setIndexActuel((valeurPrecedente) => valeurPrecedente + 1);
            setReponseChoisie(null);
        }, 2000);

        return () => clearTimeout(timer);
    }, [reponseChoisie]);

    // Enregistre la réponse cliquée et ajoute un point si elle est correcte
    function gererReponse(choixClique) {
        if (reponseChoisie !== null) return;

        const questionActuelle = questions[indexActuel];
        setReponseChoisie(choixClique);

        if (choixClique === questionActuelle.bonneReponse) {
            setScore(score + 1);
        }
    }

    // Remet le quiz à zéro
    function recommencer() {
        setIndexActuel(0);
        setScore(0);
        setReponseChoisie(null);
    }

    // Affiche l'écran de fin si le quiz est terminé
    if(quizTermine){
        return (
        <div className="ecran-fin">
            <h2>Quiz terminé !</h2>
            <p>Ton score final : {score} / {questions.length}</p>
            <p>Meilleur score : {meilleurScore} / {questions.length}</p>
            <button className="bouton-recommencer" onClick={recommencer}>
                Recommencer
            </button>
        </div>
        );
    }

    // Affiche la question en cours avec le score et la progression
    const questionActuelle = questions[indexActuel];
    
    return (
        <div>
            <div className="quiz-info">
                <span>Question {indexActuel + 1} sur {questions.length}</span>
                <span>Score : {score}</span>
            </div>
            <Question
                question={questionActuelle.question}
                choix={questionActuelle.choix}
                bonneReponse={questionActuelle.bonneReponse}
                reponseChoisie={reponseChoisie}
                onAnswer={gererReponse}
            />
        </div>
    );
}

export default Quiz;