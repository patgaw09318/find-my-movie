import React from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";
import Api from "../tools/api";
import Styles from "../tools/styles";
import Translation from "../tools/translation";
import Config from "../tools/config";
import PropTypes from "prop-types";
import { stringify } from "querystring";

const AsyncTypeahead = asyncContainer(Typeahead);
const styles = Styles.Search;

class Search extends React.PureComponent {
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
      <>
        <div className="search-main" style={styles.SearchBar}>
          <AsyncTypeahead
            className="searchBar"
            ref="typeahead"
            isLoading={this.state.isLoading}
            id="search"
            minLength={3}
            placeholder={Translation.t("ChooseMovie")}
            onSearch={this._handleSearch}
            options={this.state.options}
            onChange={value => {
              let movie = this.state.movies.find(x => x.title === value[0]);
              this.props.handleOnChange(movie);
            }}
            useCache={true}
          />
        </div>
        <img
          className="imgExit mobileShow desktopHide"
          src={Config.application.closeIcon}
          alt="close button"
          onClick={() => this.refs.typeahead.getInstance().clear()}
        />
      </>
    );
  }
}

Search.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  language: stringify.isRequired
};

export default Search;
