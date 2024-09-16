import AskGPTSearchBar from "./AskGPTSearchBar";
import bg_image from "./../../../assets/bg-image.jpg";
import AskGPTSuggestions from "./AskGPTSuggestions";
import useAskGPT from "../../../hooks/useAskGPT";

const AskGPT = () => {
  const {
    searchText,
    isAskGptLoading,
    gptSuggestedMovies,
    handleAskGptSearch,
  } = useAskGPT();
  return (
    <div className="flex justify-center">
      <img
        src={bg_image}
        alt="bg-image"
        className="fixed h-full w-full object-cover -z-10"
      />
      <div className="w-11/12 md:w-3/4 mt-[40%] md:mt-[8%] h-2/3 bg-black bg-opacity-80 py-5 mb-10">
        <AskGPTSearchBar
          searchText={searchText}
          handleAskGptSearch={handleAskGptSearch}
        />
        <AskGPTSuggestions
          isAskGptLoading={isAskGptLoading}
          gptSuggestedMovies={gptSuggestedMovies}
        />
      </div>
    </div>
  );
};

export default AskGPT;
