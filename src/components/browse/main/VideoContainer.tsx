import useVideoBackground from "../../../hooks/useVideoBackground";

interface VideoContainerPropsType {
  movieId: number;
}

const VideoContainer = (props: VideoContainerPropsType) => {
  const { movieId } = props;
  const { trailerVideoKey } = useVideoBackground({ movieId });

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideoKey}?&controls=0&autoplay=1&mute=1&playlist=${trailerVideoKey}&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
