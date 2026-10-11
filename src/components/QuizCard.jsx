

import React from 'react';
import '../styles/QuizCard.css'
import { useState } from 'react';

function QuizCard({questionNumber, question, options, correctAnswer}){

    const [selectedOption, setSelectedOption] = useState(null);
    

    
    const handleOptionClick =(option)=>{
            if(!selectedOption){
                setSelectedOption(option);
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
                        }>{option}</button>
                    )
                })
            }
             {selectedOption && (
                <div className='result'>
                    {selectedOption === correctAnswer ? (
                        <p className='correct'>Correct!</p>
                    ) : (
                        <p className='incorrect'>Incorrect!</p>
                    )}
                </div>
            )}
         </div>
    )
        
    }

    export default QuizCard;