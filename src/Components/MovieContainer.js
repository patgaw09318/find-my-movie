import React, { Component } from "react";
import Config from "../tools/config";
import Styles from "../tools/styles";
const posterUrl = Config.movieApi.urls.poster;
const styles = Styles.MovieContainer;

class MovieContainer extends Component {
  getLinkRow = (title, link) => {
    return (
      link !== undefined &&
      link != null && (
        <tr>
          <td colSpan="2">
            <span>
              <a href={link}>{title}</a>
            </span>
          </td>
        </tr>
      )
    );
  };
  addTableRow = (title, content) => {
    return (
      <tr>
        <td>
          <span>{title}</span>
        </td>
        <td>
          <span style={styles.value}> {content}</span>
        </td>
      </tr>
    );
  };
  addSingleColumnRow = content => {
    return (
      <tr>
        <td colSpan="2">
          <span style={styles.value}>{content}</span>
          <br />
        </td>
      </tr>
    );
  };
  render() {
    const { movie, Translation } = this.props;
    const {
      title,
      poster_path,
      overview,
      release_date,
      popularity,
      original_title,
      tagline,
      homepage,
      runtime,
      revenue,
      vote_average,
      vote_count,
      genres
    } = movie;

    let genresString =
      genres !== undefined && genres.map(genre => genre.name).join(", ");
    return (
      <div style={styles.main}>
        <div>
          <h1 style={styles.title}>
            {title}
            <br />
          </h1>
          <h3 style={styles.subTitle}>{tagline}</h3>
        </div>
        <div className="row">
          <img
            className="img-fluid col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            style={styles.poster}
            src={poster_path != null ? posterUrl + poster_path : null}
            alt="poster not loaded!"
          />
          <div
            className="text-justify col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            style={styles.body}
          >
            <table>
              <tbody>
                <tr>
                  <td colSpan="2">
                    <span>&emsp;&emsp;{overview}</span>
                  </td>
                </tr>
                <br />
                {this.addSingleColumnRow(genresString)}
                <br />
                {this.addTableRow(
                  Translation.t("OriginalTitle"),
                  original_title
                )}
                {this.addTableRow("Release date:", release_date)}
                {this.addTableRow(Translation.t("Popularity"), popularity)}
                {this.addTableRow("runtime", runtime)}
                {this.addTableRow("revenue", revenue)}
                {this.addTableRow("vote_average", vote_average)}
                {this.addTableRow("vote_count", vote_count)}
                {this.getLinkRow("homepage", homepage)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieContainer;
