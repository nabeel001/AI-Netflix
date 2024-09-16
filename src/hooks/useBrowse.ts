import axios from "axios";
import { useEffect } from "react";
import {
  ERROR_MESSAGE,
  NOW_PLAYING_MOVIES_URL,
  POPULAR_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
  UPCOMING_MOVIES_URL,
} from "../utils/constants";
import { useAppDispatch, useAppSelector } from "../utils/store/appStore";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/store/moviesSlice";
import { toast } from "react-toastify";

interface UseBrowseReturnType {
  showAskGpt: boolean;
}

const useBrowse = (): UseBrowseReturnType => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const showAskGpt = useAppSelector((store) => store.gpt.showAskGpt);

  const API_OPTIONS = {
    headers: {
      Authorization: `Bearer ${user?.idToken}`,
      Accept: "application/json",
    },
  };

  const getNowPlayingMovies = async () => {
    try {
      const { data: nowPlaying } = await axios.get(
        NOW_PLAYING_MOVIES_URL,
        API_OPTIONS
      );
      dispatch(addNowPlayingMovies({ nowPlayingMovies: nowPlaying }));
    } catch (error) {
      toast.dismiss();
      toast.error(ERROR_MESSAGE);
    }
  };

  const getPopularMovies = async () => {
    try {
      const { data: popular } = await axios.get(
        POPULAR_MOVIES_URL,
        API_OPTIONS
      );
      dispatch(addPopularMovies({ popularMovies: popular }));
    } catch (error) {
      toast.dismiss();
      toast.error(ERROR_MESSAGE);
    }
  };

  const getTopRatedMovies = async () => {
    try {
      const { data: topRated } = await axios.get(
        TOP_RATED_MOVIES_URL,
        API_OPTIONS
      );
      dispatch(addTopRatedMovies({ topRatedMovies: topRated }));
    } catch (error) {
      toast.dismiss();
      toast.error(ERROR_MESSAGE);
    }
  };

  const getUpcomingMovies = async () => {
    try {
      const { data: upcoming } = await axios.get(
        UPCOMING_MOVIES_URL,
        API_OPTIONS
      );
      dispatch(addUpcomingMovies({ upcomingMovies: upcoming }));
    } catch (error) {
      toast.dismiss();
      toast.error(ERROR_MESSAGE);
    }
  };

  useEffect(() => {
    if (user) {
      getNowPlayingMovies();
      getPopularMovies();
      getTopRatedMovies();
      getUpcomingMovies();
    }
  }, [user]);

  return {
    showAskGpt,
  };
};

export default useBrowse;
