import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState, useRef, MutableRefObject } from "react";
import { auth } from "../utils/firebase";
import { useAppDispatch } from "../utils/store/appStore";
import { addUser } from "../utils/store/userSlice";
import { validateEmailAndPassword } from "../utils/validate";

interface UseLoginReturnType {
  name: MutableRefObject<HTMLInputElement | null>;
  emailId: MutableRefObject<HTMLInputElement | null>;
  password: MutableRefObject<HTMLInputElement | null>;
  isSignInForm: boolean;
  errorMessage: string | null | undefined;
  toggleFormType: () => void;
  handleFormSubmit: () => Promise<void>;
}

const useLogin = (): UseLoginReturnType => {
  const [isSignInForm, setSignInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const dispatch = useAppDispatch();

  const name = useRef<HTMLInputElement>(null);
  const emailId = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const toggleFormType = () => {
    setSignInForm(!isSignInForm);
  };

  const handleFormSubmit = async () => {
    const errorMessage = validateEmailAndPassword(
      emailId.current?.value,
      password.current?.value
    );

    if (errorMessage) {
      setErrorMessage(errorMessage);
    } else {
      if (isSignInForm) {
        try {
          await signInWithEmailAndPassword(
            auth,
            emailId.current!.value,
            password.current!.value
          );
        } catch (error: unknown) {
          setErrorMessage((error as Error).message);
        }
      } else {
        if (!name.current?.value) {
          setErrorMessage("Enter a Valid Name!");
          return;
        }
        try {
          const { user } = await createUserWithEmailAndPassword(
            auth,
            emailId.current!.value,
            password.current!.value
          );
          await updateProfile(user, { displayName: name.current?.value });
          const { uid, email, displayName } = auth.currentUser!;
          const userIdToken = await auth.currentUser!.getIdToken();
          dispatch(
            addUser({
              uid: uid,
              name: displayName!,
              email: email!,
              idToken: userIdToken,
            })
          );
        } catch (error: unknown) {
          setErrorMessage((error as Error).message);
        }
      }
    }
  };

  return {
    name,
    emailId,
    password,
    isSignInForm,
    errorMessage,
    toggleFormType,
    handleFormSubmit,
  };
};

export default useLogin;
