import axios from "axios";
import { useEffect } from "react";
import { TMDB_API } from "../utils/constants";
import { useAppDispatch } from "../utils/store/appStore";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/store/moviesSlice";

const useBrowse = () => {
  const dispatch = useAppDispatch();

  const getNowPlayingMoviesData = async () => {
    try {
      const { data } = await axios.get(
        TMDB_API.NOW_PLAYING_MOVIES_URL,
        TMDB_API.API_OPTIONS
      );
      dispatch(addNowPlayingMovies({ nowPlayingMovies: data.results }));
    } catch (error) {
      console.error(error);
    }
  };

  const getPopularMoviesData = async () => {
    try {
      const { data } = await axios.get(
        TMDB_API.POPULAR_MOVIES_URL,
        TMDB_API.API_OPTIONS
      );
      dispatch(addPopularMovies({ popularMovies: data.results }));
    } catch (error) {
      console.error(error);
    }
  };

  const getTopRatedMoviesData = async () => {
    try {
      const { data } = await axios.get(
        TMDB_API.TOP_RATED_MOVIES_URL,
        TMDB_API.API_OPTIONS
      );
      dispatch(addTopRatedMovies({ topRatedMovies: data.results }));
    } catch (error) {
      console.error(error);
    }
  };

  const getUpcomingMoviesData = async () => {
    try {
      const { data } = await axios.get(
        TMDB_API.UPCOMING_MOVIES_URL,
        TMDB_API.API_OPTIONS
      );
      dispatch(addUpcomingMovies({ upcomingMovies: data.results }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNowPlayingMoviesData();
    getPopularMoviesData();
    getTopRatedMoviesData();
    getUpcomingMoviesData();
  }, []);
};

export default useBrowse;
