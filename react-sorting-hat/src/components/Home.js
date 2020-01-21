import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        <Div>
            <h1>Home</h1>
            <button onClick={e => handleClick(e)}>Start Quiz</button>
        </Div>
    )
}

export default Home