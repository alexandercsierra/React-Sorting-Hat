import React from 'react'
import Question from './Question'
import questionSet from '../data/questionSet'
import {useHistory} from 'react-router-dom'
import background from '../imgs/background.jpg'
import styled from 'styled-components'

const Div = styled.div`
    // height: 100vh;
    // width: 100%;
    background-image: url(${background});
    background-size: cover;
    // background-position: 50% 50%;
    // margin-top: 8%;
    border: 1px solid green;
    height: 300vh;
`;

const Container = styled.div`
    background: rgba(0,0,0,.8);
    padding-top: 10%;
    height: 300vh;
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
                <button onClick={e=>{
                    const winners = props.getResult(e);
                    history.push("/results");
                    
                       
                    
                    }}>Calculate Result</button>
            </div>
            </Container>
        </Div>
    )
}

export default Quiz