import React from 'react'
import Question from './Question'
import questionSet from '../data/questionSet'

const Quiz = () => {
    console.log(questionSet);
    return (<div>
        I am the quiz
        {questionSet.map(question => {
            return <Question id={question.id} name={question.q} answer={question.a}/>
        })}
    </div>)
}

export default Quiz