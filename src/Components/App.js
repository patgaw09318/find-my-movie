import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import NavBar from "./NavBar";
import MovieContainer from "./MovieContainer";
import Footer from "./Footer";
import Config from "../tools/config";
import Api from "../tools/api";
import Translation from "../tools/translation";
import Styles from "../tools/styles";

const styles = Styles.App;
const polish = Config.language.polish;
const english = Config.language.english;
const defaultValues = Config.movieApi.default;

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      language: defaultValues.language,
      movie: {
        id: null,
        title: null,
        poster_path: null
      }
    };
    this.api = new Api();
    this.getMovie(defaultValues.movieId, defaultValues.language);
  }

  selectMovie = _movie => {
    if (_movie !== null && _movie !== undefined) {
      this.getMovie(_movie.id, this.state.language);
    } else {
      console.log("selectMovie error!" + _movie);
    }
  };

  getMovie = async (id, language) => {
    let movie = await this.api.getMovie(id, language);
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
      Translation.changeLanguage(_language === polish ? "polish" : "english");
      let movie = this.getMovie(this.state.movie.id, _language);
      const language = _language;
      this.setState({ movie, language });
    } else {
      console.log("Error: Wrong language!");
    }
  };

  render() {
    return (
      <>
        <div style={styles.top}>
          <NavBar
            handleChangeLanguage={this.setLanguage}
            language={this.state.language}
            Translation={Translation}
          />
        </div>
        <div className="container container-fluid">
          <Search
            handleOnChange={this.selectMovie}
            language={this.state.language}
            Translation={Translation}
          />
          <MovieContainer movie={this.state.movie} Translation={Translation} />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
