import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'

export default class App extends Component {
  constructor() {
    super();
  }

  handleInput() {

  }

  updateTodoList() {

  }

  render() {
    return (
      <div>
        My To Do List:
        <input onChange={this.handleInput}></input>
        <button onClick={this.updateTodoList}>Add</button>
      </div>
    )
  }
}