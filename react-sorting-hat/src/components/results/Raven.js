import React from 'react'
import result from '../../imgs/raven.png'
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

const Raven = () => {
    return(
        <div>
            <Img src={result}/>
            <Para>Or yet in wise old Ravenclaw, if you've a ready mind. Where those of wit and learning, will always find their kind.</Para>
        </div>
    )
}

export default Raven