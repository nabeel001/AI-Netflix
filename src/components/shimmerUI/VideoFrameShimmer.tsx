import { PlayIcon } from "@heroicons/react/16/solid";

const VideoFrameShimmer = () => {
  return (
    <div className="flex justify-center items-center w-auto h-full my-2 rounded-lg bg-slate-800 animate-pulse">
      <PlayIcon className="w-20 h-20 text-slate-600" />
    </div>
  );
};

export default VideoFrameShimmer;
