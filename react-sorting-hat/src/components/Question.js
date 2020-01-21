import React, {useState} from 'react'
import styled from 'styled-components'

const Div = styled.div`
    // border: 1px solid red;
    width: 80%;
    margin: 0 auto;
`;

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
        <h4 style={{fontSize: "2.5rem", color:"#967e4e", marginTop: "4%", textShadow: "3px 3px #000"}}>{props.q}</h4>
        <div>
            {/* {vals.map((ans, i) => {
                if (vals[i-1] !== undefined && vals[i-1] !== ans){
                    return <button id={vals.indexOf(ans)} onClick={e => props.addPoints(e)}>{ans}</button>
                }
            })} */}
            {randomVals.map((ans, i) => {
                    return <button style={{background: "#000", border: "1px solid white"}} id={vals.indexOf(ans)} disabled={isDisabled} onClick={e => {
                        props.addPoints(e);
                        setIsDisabled(true);
                        setClasses("hide");
                    }}>{ans}</button>
            })}
        </div>
    </Div>)
}

export default Question