import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './foods.json';
import FoodBox from './components/FoodBox';

class App extends Component {
  state = {
    foods: data,
  };

  render() {
    const { foods } = this.state;

    return (
      <div>
        <FoodBox foods={foods} />
      </div>
    );
  }
}

export default App;
