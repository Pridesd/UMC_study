import Axios from "axios";

const baseURL = `https://api.themoviedb.org/3/`;

export const axiosWithMovieAPI = Axios.create({
  baseURL,
});
