import { PaperAirplaneIcon } from "@heroicons/react/16/solid";
import { FormEvent } from "react";

interface AskGPTSearchBarPropsType {
  searchText: React.RefObject<HTMLInputElement>;
  handleAskGptSearch: (e: FormEvent) => Promise<void>;
}

const AskGPTSearchBar = (props: AskGPTSearchBarPropsType) => {
  const { searchText, handleAskGptSearch } = props;
  return (
    <div className="flex justify-center">
      <form
        className="md:w-3/5 grid grid-cols-12 mb-5"
        onSubmit={handleAskGptSearch}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What would you like to watch today?"
          className="p-4 m-2 mr-0 md:m-4 h-12 col-span-10 rounded-full text-white bg-gray-700 border-2 border-gray-700 focus:border-red-600 focus:border-2 focus:border-solid focus:outline-none"
        />
        <button
          type="submit"
          className="col-span-2 h-12 w-12 m-2 md:w-auto md:m-4 ml-2 md:mx-1 bg-red-600 text-xl text-white rounded-xl hover:bg-opacity-95"
        >
          <div className="flex justify-center items-center">
            <PaperAirplaneIcon className="w-7 h-7 md:h-6 md:w-6" />
            <p className="hidden lg:inline pl-1">Ask</p>
          </div>
        </button>
      </form>
    </div>
  );
};

export default AskGPTSearchBar;
