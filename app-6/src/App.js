import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      tasks: ''
    }

    //bind statement!!
    this.updateTodoList = this.updateTodoList.bind(this);
  }

  handleInput(tasks) {
    this.setState({ tasks: value })
  }

  updateTodoList() {
    this.setState({
      list: [...this.state.list, this.state.tasks]
        tasks: '' //why does this need to be repeated?? 
    });
  }

  render() {
    let tasks = this.state.tasks.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    return (
      <div>
        My To Do List:
        <input onChange={this.handleInput}></input>
        <button onClick={this.updateTodoList}>Add</button>
      </div>
    )
  }
}