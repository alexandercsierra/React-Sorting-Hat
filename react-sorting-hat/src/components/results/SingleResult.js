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
                background: "linear-gradient(180deg, rgba(124,13,12,1) 0%, rgba(200,23,21,1) 100%)",
                color: '#CD9137'
            })
        } else if (props.winner.toLowerCase()=== "slytherin"){
            setTheme({
                background: 'linear-gradient(180deg, rgba(15,68,13,1) 0%, rgba(32,175,27,1) 100%)',
                color: '#C6C6C6'
            })
        } else if (props.winner.toLowerCase()=== "ravenclaw"){
            setTheme({
                background: 'linear-gradient(180deg, rgba(4,53,122,1) 0%, rgba(11,149,204,1) 100%)',
                // color: '#C1C1C1'
                color: '#946B4C'
            })
        } else if (props.winner.toLowerCase()=== "hufflepuff"){
            setTheme({
                background: 'linear-gradient(180deg, rgba(186,140,11,1) 0%, rgba(246,187,20,1) 100%)',

                color: '#3F3F3F'
            })
        }
    }, [])
    const history = useHistory();
    console.log("props.winner", props.winner);
    return (
        <div style={theme}>
            <h1 style={{fontSize: "5rem", paddingTop: "4%", textShadow: "3px 3px #000"}}>{props.winner[0].charAt(0).toUpperCase() + props.winner.slice(1)}</h1>
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