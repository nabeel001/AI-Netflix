import { TMDB_API } from "../../utils/constants";

interface MovieCardPropsType {
  title: string;
  posterPath: string;
}

const MovieCard = (props: MovieCardPropsType) => {
  const { posterPath, title } = props;
  return (
    <div className="w-44 pr-4">
      <img alt={title} src={TMDB_API.IMAGE_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
