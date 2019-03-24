import React, { Component } from "react";
import "./MovieContainer.css";
class MovieContainer extends Component {
  render() {
    let movie = this.props.movie;
    return (
      <div className="movie-container panel panel-default">
        <div className="panel-heading">
          <h1>{movie.title}</h1>
        </div>
        <div className="panel-body">{movie.overview}</div>
        <img
          className="movie-poster img-fluid"
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt="poster"
        />
      </div>
    );
  }
}

export default MovieContainer;
