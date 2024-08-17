import { useAppSelector } from "../../utils/store/appStore";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const movies = useAppSelector((state) => state.movies?.nowPlayingMovies);
  if (!movies) return;

  return (
    <div>
      <VideoTitle title={movies[0]?.title} overView={movies[0]?.overview} />
      <VideoContainer movieId={movies[0]?.id} />
    </div>
  );
};

export default MainContainer;
