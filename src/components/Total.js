import React, { Component } from 'react';

class Total extends Component {
  render() {
    const { totalFoods } = this.props;

    let total = totalFoods.reduce((acc, food) => {
      return acc + food.calories * food.quantity;
    }, 0);

    return (
      <div>
        <h1>
          <b>Today's Foods</b>
        </h1>

        {totalFoods.map((food, index) => {
          return (
            <div key={index}>
              <li>
                {food.quantity} {food.name} ={food.calories * food.quantity} cal
              </li>
            </div>
          );
        })}

        <h2 style={{ color: 'green' }}>
          <i>Total calories: {total}</i>
        </h2>
      </div>
    );
  }
}

export default Total;
