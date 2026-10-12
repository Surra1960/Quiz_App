
import React, { useState } from "react";
import "./styles/App.css";
import QuizCard from "./components/QuizCard";
import questions from "./data/questions";

function App() {
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (isCorrect) => {
        if (answered) return;

        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }

        setAnswered(true);
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setAnswered(false);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return (
            <div className="main_container">
                <h2>Quiz Completed!</h2>
                <h3>
                    Score: {score} / {questions.length}
                </h3>
                <button onClick={() => window.location.reload()}>
                    Restart Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="main_container">
            <h2 className="score">
                Score: {score}
            </h2>

            <QuizCard
                key={currentQuestionIndex}
                questionNumber={currentQuestion.questionNumber}
                question={currentQuestion.question}
                options={currentQuestion.options}
                correctAnswer={currentQuestion.correctAnswer}
                onAnswer={handleAnswer}
            />

            <button
                className="next"
                onClick={handleNext}
                disabled={!answered}
            >
                {currentQuestionIndex < questions.length - 1
                    ? "Next"
                    : "Submit"}
            </button>
        </div>
    );
}

export default App;
