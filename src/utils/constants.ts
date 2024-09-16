const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ASK_GPT_URL = `${API_BASE_URL}/gpt/suggest-movies`;

const NOW_PLAYING_MOVIES_URL = `${API_BASE_URL}/movies/now-playing`;
const POPULAR_MOVIES_URL = `${API_BASE_URL}/movies/popular`;
const TOP_RATED_MOVIES_URL = `${API_BASE_URL}/movies/top-rated`;
const UPCOMING_MOVIES_URL = `${API_BASE_URL}/movies/upcoming`;

const MOVIE_DETAILS_URL = (movieId: number) => {
  return `${API_BASE_URL}/movie/${movieId}`;
};
const MOVIE_TRAILER_URL = (movieId: number): string => {
  return `${API_BASE_URL}/movie/trailer/${movieId}`;
};

const TMDB_IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w780";

const MOVIE_LIST_TITLES = Object.freeze({
  NOW_PLAYING: "Now Playing",
  TOP_RATED: "Top Rated",
  POPULAR: "Popular",
  UPCOMING: "Upcoming",
});

const ASK_GPT_SAMPLE_QUERIES = [
  "Hindi funny horror movies",
  "Retro action comedy",
  "Classic romantic horror",
  "Latest action science fiction",
  "Horror Fantasy action english movies",
];

const ERROR_MESSAGE = "Something went wrong!! Please try again after sometime.";

export {
  ASK_GPT_URL,
  POPULAR_MOVIES_URL,
  UPCOMING_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
  NOW_PLAYING_MOVIES_URL,
  MOVIE_DETAILS_URL,
  MOVIE_TRAILER_URL,
  TMDB_IMAGE_CDN_URL,
  MOVIE_LIST_TITLES,
  ASK_GPT_SAMPLE_QUERIES,
  ERROR_MESSAGE,
};
