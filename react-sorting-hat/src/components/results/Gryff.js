import React from 'react'
import result from '../../imgs/gryff.png'
import styled from 'styled-components'

const Img = styled.img`
    width: 30%;
`;

const Para = styled.p`
    font-size: 2rem;
    margin: 4%;
    padding: 8%;
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