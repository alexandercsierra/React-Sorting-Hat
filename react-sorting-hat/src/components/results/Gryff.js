import React from 'react'
import result from '../../imgs/gryff.png'
import styled from 'styled-components'

const Img = styled.img`
    width: 30%;
`;

const Gryff = () => {
    return(
        <div>
            <Img src={result}/>
        </div>
    )
}

export default Gryff