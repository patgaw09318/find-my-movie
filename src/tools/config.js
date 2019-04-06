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
  }
};

export default Config;
