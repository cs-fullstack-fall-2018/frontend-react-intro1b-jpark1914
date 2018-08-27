import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentAccount from "./StudentAccount";

class App extends Component {
  render() {
      var wordUp = "The coolest game ever";
    return (
      <div className="App">

          <StudentAccount wordUp={wordUp}/>
      </div>
    );
  }
}

export default App;
