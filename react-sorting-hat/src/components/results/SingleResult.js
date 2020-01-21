import React from 'react'
import Graph from '../Graph'
import {useHistory} from 'react-router-dom'
import Gryff from './Gryff'
import Slyth from './Slyth'
import Raven from './Raven'
import Huff from './Huff'

const SingleResult = (props) => {
    const history = useHistory();
    console.log("props.winner", props.winner);
    return (
        <div>
            <h1 style={{fontSize: "5rem"}}>{props.winner[0].charAt(0).toUpperCase() + props.winner.slice(1)}</h1>
            {props.winner.toLowerCase() === "gryffindor" && <Gryff/>}
            {props.winner.toLowerCase() === "slytherin" && <Slyth/>}
            {props.winner.toLowerCase() === "ravenclaw" && <Raven/>}
            {props.winner.toLowerCase() === "hufflepuff" && <Huff/>}
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