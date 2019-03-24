import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "../Search/Search";
import NavBar from "../NavBar/NavBar";
import MovieContainer from "../MovieContainer/MovieContainer";
const polish = "pl-PL";
const english = "en-US";

class App extends Component {
  state = {
    language: english,
    movie: {
      id: "483453",
      title: "The Seven Deadly Sins Movie",
      poster_path: "r6pPUVUKU5eIpYj4oEzidk5ZibB.jpg"
    }
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
          <MovieContainer movie={this.state.movie} />
        </div>
      </>
    );
  }
}

export default App;
