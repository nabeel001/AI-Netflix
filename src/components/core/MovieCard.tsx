import { TMDB_IMAGE_CDN_URL } from "../../utils/constants";
import useFetchMovieData from "../../hooks/useFetchMovieData";

interface MovieCardPropsType {
  id: number;
  title: string;
  posterPath: string;
}

const MovieCard = (props: MovieCardPropsType) => {
  const { id, title, posterPath } = props;
  const { fetchMovieData } = useFetchMovieData({ id });

  if (!posterPath) return;

  return (
    <div
      className="w-36 md:w-44 mr-4 my-4 cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out"
      onClick={fetchMovieData}
    >
      <img alt={title} src={TMDB_IMAGE_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
