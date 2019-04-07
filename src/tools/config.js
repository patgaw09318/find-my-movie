const english = "en-US";
const polish = "pl-PL";
const theMovieDbUrl = "https://api.themoviedb.org/3/";
const posterUrl = "https://image.tmdb.org/t/p/w500/";
const apiKey = "d0a661c7bf34b34b6c187d531c56b797";

var Config = {
  language: {
    polish,
    english
  },
  movieApi: {
    default: {
      movieId: "299534",
      language: english
    },
    urls: {
      searchMovie: theMovieDbUrl + "search/movie",
      getMovieUrl: theMovieDbUrl + "movie",
      poster: posterUrl
    },
    authorization: {
      apiKey
    }
  },
  application: {
    repositoryUrl: "https://github.com/patgaw09318/find-my-movie",
    repositoryImage: "/images/github-logo.png",
    linkedInUrl: "https://www.linkedin.com/in/patryk-gawryszewski1993/",
    linkedInImage: "/images/linkedIn-logo.png",
    mailAddress: "patgaw09318@gmail.com",
    mailImage: "/images/mail-logo.png",
    movieDbImage: "/images/movieDb-logo.svg",
    movieDbUrl: "https://www.themoviedb.org/"
  }
};

export default Config;
