import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      textInput: ''
    };
  }

  handleChange(value) {
    this.setState({ message: value });
  }

  render() {
    return (
      <div className='App'>
        <header>Why Can I Not Get React??</header>
        <input onChange={e => this.handleChange(e.target.value)} type="text"></input>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

