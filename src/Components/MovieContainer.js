import React from "react";
import Config from "../tools/config";
import Styles from "../tools/styles";
const posterUrl = Config.movieApi.urls.poster;
const styles = Styles.MovieContainer;

const addSingleColumnRow = content => {
  return (
    <tr>
      <td colSpan="2">
        <span style={styles.value}>{content}</span>
        <br />
        <br />
      </td>
    </tr>
  );
};

const addLinkRow = (title, link) => {
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

const addTableRow = (title, content) => {
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

function MovieContainer(props) {
  const { movie, Translation } = props;
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
    genres,
    production_companies,
    budget
  } = movie;

  let genresString =
    genres !== undefined && genres.map(genre => genre.name).join(", ");
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });

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
                  <span>
                    &emsp;&emsp;
                    {overview !== null && overview !== undefined
                      ? overview
                      : Translation.t("NoDescription")}
                  </span>
                </td>
              </tr>
              {addSingleColumnRow(genresString)}
              {addTableRow(Translation.t("OriginalTitle"), original_title)}
              {addTableRow(Translation.t("ReleaseDate"), release_date)}
              {addTableRow(Translation.t("Popularity"), popularity)}
              {addTableRow(Translation.t("Runtime"), runtime + " min")}
              {addTableRow(Translation.t("Budget"), formatter.format(budget))}
              {addTableRow(Translation.t("Revenue"), formatter.format(revenue))}
              {addTableRow(
                Translation.t("Vote_average_count"),
                `${vote_average}/${vote_count}`
              )}
              {addSingleColumnRow(
                production_companies !== undefined &&
                  production_companies.map(studio =>
                    studio.logo_path !== undefined &&
                    studio.logo_path !== null ? (
                      <img
                        key={studio.id}
                        style={styles.productionImage}
                        alt={studio.name}
                        src={posterUrl + studio.logo_path}
                        title={studio.name}
                      />
                    ) : (
                      <div
                        key={studio.id}
                        style={styles.productionText}
                        title={studio.name}
                      >
                        {studio.name}
                      </div>
                    )
                  )
              )}
              {homepage !== undefined &&
                homepage !== null &&
                addLinkRow("homepage", homepage)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MovieContainer;
