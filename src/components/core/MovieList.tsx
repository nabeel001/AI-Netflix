import { Movie } from "../../utils/store/moviesSlice";
import { times } from "lodash";
import MovieCardShimmer from "../shimmerUI/MovieCardShimmer";
import MovieCard from "./MovieCard";

interface MovieListPropsType {
  title: string;
  movies: Movie[];
}

const MovieList = (props: MovieListPropsType) => {
  const { title, movies } = props;
  return (
    <div className="px-6 mb-10">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar no-scrollbar::-webkit-scrollbar">
        <div className="flex">
          {movies.length === 0 &&
            times(10, (id) => <MovieCardShimmer key={id} />)}
          {movies.map((movie, id) => (
            <MovieCard
              key={id + "_" + movie.id}
              id={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
