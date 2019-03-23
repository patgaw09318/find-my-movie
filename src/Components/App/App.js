import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "../Search/Search";
import NavBar from "../NavBar/NavBar";

class App extends Component {
  render() {
    const options = ["Test1", "Test2", "Test3"];
    return (
      <div className="App">
        <NavBar />
        <body className="App-body">
          <Search options={options} />
        </body>
      </div>
    );
  }
}

export default App;
