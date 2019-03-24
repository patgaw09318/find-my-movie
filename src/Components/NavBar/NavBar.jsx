import React, { Component } from "react";
import "./NavBar.css";
import PopoverButton from "../PopoverButton/PopoverButton";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar  bg-success">
        <div className="navbar-brand navbar-title">
          <h2>Find my Movie</h2>
        </div>
        <PopoverButton
          handleChangeLanguage={this.props.handleChangeLanguage}
          language={this.props.language}
        />
      </nav>
    );
  }
}

export default NavBar;
