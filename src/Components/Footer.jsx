import React from "react";
import Styles from "../tools/styles";
import Config from "../tools/config";
import "./styles.css";

const styles = Styles.Footer;

function Footer() {
  return (
    <footer style={styles.main}>
      <div>
        <a
          style={styles.bar}
          href={Config.application.repositoryUrl}
          title="GitHub repository"
        >
          <img
            style={styles.image}
            src={Config.application.repositoryImage}
            alt="GitHub"
          />
        </a>
        <a
          style={styles.bar}
          href={Config.application.linkedInUrl}
          title="LinkedIn"
        >
          <img
            style={styles.image}
            src={Config.application.linkedInImage}
            alt="LinkedIn"
          />
        </a>
        <div style={styles.bar} title={Config.application.mailAddress}>
          <img
            style={styles.image}
            src={Config.application.mailImage}
            alt="Mail"
          />
        </div>
        <a
          style={styles.bar}
          href={Config.application.movieDbUrl}
          title="MovieDb"
        >
          <img
            style={styles.image}
            src={Config.application.movieDbImage}
            alt="MovieDb"
          />
        </a>
      </div>
      <div style={styles.text}>@2019 Patryk Gawryszewski</div>
    </footer>
  );
}

export default Footer;
