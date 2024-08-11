import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MoviesState {
  nowPlayingMovies: unknown[]; //TODO: define a type for the movie
}

const initialState: MoviesState = {
  nowPlayingMovies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addNowPlayingMovies: (
      state,
      action: PayloadAction<{ nowPlayingMovies: unknown[] }> //TODO: update the movie type
    ) => {
      state.nowPlayingMovies.push(...action.payload.nowPlayingMovies);
    },
  },
});

export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
