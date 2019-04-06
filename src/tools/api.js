import axios from "axios";

import Config from "../tools/config";
const apiKey = Config.movieApi.authorization.apiKey;
const searchMovieUrl = Config.movieApi.urls.searchMovie;
const getMovieUrl = Config.movieApi.urls.getMovieUrl;

class Api {
  searchMovie = async (query, language) => {
    let response = await axios.get(searchMovieUrl, {
      params: {
        api_key: apiKey,
        include_adult: true,
        page: 1,
        language: language,
        query: query
      }
    });
    if (response.error) {
      console.log(response.error);
      return null;
    }

    return response.data;
  };
  getMovie = async (query, language) => {
    let response = await axios.get(`${getMovieUrl}/${query}`, {
      params: {
        api_key: apiKey,
        language: language
      }
    });
    if (response.error) {
      console.log(response.error);
      return null;
    }

    return response.data;
  };
}

export default Api;
