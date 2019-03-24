import React, { Component } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
const AsyncTypeahead = asyncContainer(Typeahead);

const apiKey = "cfe422613b250f702980a3bbf9e90716";

class Search extends Component {
  state = {
    allowNew: false,
    isLoading: false,
    multiple: false,
    options: []
  };

  _handleSearch = query => {
    this.setState({ isLoading: true });
    this.makeAndHandleRequest(query);
  };

  makeAndHandleRequest = query => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: apiKey,
          include_adult: true,
          page: 1,
          language: "en-US",
          query: query
        }
      })
      .then(response => {
        const options = response.data.results.map(item => item["title"]);
        console.log(options);
        this.setState({
          isLoading: false,
          options
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <AsyncTypeahead
          isLoading={this.state.isLoading}
          id="search"
          minLength={3}
          placeholder="Choose a state..."
          onSearch={this._handleSearch}
          options={this.state.options}
          onChange={value => console.log("selected: " + value)}
        />
      </div>
    );
  }
}

export default Search;
