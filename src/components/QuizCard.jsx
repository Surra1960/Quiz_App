

import React from 'react';
import '../styles/QuizCard.css'
import { useState } from 'react';

function QuizCard({questionNumber, question, options, correctAnswer,onAnswer}){

    const [selectedOption, setSelectedOption] = useState(null);
    

    
    const handleOptionClick =(option)=>{
            if(!selectedOption){
                setSelectedOption(option);
                onAnswer(option===correctAnswer);
            }
    }
        

    return(
        <div className="card_container">
            
           <h3 className='question_number'>Question {questionNumber} of 5</h3>
            <p className='question_text'>{question}</p>
            {
                options.map((option, index)=>{
                    return(
                        <button 
                        key={index}
                        onClick={()=>handleOptionClick(option)}
                        className={
                            !selectedOption?'option':option===correctAnswer?'correct':option===selectedOption?'incorrect':'option'
                        }>{option}{selectedOption&&((option===correctAnswer)?("✔ correct"):(option===selectedOption)?("❌InCorrect"):"")}</button>
                    )
                })
            }
         </div>
    )
        
    }

    export default QuizCard;