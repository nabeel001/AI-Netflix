import React from "react";
import MovieList from "./MovieList";
import { useAppSelector } from "../../utils/store/appStore";
import { movieListTitles } from "../../utils/constants";

const SecondaryContainer = () => {
  const nowPlayingMovies = useAppSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useAppSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useAppSelector(
    (store) => store.movies?.topRatedMovies
  );
  const upcomingMovies = useAppSelector(
    (store) => store.movies?.upcomingMovies
  );

  return (
    <div className="bg-black pb-10">
      <div className="-mt-36 pl-12 relative z-20">
        <MovieList
          title={movieListTitles.NOW_PLAYING}
          movies={nowPlayingMovies}
        />
        <MovieList title={movieListTitles.POPULAR} movies={popularMovies} />
        <MovieList title={movieListTitles.TOP_RATED} movies={topRatedMovies} />
        <MovieList title={movieListTitles.UPCOMING} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
