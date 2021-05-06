import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Search from './Search';

class FoodBox extends Component {
  state = {
    quantity: 0,
  };

  handleChange = (e) => {
    this.setState({
      quantity: e.target.value,
    });
  };

  render() {
    const { foods, onTotal } = this.props;

    return (
      <div>
        <Search onSearch={this.props.onSearch} />

        {foods.map((f, index) => {
          return (
            <div key={index}>
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
                        <input
                          onChange={this.handleChange}
                          className="input"
                          type="number"
                          placeholder="0"
                        />
                      </div>
                      <div className="control">
                        <button
                          onClick={() => {
                            onTotal(f, this.state.quantity);
                          }}
                          type="submit"
                          className="button is-info"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FoodBox;
