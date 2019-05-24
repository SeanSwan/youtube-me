import React from "react";
import "../css/style.css";
import "../scss/_variables.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-container">
        <div className="search-icon-btn">
          <label>Search</label>
          <br />
          <FontAwesomeIcon icon="search" />
        </div>
        <div className="search-input">
          <form onSubmit={this.onFormSubmit} className="ui-form">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              className="search-bar"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
