import React, { Component } from 'react';

class Total extends Component {
  render() {
    const { totalFoods } = this.props;
    let total = 0;
    let subTotal = [];

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
                {subTotal.push(food.calories * food.quantity)}
              </li>
            </div>
          );
        })}

        <h2 style={{ color: 'green' }}>
          <i>Total calories:</i>
          <b>
            {subTotal.reduce((acc, el) => {
              return acc + el;
            }, 0)}
          </b>
        </h2>
      </div>
    );
  }
}

export default Total;
