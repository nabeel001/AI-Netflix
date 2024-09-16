import logo from "./../assets/logo.svg";
import userIcon from "./../assets/user-icon.jpg";
import useHeader from "../hooks/useHeader";
import {
  ArrowLeftStartOnRectangleIcon,
  ChatBubbleLeftEllipsisIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
} from "@heroicons/react/16/solid";

const Header = () => {
  const { user, showAskGpt, handleSignOut, handleAskGPTClick } = useHeader();

  return (
    <div className="absolute py-3 md:pl-12 md:pr-6 w-full bg-gradient-to-b from-black z-10 flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between">
      <img src={logo} alt="logo" className="w-40 mx-auto md:mx-0" />
      {user && (
        <div className="flex space-x-3 items-center mx-auto md:mx-0">
          <button
            className="bg-purple-600 text-white px-2 rounded-lg h-8 mr-2 hover:bg-opacity-80"
            onClick={handleAskGPTClick}
          >
            <div className="flex items-center">
              {showAskGpt ? (
                <MagnifyingGlassIcon className="w-6 h-6" />
              ) : (
                <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
              )}
              <p className="pl-1">{showAskGpt ? "Browse" : "Ask GPT"}</p>
              {!showAskGpt && (
                <SparklesIcon className="w-4 h-4 -scale-x-100 relative -top-1" />
              )}
            </div>
          </button>
          <img src={userIcon} alt="user-icon" className="w-12 h-12 mr-1 mt-1" />
          <div className="flex flex-col space-y-1">
            <span className="text-white font-bold">Hello, {user.name}</span>
            <button
              className="bg-red-600 text-sm font-semibold text-white p-1 px-2 rounded-lg hover:bg-opacity-80"
              onClick={handleSignOut}
            >
              <div className="flex items-center">
                <ArrowLeftStartOnRectangleIcon className="w-4 h-4" />
                <p className="pl-1">Sign Out</p>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
