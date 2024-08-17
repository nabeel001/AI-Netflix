import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../utils/store/appStore";
import axios from "axios";
import { TMDB_API } from "../utils/constants";
import { Video, addTrailerVideo } from "../utils/store/moviesSlice";

interface useVideoBackgroundPropsType {
  movieId: number;
}

interface useVideoBackgroundReturnType {
  trailerVideoKey: string | undefined;
}

const useVideoBackground = (
  props: useVideoBackgroundPropsType
): useVideoBackgroundReturnType => {
  const { movieId } = props;
  const dispatch = useAppDispatch();
  const trailerVideo = useAppSelector((state) => state.movies?.trailerVideo);

  const getMovieVideos = async () => {
    const { data } = await axios.get(
      TMDB_API.VIDEOS_URL(movieId),
      TMDB_API.API_OPTIONS
    );
    const trailerVideos = data.results.filter(
      (video: Video) => video.type === "Trailer"
    );
    dispatch(addTrailerVideo({ trailerVideo: trailerVideos[0] }));
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);

  return {
    trailerVideoKey: trailerVideo?.key,
  };
};

export default useVideoBackground;
