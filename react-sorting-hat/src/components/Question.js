import React from 'react'


const Question = (props) => {
    return (<div>
<h2>Question {props.id + 1}</h2>
    <p>{props.name}</p>
<p>{props.answer.map(choice => {
    return <p>{choice}</p>
})}</p>
    </div>)
}

export default Question
