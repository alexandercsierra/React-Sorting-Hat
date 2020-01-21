import React from 'react'
import result from '../../imgs/raven.png'
import styled from 'styled-components'

const Img = styled.img`
    width: 30%;
`;

const Raven = () => {
    return(
        <div>
            <Img src={result}/>
            <p style={{fontSize: "1.7rem"}}>Wise old ravenclaw, if you've a ready mind....</p>
        </div>
    )
}

export default Raven