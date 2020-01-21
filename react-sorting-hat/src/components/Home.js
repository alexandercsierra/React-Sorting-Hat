import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import sortinghat from '../imgs/sortinghat.jpg'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(200,200,200,0.4);
`;

const Banner = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${sortinghat});
    background-size: cover;
    background-position: 50% 50%;
`;

const H1 = styled.h1`
    font-size: 5rem;
    // color: #5b4d2f;
    color: #967e4e;
    text-shadow: 3px 3px #000;
`;


const Button = styled.button`
    width: 10%;
`;

const Home = (props) => {
    const history = useHistory();

    const handleClick = (e) => {
      e.preventDefault();
      history.push("/quiz")
    }

    return (
        <Banner>
        <Div>
            <H1>Sorting Hat Quiz</H1>
            <button style={{border: "1px solid white"}} onClick={e => handleClick(e)}>Start Quiz</button>
        </Div>
        </Banner>
    )
}

export default Home