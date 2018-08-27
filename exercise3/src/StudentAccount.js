import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class StudentAccount extends Component {
    render() {
        return (
            <div className="App">

                <p>{this.props.wordUp} Uno</p>
            </div>
    );
    }
}

export default StudentAccount;
