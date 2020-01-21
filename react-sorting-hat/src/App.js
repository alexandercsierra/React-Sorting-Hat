import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import {Route} from 'react-router-dom'
import Quiz from './components/Quiz'
import Results from './components/Results'


class App extends Component {
  constructor(){
    super();
    this.state = {
      g: 0,
      s: 0,
      r: 0,
      h: 0,
      winners: []
    }
  }

  addPoints = (e) => {
    let clicked = e.target.id;
    let keys = Object.keys(this.state);
    let values = Object.values(this.state);
    keys.pop();
    values.pop();
    let newVals = values;
    if (e.target.textContent !=="Winter" && e.target.textContent !=="Summer" && e.target.textContent !=="Cat" && e.target.textContent !=="Dog" && e.target.textContent !=="Lily" && e.target.textContent !=="Sunflower"){
      newVals[clicked] +=1;
    } else if (e.target.textContent === "Winter" || e.target.textContent === "Cat" || e.target.textContent === "Lily"){
      newVals[1]+=1;
      newVals[2]+=1;
    } else if (e.target.textContent === "Summer" || e.target.textContent === "Dog" || e.target.textContent === "Sunflower"){
      newVals[0]+=1;
      newVals[3]+=1;
    }
    
    console.log(newVals);
    this.setState({
      g: newVals[0],
      s: newVals[1],
      r: newVals[2],
      h: newVals[3] 
    })
  }

  getResult = (e, props) => {
    e.preventDefault();
    console.log("results", this.state);
    const vals = Object.values(this.state);
    const winnersArray = [];
    vals.pop();
    vals.forEach(value => {
      winnersArray.push(value);
    });
    console.log("winnersarray", winnersArray);
    let winningVal = Math.max(...winnersArray);
    console.log("winningval", winningVal);
    let indexArray = [];
    winnersArray.forEach((val, i) => {
      if (val === winningVal){
        indexArray.push(i);
      }
    })
    let finalHouses = [];
    console.log("indexes", indexArray);
    if (indexArray.includes(0)){
      finalHouses.push("gryffindor");
    } 
    if (indexArray.includes(1)){
      finalHouses.push("slytherin");
    } 
    if (indexArray.includes(2)){
      finalHouses.push("ravenclaw");
    } 
    if (indexArray.includes(3)){
      finalHouses.push("hufflepuff");
    }

    console.log("finalHouses", finalHouses);
    this.setState({winners: finalHouses});

    return this.state.winners;
  }
  
  setWinner = (e) => {
    let winner = e.target.textContent
    let newState = [];
    if (winner === "Ravenclaw"){
      newState.push("Ravenclaw");
    } else if (winner === "Slytherin"){
      newState.push("Slytherin");
    }else if (winner === "Hufflepuff"){
      newState.push("Hufflepuff");
    } else if (winner === "Gryffindor"){
      newState.push("Gryffindor");
    }

    this.setState({winners: newState});
    
  }

  resetScores = (e) => {
    this.setState({
        g: 0,
        s: 0,
        r: 0,
        h: 0,
        winners: []
      });
  }

  render() {
    console.log("state", this.state);
    console.log("winners", this.state.winners);
    return (
      <div className="App">
        <Route exact path="/"><Home/></Route>
        <Route path="/quiz"><Quiz scores={this.state} addPoints={this.addPoints} getResult={this.getResult}/></Route>
        <Route path="/results"><Results houseScores={this.state} winners={this.state.winners} setWinner={this.setWinner} reset={this.resetScores}/></Route>
        
      </div>
    );
  }
}

export default App;
