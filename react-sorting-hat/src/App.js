import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {Route} from 'react-router-dom'
import Quiz from './components/Quiz'

class App extends Component {
  constructor(){
    super();
    this.state = {
      gryffindor: 0,
      slytherin: 0,
      ravenclaw: 0,
      hufflepuff: 0
    }
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/"><Home/></Route>
        <Route path="/quiz"><Quiz/></Route>
        
      </div>
    );
  }
}

export default App;
