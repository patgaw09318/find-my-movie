import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import NavBar from "./NavBar";
import MovieContainer from "./MovieContainer";
import Config from "../tools/config";
import Api from "../tools/api";

const api = new Api();
const polish = Config.language.polish;
const english = Config.language.english;

class App extends Component {
  state = {
    language: english,
    movie: {
      id: null,
      title: null,
      poster_path: null
    }
  };
  constructor() {
    super();
    this.getMovie();
  }

  getMovie = async () => {
    let response = await api.searchMovie(
      Config.movieApi.default.movieName,
      english
    );
    const movie = response.results[0];
    this.setMovie(movie);
  };

  setMovie = _movie => {
    if (_movie !== null && _movie !== undefined) {
      const movie = _movie;
      const language = this.state.language;
      this.setState({ movie, language });
    } else {
      console.log("Error: Movies null or undefined!");
    }
  };

  setLanguage = _language => {
    if (_language === polish || _language === english) {
      const language = _language;
      const movie = this.state.movie;
      this.setState({ movie, language });
    } else {
      console.log("Error: Wrong language!");
    }
  };

  render() {
    return (
      <>
        <NavBar
          handleChangeLanguage={this.setLanguage}
          language={this.state.language}
        />
        <div className="container container-fluid">
          <Search
            handleOnChange={this.setMovie}
            language={this.state.language}
          />
          <MovieContainer
            movie={this.state.movie}
            language={this.state.language}
          />
        </div>
      </>
    );
  }
}

export default App;
