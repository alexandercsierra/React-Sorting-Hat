import React from 'react'
import result from '../../imgs/slyth.png'
import styled from 'styled-components'

const Img = styled.img`
    width: 30%;
`;

const Slyth = () => {
    return(
        <div>
            <Img src={result}/>
        </div>
    )
}

export default Slyth