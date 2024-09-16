import { useAppSelector } from "../../../utils/store/appStore";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useAppSelector((state) => state.movies?.nowPlayingMovies);
  if (!movies) return;

  return (
    <div className="pt-[35%] bg-black md:pt-0">
      <VideoTitle
        id={movies[0]?.id}
        title={movies[0]?.title}
        overView={movies[0]?.overview}
      />
      <VideoContainer movieId={movies[0]?.id} />
    </div>
  );
};

export default MainContainer;
