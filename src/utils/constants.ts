export const TMDB_NOW_PLAYING_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const TMDB_API_OPTIONS = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
};
