import axios from "axios";
import { useRef, FormEvent } from "react";
import { ASK_GPT_URL, ERROR_MESSAGE } from "../utils/constants";
import { useAppDispatch, useAppSelector } from "../utils/store/appStore";
import {
  addGptSuggestedMovies,
  Movie,
  removeGptSuggestedMovies,
} from "../utils/store/moviesSlice";
import { toggleAskGptLoading } from "../utils/store/gptSlice";
import { toast } from "react-toastify";

interface UseAskGPTReturnType {
  searchText: React.RefObject<HTMLInputElement>;
  isAskGptLoading: boolean;
  gptSuggestedMovies: Movie[];
  handleAskGptSearch: (e: FormEvent) => Promise<void>;
}

const useAskGPT = (): UseAskGPTReturnType => {
  const searchText = useRef<HTMLInputElement>(null);
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const handleAskGptSearch = async (e: FormEvent) => {
    e.preventDefault();
    try {
      dispatch(toggleAskGptLoading());
      dispatch(removeGptSuggestedMovies());
      const { data: gptMoviesData } = await axios.get(ASK_GPT_URL, {
        params: {
          movieQuery: searchText.current!.value,
        },
        headers: {
          Authorization: `Bearer ${user?.idToken}`,
          Accept: "application/json",
        },
      });
      searchText.current!.value = "";
      dispatch(addGptSuggestedMovies({ gptSuggestedMovies: gptMoviesData }));
      dispatch(toggleAskGptLoading());
    } catch (error) {
      dispatch(toggleAskGptLoading());
      toast.dismiss();
      toast.error(ERROR_MESSAGE);
    }
  };

  const gptSuggestedMovies = useAppSelector(
    (store) => store.movies?.gptSuggestedMovies
  );

  const isAskGptLoading = useAppSelector((store) => store.gpt.isAskGptLoading);

  return {
    searchText,
    isAskGptLoading,
    gptSuggestedMovies,
    handleAskGptSearch,
  };
};

export default useAskGPT;
