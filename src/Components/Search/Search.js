import React, { Component } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import "./Search.css";
const AsyncTypeahead = asyncContainer(Typeahead);
const apiKey = "cfe422613b250f702980a3bbf9e90716";

class Search extends Component {
  state = {
    allowNew: false,
    isLoading: false,
    multiple: false,
    options: [],
    movies: []
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
          language: this.props.language,
          query: query
        }
      })
      .then(response => {
        const options = response.data.results.map(item => item["title"]);
        const movies = response.data.results;
        this.setState({
          isLoading: false,
          options,
          movies
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
          className="search"
          isLoading={this.state.isLoading}
          id="search"
          minLength={3}
          placeholder="Choose a movie..."
          onSearch={this._handleSearch}
          options={this.state.options}
          onChange={value => {
            let movie = this.state.movies.find(x => x.title === value[0]);
            this.props.handleOnChange(movie);
          }}
          useCache="true"
        />
      </div>
    );
  }
}

export default Search;
