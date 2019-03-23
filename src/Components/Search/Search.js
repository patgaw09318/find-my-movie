import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

class Search extends Component {
  state = {
    multiple: false
  };

  render() {
    return (
      <form>
        <Typeahead
          labelKey="name"
          options={this.props.options}
          placeholder="Choose a state..."
        />
      </form>
    );
  }
}

export default Search;
