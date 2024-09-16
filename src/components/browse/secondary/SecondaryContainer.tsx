import MovieList from "../../core/MovieList";
import { useAppSelector } from "../../../utils/store/appStore";
import { MOVIE_LIST_TITLES } from "../../../utils/constants";

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
      <div className="md:-mt-28 md:pl-12 relative z-20">
        <MovieList
          title={MOVIE_LIST_TITLES.NOW_PLAYING}
          movies={nowPlayingMovies}
        />
        <MovieList title={MOVIE_LIST_TITLES.POPULAR} movies={popularMovies} />
        <MovieList
          title={MOVIE_LIST_TITLES.TOP_RATED}
          movies={topRatedMovies}
        />
        <MovieList title={MOVIE_LIST_TITLES.UPCOMING} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
