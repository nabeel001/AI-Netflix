import LineShimmer from "./LineShimmer";

const MovieModalShimmer = () => {
  return (
    <div className="md:mx-4">
      <div className="w-full">
        <LineShimmer />
        <LineShimmer />
        <div className="w-1/2">
          <LineShimmer />
        </div>
      </div>
      <div className="flex flex-col my-2">
        <span className="font-bold text-red-600">Genres:</span>
        <div className="w-1/2">
          <LineShimmer />
        </div>
      </div>
      <div className="flex justify-between my-2">
        <div className="w-1/2 flex flex-col">
          <span className="font-bold text-red-600">Budget:</span>
          <div className="w-1/3">
            <LineShimmer />
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <span className="font-bold text-red-600">Revenue:</span>
          <div className="w-1/3">
            <LineShimmer />
          </div>
        </div>
      </div>
      <div className="flex justify-between my-2">
        <div className="w-1/2 flex flex-col">
          <span className="font-bold text-red-600">Release Date:</span>
          <div className="w-1/3">
            <LineShimmer />
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <span className="font-bold text-red-600">Status:</span>
          <div className="w-1/3">
            <LineShimmer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModalShimmer;
