export const apiUrl = "http://localhost:8000";
export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const TMDB_OPTIONS = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const TMDB_POSTERPATH_CDN = "https://image.tmdb.org/t/p/w500/"

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
