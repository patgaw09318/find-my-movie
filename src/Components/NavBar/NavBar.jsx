import React, { Component } from "react";
import "./NavBar.css";
import PopoverButton from "../PopoverButton/PopoverButton";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="navbar-brand">Find my Movie</div>
        <PopoverButton />
      </nav>
    );
  }
}

export default NavBar;
