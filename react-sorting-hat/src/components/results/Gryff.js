import React from 'react'
import result from '../../imgs/gryff.png'
import styled from 'styled-components'

const Img = styled.img`
    width: 25%;
`;

const Para = styled.p`
    font-size: 2rem;
    margin: 0;
    padding: 8%;
    text-shadow: 3px 3px #000;
`;

const Gryff = () => {
    return(
        <div>
            <Img src={result}/>
            <Para>You might belong in Gryffindor, where dwell the brave at heart. Their daring, nerve, and chivalry set Gryffindors apart.</Para>
        </div>
    )
}

export default Gryff