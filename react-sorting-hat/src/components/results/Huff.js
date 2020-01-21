import React from 'react'
import result from '../../imgs/huff.png'
import styled from 'styled-components'

const Img = styled.img`
    width: 30%;
`;

const Huff = () => {
    return(
        <div>
            <Img src={result}/>
        </div>
    )
}

export default Huff