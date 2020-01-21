import React from 'react'
import Graph from '../Graph'
import {useHistory} from 'react-router-dom'

const SingleResult = (props) => {
    const history = useHistory();
    return (
        <div>
            {props.winner}
            <Graph scores={props.houseScores}/>
            <button onClick={e=>{
                e.preventDefault();
                props.reset();
                history.push("/");
            }}>Take again</button>
        </div>
    )
}

export default SingleResult