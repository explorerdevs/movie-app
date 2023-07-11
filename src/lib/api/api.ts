import type { AxiosRequestConfig } from "axios";
import { client } from "./client";
import { CATEGORIES, MOVIE, TV_SERIES } from "./config";

export const tmdbApi = {
  fetchMovies: (type: string, params: AxiosRequestConfig<any> | undefined) => {
    const url = `/movie/${MOVIE[type]}`;
    return client.get(url, params);
  },
  fetchTvSeries: (
    type: string,
    params: AxiosRequestConfig<any> | undefined
  ) => {
    const url = `/tv/${TV_SERIES[type]}`;
    return client.get(url, params);
  },
  fetchVideos: (category: string, id: string) => {
    const url = `/${CATEGORIES[category]}/${id}/videos`;
    return client.get(url, { params: {} });
  },
  search: (category: string, params: AxiosRequestConfig<any> | undefined) => {
    const url = `/search/${CATEGORIES[category]}`;
    return client.get(url, params);
  },
  fetchMovieDetails: (
    category: string,
    id: string,
    params: AxiosRequestConfig<any> | undefined
  ) => {
    const url = `/${CATEGORIES[category]}/${id}`;
    return client.get(url, params);
  },
  fetchMovieCredits: (category: string, id: string) => {
    const url = `/${CATEGORIES[category]}/${id}/credits`;
    return client.get(url, { params: {} });
  },
  // similar: (category: string, id: string) => {
  //   const url = `/${CATEGORIES[category]}/${id}/similar`;
  //   return client.get(url, { params: {} });
  // },
};
