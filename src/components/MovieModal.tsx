import { useAppDispatch, useAppSelector } from "../utils/store/appStore";
import { toggleMovieModal } from "../utils/store/moviesSlice";
import Modal from "./core/Modal";
import MovieModalShimmer from "./shimmerUI/MovieModalShimmer";
import VideoFrameShimmer from "./shimmerUI/VideoFrameShimmer";

const MovieModal = () => {
  const dispatch = useAppDispatch();

  const isModalOpen = useAppSelector((state) => state.movies?.isMovieModalOpen);
  const movieData = useAppSelector((state) => state.movies?.selectedMovie);
  const trailerVideo = useAppSelector(
    (state) => state.movies?.selectedMovieVideo
  );

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => dispatch(toggleMovieModal())}
      title={movieData?.title}
    >
      <div className="flex flex-col space-y-5">
        <div className="flex justify-center">
          {trailerVideo != null ? (
            <iframe
              className="aspect-video w-full md:w-4/5"
              src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            ></iframe>
          ) : (
            <div className="w-full md:w-4/5 h-[30vh]">
              <VideoFrameShimmer />
            </div>
          )}
        </div>

        {!movieData ? (
          <MovieModalShimmer />
        ) : (
          <div className="md:mx-4">
            {movieData?.overview}
            <div className="flex flex-col my-2">
              <span className="font-bold text-red-600">Genres:</span>
              {movieData?.genres.map((genre) => genre.name).join(", ")}
            </div>
            <div className="flex justify-between my-2">
              <div className="w-1/2 flex flex-col">
                <span className="font-bold text-red-600">Budget:</span>
                {movieData?.budget.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
              <div className="w-1/2 flex flex-col">
                <span className="font-bold text-red-600">Revenue:</span>
                {movieData?.revenue.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
            <div className="flex justify-between my-2">
              <div className="w-1/2 flex flex-col">
                <span className="font-bold text-red-600">Release Date:</span>
                {movieData?.release_date}
              </div>
              <div className="w-1/2 flex flex-col">
                <span className="font-bold text-red-600">Status:</span>
                {movieData?.status}
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default MovieModal;
