import React from 'react'
import SingleResult from './SingleResult'

const MultiResults = (props) => {
    return (
        <div>
            {props.winners.length > 1 && <div>
                Multiple Results. Which house do you identify with more? 
                {props.winners ? props.winners.map(winner => {
                    return <button onClick={(e)=>props.setWinner(e)}>{winner[0].charAt(0).toUpperCase() + winner.slice(1)}</button>
                }) : "loading"}
            </div>}
            {props.winners.length === 1 && <SingleResult winner={props.winners[0]}/>}
        </div>
        
    )
}

export default MultiResults

// const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)