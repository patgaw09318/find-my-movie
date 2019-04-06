import React, { Component } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";
import Api from "../tools/api";
import Styles from "../tools/styles";

const AsyncTypeahead = asyncContainer(Typeahead);
const styles = Styles.Search;

class Search extends Component {
  constructor() {
    super();
    this.state = {
      allowNew: false,
      isLoading: false,
      multiple: false,
      options: [],
      movies: []
    };
    this.api = new Api();
  }

  _handleSearch = query => {
    this.setState({ isLoading: true });
    this.makeAndHandleRequest(query);
  };

  makeAndHandleRequest = async query => {
    const response = await this.api.searchMovie(query, this.props.language);
    this.setState({
      isLoading: false,
      options: response.results.map(item => item["title"]),
      movies: response.results
    });
  };
  render() {
    return (
      <div>
        <AsyncTypeahead
          style={styles.SearchBar}
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
