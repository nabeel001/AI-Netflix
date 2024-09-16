import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../utils/store/appStore";
import axios from "axios";
import { ERROR_MESSAGE, MOVIE_TRAILER_URL } from "../utils/constants";
import { addTrailerVideo } from "../utils/store/moviesSlice";
import { toast } from "react-toastify";

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
  const user = useAppSelector((state) => state.user.user);
  const trailerVideo = useAppSelector((state) => state.movies?.trailerVideo);

  const getMovieTrailer = async () => {
    try {
      const { data: trailerVideo } = await axios.get(
        MOVIE_TRAILER_URL(movieId),
        {
          headers: {
            Authorization: `Bearer ${user?.idToken}`,
            Accept: "application/json",
          },
        }
      );
      dispatch(addTrailerVideo({ trailerVideo: trailerVideo }));
    } catch (error) {
      toast.dismiss();
      toast.error(ERROR_MESSAGE);
    }
  };

  useEffect(() => {
    if (movieId) getMovieTrailer();
  }, [movieId]);

  return {
    trailerVideoKey: trailerVideo?.key,
  };
};

export default useVideoBackground;
