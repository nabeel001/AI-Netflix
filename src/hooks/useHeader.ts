import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useAppDispatch, useAppSelector } from "../utils/store/appStore";
import { addUser, removeUser, User } from "../utils/store/userSlice";
import { toggleAskGptView } from "../utils/store/gptSlice";
import { toast } from "react-toastify";
import { ERROR_MESSAGE } from "../utils/constants";

interface useHeaderReturnType {
  user: User | null;
  showAskGpt: boolean;
  handleSignOut: () => Promise<void>;
  handleAskGPTClick: () => void;
}

const useHeader = (): useHeaderReturnType => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const showAskGpt = useAppSelector((state) => state.gpt.showAskGpt);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        const userIdToken = await user.getIdToken();
        dispatch(
          addUser({
            uid: uid,
            name: displayName!,
            email: email!,
            idToken: userIdToken,
          })
        );
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
      toast.dismiss();
      toast.error(ERROR_MESSAGE);
    }
  };

  const handleAskGPTClick = () => {
    dispatch(toggleAskGptView());
  };

  return {
    user,
    showAskGpt,
    handleSignOut,
    handleAskGPTClick,
  };
};

export default useHeader;
