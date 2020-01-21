import React from 'react'
import result from '../../imgs/slyth.png'
import styled from 'styled-components'

const Img = styled.img`
    width: 30%;
`;

const Para = styled.p`
    font-size: 2rem;
    margin: 4%;
    padding: 8%;
`;

const Slyth = () => {
    return(
        <div>
            <Img src={result}/>
            <Para>Or perhaps in Slytherin you'll make your real friends. Those cunning folks use any means to achieve their ends.</Para>
        </div>
    )
}

export default Slyth