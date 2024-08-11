import { useEffect } from "react";
import Header from "../Header";
import {
  TMDB_API_OPTIONS,
  TMDB_NOW_PLAYING_MOVIES_API_URL,
} from "../../utils/constants";
import axios from "axios";
import { useAppDispatch } from "../../utils/store/appStore";
import { addNowPlayingMovies } from "../../utils/store/moviesSlice";

const Browse = () => {
  const dispatch = useAppDispatch();

  const getNowPlayingMoviesData = async () => {
    try {
      const { data } = await axios.get(
        TMDB_NOW_PLAYING_MOVIES_API_URL,
        TMDB_API_OPTIONS
      );
      dispatch(addNowPlayingMovies({ nowPlayingMovies: data.results }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNowPlayingMoviesData();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
