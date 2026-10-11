
import React from "react";
import './styles/App.css'
import QuizCard from "./components/QuizCard";

import { useState } from "react";
function App(){
 const [score,setScore]=useState(0)
const questionData = {
    questionNumber: 1,
    question: "Which language is primarily used to build interactive web pages?",
    options: ["Python", "JavaScript", "C++", "Java"],
    correctAnswer: "JavaScript"
};

return(
    <div className="main_container">
        <QuizCard questionNumber={questionData.questionNumber} question={questionData.question} options={questionData.options} correctAnswer={questionData.correctAnswer}/>
    </div>
)



}

export default App;