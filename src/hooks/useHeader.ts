import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useAppDispatch, useAppSelector } from "../utils/store/appStore";
import { addUser, removeUser, User } from "../utils/store/userSlice";

interface useHeaderReturnType {
  user: User | null;
  handleSignOut: () => Promise<void>;
}

const useHeader = (): useHeaderReturnType => {
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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      navigate("/error");
    }
  };

  return {
    user,
    handleSignOut,
  };
};

export default useHeader;
