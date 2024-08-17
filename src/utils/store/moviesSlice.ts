import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export interface Video {
  name: string;
  type: string;
  site: string;
  key: string;
}

export interface MoviesState {
  nowPlayingMovies: Movie[];
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  upcomingMovies: Movie[];
  trailerVideo: Video | null;
}

const initialState: MoviesState = {
  nowPlayingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  trailerVideo: null,
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
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailerVideo,
} = moviesSlice.actions;
export default moviesSlice.reducer;
