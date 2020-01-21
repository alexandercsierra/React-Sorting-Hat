import React from 'react'
import SingleResult from './results/SingleResult'
import MultiResults from './results/MultiResults'

const Results = (props) => {
    console.log(props.winners);
    return(
        <div>
        {props.winners.length === 1 && <SingleResult reset={props.reset} houseScores={props.houseScores} winner={props.winners[0]}/>}
        {props.winners.length > 1 && <MultiResults setWinner={props.setWinner} winners={props.winners}/>}
        </div>
    )
}

export default Results