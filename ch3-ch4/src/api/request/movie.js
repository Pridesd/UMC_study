import { axiosWithMovieAPI } from "../axios";

const key = process.env.REACT_APP_MOVIE_KEY;

const request = {
  trending: `/trending/all/day?api_key=${key}`,
  topRate: `/movie/top_rated?api_key=${key}`,
  action: `/discover/movie?api_key=${key}&with_genres=28`,
  adventure: `/discover/movie?api_key=${key}&with_genres=12`,
  animation: `/discover/movie?api_key=${key}&with_genres=16`,
  comedy: `/discover/movie?api_key=${key}&with_genres=35`,
  drama: `/discover/movie?api_key=${key}&with_genres=18`,
};

export const getMovie = (genre) => {
  return axiosWithMovieAPI.get(request[genre]);
};
