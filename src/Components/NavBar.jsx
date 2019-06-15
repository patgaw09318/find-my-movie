import React from "react";
import LanguageMenu from "./LanguageMenu";
import Styles from "../tools/styles";
const styles = Styles.Navbar;

function NavBar(props) {
  return (
    <nav className="bg-success">
      <div className="navbar-brand">
        <h2 style={styles.title}>Find my Movie</h2>
      </div>
      <div style={styles.languageButton}>
        <LanguageMenu
          handleChangeLanguage={props.handleChangeLanguage}
          language={props.language}
          Translation={props.Translation}
        />
      </div>
    </nav>
  );
}

export default NavBar;
