import React, { Component } from "react";
import Config from "../tools/config";
import Styles from "../tools/styles";
const posterUrl = Config.movieApi.urls.poster;
const styles = Styles.MovieContainer;

class MovieContainer extends Component {
  state = {};
  render() {
    const { movie, language } = this.props;
    const { title, poster_path, overview } = movie;
    return (
      <div style={styles.main}>
        <div style={styles.title}>
          <h1>{title}</h1>
        </div>
        <div className="row">
          <img
            className="img-fluid col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            style={styles.poster}
            src={poster_path != null ? posterUrl + poster_path : null}
            alt="poster not loaded!"
          />
          <div
            className="text-justify col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            style={styles.body}
          >
            <span>{overview}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieContainer;
