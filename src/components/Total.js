import React, { Component } from 'react';

class Total extends Component {
  render() {
    const { totalFoods } = this.props;
    console.log(totalFoods);
    return (
      <div>
        <h1>
          <b>Today's Foods</b>
        </h1>
        {totalFoods.map((food, index) => {
          return (
            <div key={index}>
              <li>
                {food.quantity} {food.name} = {food.calories * food.quantity}
                cal
              </li>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Total;
