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
        </div>
    )
}

export default Raven