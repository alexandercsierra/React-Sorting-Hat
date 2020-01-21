import React, {useState, useEffect} from 'react'
import Graph from '../Graph'
import {useHistory} from 'react-router-dom'
import Gryff from './Gryff'
import Slyth from './Slyth'
import Raven from './Raven'
import Huff from './Huff'
import { withTheme } from 'styled-components'

const SingleResult = (props) => {
    const [theme, setTheme] = useState({});
    useEffect(()=>{
        if (props.winner.toLowerCase()=== "gryffindor"){
            setTheme({
                background: 'red',
                color: 'yellow'
            })
        } else if (props.winner.toLowerCase()=== "slytherin"){
            setTheme({
                background: 'green',
                color: 'silver'
            })
        } else if (props.winner.toLowerCase()=== "ravenclaw"){
            setTheme({
                background: 'blue',
                color: 'silver'
            })
        } else if (props.winner.toLowerCase()=== "hufflepuff"){
            setTheme({
                background: 'yellow',
                color: 'black'
            })
        }
    }, [])
    const history = useHistory();
    console.log("props.winner", props.winner);
    return (
        <div style={theme}>
            <h1 style={{fontSize: "5rem"}}>{props.winner[0].charAt(0).toUpperCase() + props.winner.slice(1)}</h1>
            {props.winner.toLowerCase() === "gryffindor" && <Gryff/>}
            {props.winner.toLowerCase() === "slytherin" && <Slyth/>}
            {props.winner.toLowerCase() === "ravenclaw" && <Raven/>}
            {props.winner.toLowerCase() === "hufflepuff" && <Huff/>}
            <Graph scores={props.houseScores} winner={props.winner}/>
            <button onClick={e=>{
                e.preventDefault();
                props.reset();
                history.push("/");
            }}>Take again</button>
        </div>
    )
}

export default SingleResult