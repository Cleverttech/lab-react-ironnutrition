import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class AddForm extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <form onSubmit={onSubmit}>
          <label className="label">Name</label>
          <input
            name="name"
            className="input"
            type="text"
            placeholder="name of food"
          ></input>
          <label className="label">calories</label>
          <input
            name="calories"
            className="input"
            type="text"
            placeholder="number of calories"
          ></input>
          <label class="label">Image</label>
          <input
            name="image"
            className="input"
            type="text"
            placeholder="image"
          ></input>
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddForm;
