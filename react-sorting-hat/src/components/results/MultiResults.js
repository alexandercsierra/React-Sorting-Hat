import React from 'react'
import SingleResult from './SingleResult'
import background from '../../imgs/croppedbackground.jpg'
import styled from 'styled-components'

const Div = styled.div`
    // height: 100vh;
    // width: 100%;
    background-image: url(${background});
    // background-size: cover;
    // background-position: 50% 50%;
    // margin-top: 8%;
    // border: 1px solid green;
    // height: 100vh;
`;

const Container = styled.div`
    background: rgba(0,0,0,.5);
    padding-top: 10%;
    height: 100vh;
`;

// const Button = styled.div`
//     width: 25%;
// `;

const AnswersDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const MultiResults = (props) => {
    return (
        <Div>
            <Container>
            {props.winners.length > 1 && <div>
                <h1 style={{fontSize: "3.5rem", color:"#967e4e", marginTop: "4%", textShadow: "3px 3px #000"}}>Which house do you identify with more? </h1>
                <AnswersDiv>
                {props.winners ? props.winners.map(winner => {
                    return <button style={{width: "25%"}} onClick={(e)=>props.setWinner(e)}>{winner[0].charAt(0).toUpperCase() + winner.slice(1)}</button>
                }) : "loading"}</AnswersDiv>
            </div>}
            {props.winners.length === 1 && <SingleResult winner={props.winners[0]}/>}
            </Container>
        </Div>
        
    )
}

export default MultiResults

// const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)