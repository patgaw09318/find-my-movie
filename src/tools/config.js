const english = "en-US";
const polish = "pl-PL";

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
      searchMovie: "https://api.themoviedb.org/3/search/movie",
      getMovieUrl: "https://api.themoviedb.org/3/movie",
      poster: "https://image.tmdb.org/t/p/w500/"
    },
    authorization: {
      apiKey: "d0a661c7bf34b34b6c187d531c56b797"
    }
  }
};

export default Config;
