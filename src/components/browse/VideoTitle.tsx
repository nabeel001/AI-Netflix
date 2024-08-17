import { InformationCircleIcon, PlayIcon } from "@heroicons/react/16/solid";

interface videoTitlePropsType {
  title: string;
  overView: string;
}

const VideoTitle = (props: videoTitlePropsType) => {
  const { title, overView } = props;
  return (
    <div className="w-full aspect-video pt-[25%] px-20 absolute text-white bg-gradient-to-tr from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overView}</p>
      <div>
        <button className="bg-white text-black py-2 px-12 rounded-lg hover:bg-opacity-80">
          <div className="flex items-center">
            <PlayIcon className="w-6 h-6" />
            <p className="text-lg pl-2">Play</p>
          </div>
        </button>
        <button className="mx-2 bg-gray-700 text-white py-2 px-8 rounded-lg hover:bg-opacity-80">
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
