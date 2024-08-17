import React from "react";
import { Movie } from "../../utils/store/moviesSlice";
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
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
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
