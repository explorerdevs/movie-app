import axios from "axios";
import * as Qs from "qs";

export const client = axios.create({
  baseURL: import.meta.env.TMDB_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: function (params) {
    return Qs.stringify(params, { arrayFormat: "brackets" });
  },
});

client.defaults.headers.common["Authorization"] = import.meta.env.SESSION_TOKEN;

client.interceptors.request.use(async (config) => config);

client.interceptors.response.use(
  function (response) {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  function (error) {
    throw error;
  }
);
