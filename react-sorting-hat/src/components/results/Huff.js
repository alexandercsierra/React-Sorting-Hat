import React from 'react'
import result from '../../imgs/huff.png'
import styled from 'styled-components'

const Img = styled.img`
    width: 30%;
`;

const Para = styled.p`
    font-size: 2rem;
    margin: 4%;
    padding: 8%;
`;

const Huff = () => {
    return(
        <div>
            <Img src={result}/>
            <Para>You might belong in Hufflepuff, where they are just and loyal. Those patient Hufflepuffs are true and unafraid of toil.</Para>
        </div>
    )
}

export default Huff