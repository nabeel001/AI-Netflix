import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "./../assets/logo.svg";
import userIcon from "./../assets/user-icon.jpg";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/store/appStore";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/store/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, name: displayName!, email: email! }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

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
