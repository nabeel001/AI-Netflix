import logo from "./../assets/logo.svg";
import userIcon from "./../assets/user-icon.jpg";
import useHeader from "../hooks/useHeader";

const Header = () => {
  const { user, handleSignOut } = useHeader();

  return (
    <div className="absolute py-3 px-10 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={logo} alt="logo" className="w-40" />
      {user && (
        <div className="flex space-x-2">
          <img src={userIcon} alt="user-icon" className="w-12 h-12 mr-1 mt-1" />
          <div className="flex flex-col space-y-1">
            <span className="text-white font-bold">Hello, {user.name}</span>
            <button
              className="bg-red-600 text-sm font-semibold text-white p-1 px-2 rounded-lg"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
