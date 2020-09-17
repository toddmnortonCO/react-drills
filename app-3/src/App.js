import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class FilterApp extends Component {
  constructor() {
    super();

    this.state = {
      filterString: '',
      foods: ['spaghetti', 'ice cream', 'sushi']
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter })
  }
  render() {
    let foodsToDisplay = this.state.foods
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      },
      .map((element, index) => {
          return <h2 key={index}>{element}</h2>
        });

    return (
      <div className="FilterApp">
        <input onChange={(e) => this.handleChange(e.target.value)} type="text"></input>
        {foodsToDisplay}
      </div>
    );
  }
}