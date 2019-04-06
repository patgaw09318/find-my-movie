import React, { Component } from "react";
import PopoverButton from "./PopoverButton";
import Styles from "./styles";

const styles = Styles.Navbar;

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="bg-success" styles={styles.main}>
        <div className="navbar-brand" styles={styles.title}>
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