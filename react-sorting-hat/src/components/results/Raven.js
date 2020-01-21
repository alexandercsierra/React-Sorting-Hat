import React from 'react'
import result from '../../imgs/raven.png'
import styled from 'styled-components'

const Img = styled.img`
    width: 30%;
`;

const Para = styled.p`
    font-size: 2rem;
    margin: 4%;
    padding: 8%;
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