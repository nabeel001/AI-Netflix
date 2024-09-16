import { InformationCircleIcon, PlayIcon } from "@heroicons/react/16/solid";
import useFetchMovieData from "../../../hooks/useFetchMovieData";

interface videoTitlePropsType {
  id: number;
  title: string;
  overView: string;
}

const VideoTitle = (props: videoTitlePropsType) => {
  const { id, title, overView } = props;
  const { fetchMovieData } = useFetchMovieData({ id });

  return (
    <div className="w-full aspect-video pt-[30%] md:pt-[25%] px-6 md:px-20 absolute text-white bg-gradient-to-tr from-black">
      <h1 className="text-xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overView}</p>
      <div className="my-2 md:my-0">
        <button
          className="bg-white text-black py-1 px-2 md:py-2 md:px-12 rounded-lg hover:bg-opacity-80"
          onClick={fetchMovieData}
        >
          <div className="flex items-center">
            <PlayIcon className="w-6 h-6" />
            <p className="text-lg pl-1">Play</p>
          </div>
        </button>
        <button
          className="hidden md:inline-block mx-2 bg-gray-700 text-white py-2 px-8 rounded-lg hover:bg-opacity-80"
          onClick={fetchMovieData}
        >
          <div className="flex items-center">
            <InformationCircleIcon className="w-6 h-6" />
            <p className="text-lg pl-2">More Info</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
