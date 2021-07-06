import React, { useState } from 'react';
import '../App.css';
import Question from '../Array/Question';




const QuestionPage = () => {
    const [myQuestion, setQuestion] = useState(0);
    const [myScore, updateScore] = useState(0);
    const [clicked, updateClicked] = useState(false);
    const [viewScore, setScore] = useState(false);

    // For Next Question and Check Answer
    const Nextquestion = () => {
        updateClicked(false)
        if (myQuestion < Question.length - 1) {
            setQuestion(myQuestion + 1)
        }
        else {
            setScore(true);
        }
    }

    // For Next Question end

    // For Score  and update score
    const correctAnswer = (isCorrect) => {
        if (isCorrect) {
            updateScore(myScore + 1);
        }
        updateClicked(true);
    }
    // For score end

    //  for redirection to homw
    const reDirect = () => {
        window.location = "App.js"
    }

    return (
        <>
        {/* Condition for result */}
            {
                viewScore ? (<div>
                    <div className="firstContainer">
                        <div className="QuestionsHeadContainer">
                            <div className="score">Correct Answer : {myScore} / {Question.length}
                            </div>
                            <button className="mybtn" onClick={reDirect}>Try Again</button>
                        </div>
                    </div>
                </div>) : (

                    <div className="firstContainer">

                        <div className="QuestionsHeadContainer">
                            <h1 className="qh">{myQuestion + 1}/{Question.length}</h1>
                        </div>


                        <div className="QuestionsHeadContainer">
                            <h1 className="qh">{Question[myQuestion].question}</h1>
                        </div>


                        {Question[myQuestion].answersList.map((e, i) => {
                            return (<>
                                <div className="QuestionsCon" key={i}>
                                    <button className="optionbtn" onClick={() => correctAnswer(e.isCorrect)}>{e.option}</button>
                                </div>
                            </>)
                        })}
                        <div className="btncon">
                            <button className="mybtn" onClick={Nextquestion} disabled={!clicked}>Next Question</button>
                        </div>

                    </div>

                )}
        </>
    )

}

export default QuestionPage;