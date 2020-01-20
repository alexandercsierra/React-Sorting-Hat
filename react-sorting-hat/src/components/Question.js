import React, {useState} from 'react'

const Question = (props) => {
    const [currentHouseScores, setCurrentHouseScores] = useState([0,0,0,0]);
    let vals = Object.values(props.answers);
    let keys = Object.keys(props.answers);
    return (<div>
        <h4>{props.q}</h4>
        <div>
            {vals.map((ans, i) => {
                if (vals[i-1] !== undefined && vals[i-1] !== ans){
                    return <button id={vals.indexOf(ans)} onClick={e => props.addPoints(e)}>{ans}</button>
                }
            })}
        </div>
    </div>)
}

export default Question