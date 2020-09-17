import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class FoodApp extends Component{
  constructor() {
    super();

    this.state = {
      foods: ['Spaghetti', 'Ice cream', 'Sushi']
    };
  }

  render() {
    let foodsToDisplay = this.state.foods.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <h2 className="FoodApp">{foodsToDisplay}</h2>
    )
  }
}