import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="navbar-title ">
          <h1>Find my movie</h1>
        </div>
      </nav>
    );
  }
}

export default NavBar;
