import React from "react";
import Config from "../tools/config";
import Styles from "../tools/styles";
const posterUrl = Config.movieApi.urls.poster;
const styles = Styles.MovieContainer;

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

const SingleColumnRow = props => {
  return (
    <tr>
      <td colSpan="2">
        <span style={styles.value}>{props.content}</span>
        <br />
        <br />
      </td>
    </tr>
  );
};

const LinkRow = props => {
  return (
    props.link !== undefined &&
    props.link != null && (
      <tr>
        <td colSpan="2">
          <span>
            <a href={props.link}>{props.title}</a>
          </span>
        </td>
      </tr>
    )
  );
};

const TableRow = props => {
  return (
    <tr>
      <td>
        <span>{props.title}</span>
      </td>
      <td>
        <span style={styles.value}> {props.content}</span>
      </td>
    </tr>
  );
};

const getProductionCompanies = companies => {
  return (
    companies !== undefined &&
    companies.map(studio =>
      studio.logo_path !== undefined && studio.logo_path !== null ? (
        <img
          key={studio.id}
          style={styles.productionImage}
          alt={studio.name}
          src={posterUrl + studio.logo_path}
          title={studio.name}
        />
      ) : (
        <div key={studio.id} style={styles.productionText} title={studio.name}>
          {studio.name}
        </div>
      )
    )
  );
};

const getOverview = (Translation, overview) => {
  return (
    <>
      &emsp;&emsp;
      {overview !== null && overview !== undefined
        ? overview
        : Translation.t("NoDescription")}
    </>
  );
};

const Link = props => {
  let homepage = props.homepage;
  let title = props.title;
  return (
    homepage !== undefined &&
    homepage !== null && <LinkRow title={title} link={homepage} />
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
              <SingleColumnRow content={getOverview(Translation, overview)} />
              <SingleColumnRow content={genresString} />
              <TableRow
                title={Translation.t("OriginalTitle")}
                content={original_title}
              />
              <TableRow
                title={Translation.t("ReleaseDate")}
                content={release_date}
              />
              <TableRow
                title={Translation.t("Popularity")}
                content={popularity}
              />

              <TableRow
                title={Translation.t("Runtime")}
                content={runtime + " min"}
              />
              <TableRow
                title={Translation.t("Budget")}
                content={formatter.format(budget)}
              />
              <TableRow
                title={Translation.t("Revenue")}
                content={formatter.format(revenue)}
              />
              <TableRow
                title={Translation.t("Vote_average_count")}
                content={`${vote_average}/${vote_count}`}
              />
              <SingleColumnRow
                content={getProductionCompanies(production_companies)}
              />
              <Link homepage={homepage} title="homepage" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MovieContainer;
