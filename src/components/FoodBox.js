import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends Component {
  render() {
    console.log(this.props.foods);
    const { foods } = this.props;

    return (
      <div>
        {foods.map((f) => {
          return (
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={f.image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{f.name}</strong> <br />
                      <small>{f.calories} cal</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="number" value="1" />
                    </div>
                    <div className="control">
                      <button className="button is-info">+</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FoodBox;
