import React from 'react'
import Question from './Question'
import questionSet from '../data/questionSet'
import {useHistory} from 'react-router-dom'


const Quiz = (props) => {
    const history = useHistory();
    // const wait = 
    return (
        <div>
            I am the quiz
            {questionSet.map(question => {
                return <Question q={question.q} answers={question.a} addPoints={props.addPoints}/>
            })}
            <div>
                <button onClick={e=>{
                    const winners = props.getResult(e);
                    history.push("/results");
                    
                       
                    
                    }}>Calculate Result</button>
            </div>
        </div>
    )
}

export default Quiz