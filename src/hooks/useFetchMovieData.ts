import axios from "axios";
import { ERROR_MESSAGE, MOVIE_DETAILS_URL } from "../utils/constants";
import { useAppDispatch, useAppSelector } from "../utils/store/appStore";
import {
  toggleMovieModal,
  addSelectedMovie,
  addSelectedMovieVideo,
} from "../utils/store/moviesSlice";
import { toast } from "react-toastify";

interface useFetchMovieDataPropsType {
  id: number;
}

interface useFetchMovieDataReturnType {
  fetchMovieData: () => void;
}

const useFetchMovieData = (
  props: useFetchMovieDataPropsType
): useFetchMovieDataReturnType => {
  const { id } = props;
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const fetchMovieData = async () => {
    dispatch(toggleMovieModal());
    try {
      const { data: movieDetails } = await axios.get(MOVIE_DETAILS_URL(id), {
        headers: {
          Authorization: `Bearer ${user?.idToken}`,
          Accept: "application/json",
        },
      });
      dispatch(addSelectedMovie({ selectedMovie: movieDetails }));
      dispatch(
        addSelectedMovieVideo({ selectedMovieVideo: movieDetails.trailerVideo })
      );
    } catch (error) {
      toast.dismiss();
      toast.error(ERROR_MESSAGE);
    }
  };
  return { fetchMovieData };
};

export default useFetchMovieData;
