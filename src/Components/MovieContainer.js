import React, { Component } from "react";
import Config from "../tools/config";
import Styles from "../tools/styles";
const posterUrl = Config.movieApi.urls.poster;
const styles = Styles.MovieContainer;

class MovieContainer extends Component {
  state = {};
  render() {
    const { movie, language } = this.props;
    const {
      title,
      poster_path,
      overview,
      release_date,
      popularity,
      original_title
    } = movie;
    return (
      <div style={styles.main}>
        <div style={styles.title}>
          <h1>{title}</h1>
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
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Orginal title:</span>
                  </td>
                  <td>
                    <span style={styles.value}>{original_title}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Release date:</span>
                  </td>
                  <td>
                    <span style={styles.value}> {release_date}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Popularity:</span>
                  </td>
                  <td>
                    <span style={styles.value}>{popularity}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieContainer;
