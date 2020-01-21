import React from 'react'
import result from '../../imgs/slyth.png'
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

const Slyth = () => {
    return(
        <div>
            <Img src={result}/>
            <Para>Or perhaps in Slytherin you'll make your real friends. Those cunning folks use any means to achieve their ends.</Para>
        </div>
    )
}

export default Slyth