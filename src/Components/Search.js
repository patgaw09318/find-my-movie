import React, { Component } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import Config from "./config";
import Styles from "./styles";

const AsyncTypeahead = asyncContainer(Typeahead);
const apiKey = Config.movieApi.authorization.apiKey;
const searchMovieUrl = Config.movieApi.urls.searchMovie;
const styles = Styles.Search;

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
      .get(searchMovieUrl, {
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
          Styles={styles.SearchBar}
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
          useCache={true}
        />
      </div>
    );
  }
}

export default Search;
