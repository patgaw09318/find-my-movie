import React from "react";
import Styles from "../tools/styles";
import Config from "../tools/config";
import "./styles.css";

const styles = Styles.Footer;
let getFooterImageLink = (_href, _title, _img, _alt) => {
  return (
    <a
      style={styles.bar}
      href={_href}
      title={_title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img style={styles.image} src={_img} alt="_alt" />
    </a>
  );
};

function Footer() {
  return (
    <footer style={styles.main}>
      <div>
        {getFooterImageLink(
          Config.application.repositoryUrl,
          "GitHub repository",
          Config.application.repositoryImage,
          "GitHub"
        )}
        {getFooterImageLink(
          Config.application.linkedInUrl,
          "LinkedIn",
          Config.application.linkedInImage,
          "LinkedIn"
        )}
        {getFooterImageLink(
          `mailto:${Config.application.mailAddress}`,
          Config.application.mailAddress,
          Config.application.mailImage,
          "Mail"
        )}
        {getFooterImageLink(
          Config.application.movieDbUrl,
          "MovieDb",
          Config.application.movieDbImage,
          "MovieDb"
        )}
      </div>
      <div style={styles.text}>@2019 Patryk Gawryszewski</div>
    </footer>
  );
}

export default Footer;
