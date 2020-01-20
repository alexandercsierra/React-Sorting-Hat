import React from 'react'

const Results = (props) => {
    console.log(props.winners);
    return(
        <div>
            {
            
            props.winners ? props.winners.map(winner => {
                return <h1>{winner}</h1>
            }) : "loading"
        
        }
        </div>
    )
}

export default Results