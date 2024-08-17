const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const TMDB_API = Object.freeze({
  NOW_PLAYING_MOVIES_URL: `${TMDB_BASE_URL}/movie/now_playing?page=1`,
  POPULAR_MOVIES_URL: `${TMDB_BASE_URL}/movie/popular?page=1`,
  TOP_RATED_MOVIES_URL: `${TMDB_BASE_URL}/movie/top_rated?page=1`,
  UPCOMING_MOVIES_URL: `${TMDB_BASE_URL}/movie/upcoming?page=1`,
  IMAGE_CDN_URL: "https://image.tmdb.org/t/p/w780",
  VIDEOS_URL: (movieId: number): string => {
    return `${TMDB_BASE_URL}/movie/${movieId}/videos?language=en-US`;
  },
  API_OPTIONS: {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  },
});

export const movieListTitles = Object.freeze({
  NOW_PLAYING: "Now Playing",
  TOP_RATED: "Top Rated",
  POPULAR: "Popular",
  UPCOMING: "Upcoming",
});
