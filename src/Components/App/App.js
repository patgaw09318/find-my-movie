import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "../Search/Search";
import NavBar from "../NavBar/NavBar";
import MovieContainer from "../MovieContainer/MovieContainer";

class App extends Component {
  state = {
    movie: {
      id: "483453",
      title: "The Seven Deadly Sins Movie",
      poster_path: "r6pPUVUKU5eIpYj4oEzidk5ZibB.jpg"
    }
  };

  setMovie = _movie => {
    const movie = _movie;
    this.setState({ movie });
    console.log(movie);
  };
  render() {
    return (
      <div>
        <NavBar />
        <div class="container">
          <Search handleOnChange={this.setMovie} />
          <MovieContainer movie={this.state.movie} />
        </div>
      </div>
    );
  }
}

export default App;
