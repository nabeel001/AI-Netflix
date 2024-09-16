import { times } from "lodash";
import { ASK_GPT_SAMPLE_QUERIES } from "../../../utils/constants";
import { Movie } from "../../../utils/store/moviesSlice";
import MovieCard from "../../core/MovieCard";
import MovieCardShimmer from "../../shimmerUI/MovieCardShimmer";

interface AskGPTSuggestionsPropsType {
  isAskGptLoading: boolean;
  gptSuggestedMovies: Movie[];
}

const AskGPTSuggestions = (props: AskGPTSuggestionsPropsType) => {
  const { gptSuggestedMovies, isAskGptLoading } = props;
  return (
    <div className="flex flex-wrap mx-5 md:mx-20">
      {!isAskGptLoading && gptSuggestedMovies.length === 0 && (
        <div className="text-gray-400 italic w-4/5 md:w-3/5 my-24 md:my-36 p-5 mx-auto border-2 border-gray-500 rounded-lg ">
          {ASK_GPT_SAMPLE_QUERIES.map((query) => `"${query}"`).join(", ")}
        </div>
      )}
      {isAskGptLoading && times(8, (id) => <MovieCardShimmer key={id} />)}
      {gptSuggestedMovies.map((movie) => (
        <MovieCard
          key={movie.id + "_" + movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default AskGPTSuggestions;
