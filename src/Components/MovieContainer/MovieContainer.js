import React, { Component } from "react";
import "./MovieContainer.css";

class MovieContainer extends Component {
  render() {
    let { title, poster_path, overview } = this.props.movie;
    return (
      <div className="movie-container">
        <div className="movie-title">
          <h1>{title}</h1>
        </div>
        <div className="row">
          <img
            className="movie-poster img-fluid col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            src={"https://image.tmdb.org/t/p/w500/" + poster_path}
            alt="poster"
          />
          <div className="container-body text-justify col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <span>{overview}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieContainer;
