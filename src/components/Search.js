import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Search extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.onSearch}
          //add onChange eventlistener here
          name="search"
          class="input"
          type="search"
          placeholder="Search a food"
        ></input>
      </div>
    );
  }
}

export default Search;
