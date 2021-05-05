import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';

class App extends Component {
  state = {
    foods: data,
    filteredFoods: data,
    showForm: false,
  };

  handleShowForm = () => {
    this.setState({
      showForm: true,
    });
  };

  handleAddFood = (food) => {
    this.setState({
      foods: [food, ...this.state.foods],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, image, calories } = e.target;

    let newFood = {
      name: name.value,
      image: image.value,
      calories: calories.value,
    };

    this.setState({ showForm: false }, () => {
      //onAdd is a readOnly passed from App.js as a prop
      this.handleAddFood(newFood);
    });
  };

  //handle search here
  handleSearch = (e) => {
    let input = e.target.value;
    const { foods } = this.state;
    let filteredFoods = foods.filter((oneFood) => {
      return oneFood.name.toLowerCase().includes(input.toLowerCase());
    });

    this.setState({
      filteredFoods: filteredFoods,
    });
  };

  render() {
    const { showForm, filteredFoods } = this.state;

    return (
      <div>
        {showForm ? (
          <AddForm onSubmit={this.handleSubmit} />
        ) : (
          <button
            onClick={this.handleShowForm}
            type="submit"
            className="button is-primary"
          >
            Add new Food
          </button>
        )}
        <FoodBox
          foods={filteredFoods}
          onSearch={this.handleSearch}
          // filteredFoods={filteredFoods}
        />
      </div>
    );
  }
}

export default App;
