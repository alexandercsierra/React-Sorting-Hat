import React, {useState} from 'react'
import styled from 'styled-components'

const Div = styled.div`
    // border: 1px solid red;
    width: 80%;
    margin: 0 auto;
`;

const AnswerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1070px){
    margin-bottom: 10%;
  }
  @media (max-width: 600px){
    margin-bottom: 20%;
  }
`;

const Button = styled.button`
  width: 20%;
  padding: 1%;
  @media (max-width: 900px){
    width: 45%;
  }
`;

const H4 = styled.h4`
  font-size: 3.5rem;
  color: #967e4e;
  margin-top: 4%;
  text-shadow: 3px 3px #000;

`;

// style={{fontSize: "3.5rem", color:"#967e4e", marginTop: "4%", textShadow: "3px 3px #000"}}

// style={{width: '20%', padding: '1%'}} 

const Question = (props) => {
    const [currentHouseScores, setCurrentHouseScores] = useState([0,0,0,0]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [classes, setClasses] = useState("");
    let vals = Object.values(props.answers);
    let keys = Object.keys(props.answers);
    let newVals = [...new Set(vals)];

    function randomize(arr) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        let indexArr = [];
        console.log(randomIndex);
        while (indexArr.length < arr.length) {
          if (indexArr.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * arr.length);
          } else {
            indexArr.push(randomIndex);
          }
        }
        let newArr = [];
        indexArr.forEach(index => {
          newArr.push(arr[index]);
        });
        return newArr;
      }
    
      let randomVals = randomize(newVals);


    return (<Div className={classes}>
        <H4 >{props.q}</H4>
        <AnswerDiv>
            {/* {vals.map((ans, i) => {
                if (vals[i-1] !== undefined && vals[i-1] !== ans){
                    return <button id={vals.indexOf(ans)} onClick={e => props.addPoints(e)}>{ans}</button>
                }
            })} */}
            {randomVals.map((ans, i) => {
                    return <Button id={vals.indexOf(ans)} disabled={isDisabled} onClick={e => {
                        props.addPoints(e);
                        setIsDisabled(true);
                        setClasses("hide");
                    }}>{ans}</Button>
            })}
        </AnswerDiv>
    </Div>)
}

export default Question