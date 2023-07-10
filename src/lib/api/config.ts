export const config = {
  BASE_URL: import.meta.env.TMDB_BASE_URL,
  SESSION_TOKEN: import.meta.env.SESSION_TOKEN,

  image: {
    BASE_URL: "https://image.tmdb.org/t/p",
    original: function (path: string) {
      return `${this.BASE_URL}/original/${path}`;
    },
    "500": function (path: string) {
      return `${this.BASE_URL}/w500/${path}`;
    },
  },
};

export const CATEGORIES: Record<string, string> = {
  TV_SERIES: "tv",
  MOVIE: "movie",
};

export const TV_SERIES: Record<string, string> = {
  POPULAR: "popular",
  TOP_RATED: "top_rated",
  ON_THE_AIR: "on_the_air",
};

export const MOVIE: Record<string, string> = {
  UPCOMING: "upcoming",
  POPULAR: "popular",
  TOP_RATED: "top_rated",
};
