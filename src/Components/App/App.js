import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "../Search/Search";
import NavBar from "../NavBar/NavBar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Search />
      </div>
    );
  }
}

export default App;
