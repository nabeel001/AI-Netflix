import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export interface MovieDetail extends Movie {
  genres: Genre[];
  status: string;
  budget: number;
  revenue: number;
  release_date: string;
}

export interface Video {
  name: string;
  type: string;
  site: string;
  key: string;
  official: boolean;
}

export interface MoviesState {
  nowPlayingMovies: Movie[];
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  upcomingMovies: Movie[];
  gptSuggestedMovies: Movie[];
  trailerVideo: Video | null;
  selectedMovie: MovieDetail | null;
  selectedMovieVideo: Video | null;
  isMovieModalOpen: boolean;
}

const initialState: MoviesState = {
  nowPlayingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  gptSuggestedMovies: [],
  trailerVideo: null,
  selectedMovie: null,
  selectedMovieVideo: null,
  isMovieModalOpen: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addNowPlayingMovies: (
      state,
      action: PayloadAction<{ nowPlayingMovies: Movie[] }>
    ) => {
      state.nowPlayingMovies.push(...action.payload.nowPlayingMovies);
    },
    addPopularMovies: (
      state,
      action: PayloadAction<{ popularMovies: Movie[] }>
    ) => {
      state.popularMovies.push(...action.payload.popularMovies);
    },
    addTopRatedMovies: (
      state,
      action: PayloadAction<{ topRatedMovies: Movie[] }>
    ) => {
      state.topRatedMovies.push(...action.payload.topRatedMovies);
    },
    addUpcomingMovies: (
      state,
      action: PayloadAction<{ upcomingMovies: Movie[] }>
    ) => {
      state.upcomingMovies.push(...action.payload.upcomingMovies);
    },
    addTrailerVideo: (
      state,
      action: PayloadAction<{ trailerVideo: Video }>
    ) => {
      state.trailerVideo = action.payload.trailerVideo;
    },
    addGptSuggestedMovies: (
      state,
      action: PayloadAction<{ gptSuggestedMovies: Movie[] }>
    ) => {
      state.gptSuggestedMovies = [];
      state.gptSuggestedMovies.push(...action.payload.gptSuggestedMovies);
    },
    removeGptSuggestedMovies: (state) => {
      state.gptSuggestedMovies = [];
    },
    addSelectedMovie: (
      state,
      action: PayloadAction<{ selectedMovie: MovieDetail }>
    ) => {
      state.selectedMovie = action.payload.selectedMovie;
    },
    addSelectedMovieVideo: (
      state,
      action: PayloadAction<{ selectedMovieVideo: Video }>
    ) => {
      state.selectedMovieVideo = action.payload.selectedMovieVideo;
    },
    toggleMovieModal: (state) => {
      if (state.isMovieModalOpen) {
        state.selectedMovie = null;
        state.selectedMovieVideo = null;
      }
      state.isMovieModalOpen = !state.isMovieModalOpen;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailerVideo,
  addGptSuggestedMovies,
  removeGptSuggestedMovies,
  addSelectedMovie,
  addSelectedMovieVideo,
  toggleMovieModal,
} = moviesSlice.actions;
export default moviesSlice.reducer;
