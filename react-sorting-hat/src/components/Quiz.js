import React from 'react'
import Question from './Question'
import questionSet from '../data/questionSet'
import {useHistory} from 'react-router-dom'
import background from '../imgs/croppedbackground.jpg'
import styled from 'styled-components'

const Div = styled.div`
    // height: 100vh;
    // width: 100%;
    background-image: url(${background});
    // background-size: cover;
    // background-position: 50% 50%;
    // margin-top: 8%;
    // border: 1px solid green;
    // height: 350vh;
`;

const Container = styled.div`
    background: rgba(0,0,0,.5);
    padding-top: 10%;
    height: 350vh;
`;

const Quiz = (props) => {
    const history = useHistory();
    // const wait = 
    return (
        <Div>
            <Container>
            {questionSet.map(question => {
                return <Question q={question.q} answers={question.a} addPoints={props.addPoints}/>
            })}
            <div>
                <button style={{marginTop: "7%", border: "1px solid white"}} onClick={e=>{
                    const winners = props.getResult(e);
                    history.push("/results");
                    
                       
                    
                    }}>Calculate Result</button>
            </div>
            </Container>
        </Div>
    )
}

export default Quiz