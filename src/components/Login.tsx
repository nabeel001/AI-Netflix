import { useRef, useState } from "react";
import Header from "./Header";
import { validateEmailAndPassword } from "../utils/validate";
import bg_image from "./../assets/bg-image.jpg";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>();

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const toggleFormType = () => {
    setSignInForm(!isSignInForm);
  };

  const handleFormSubmit = () => {
    const errorMessage = validateEmailAndPassword(
      email.current?.value,
      password.current?.value
    );
    setErrorMessage(errorMessage);
  };

  return (
    <div>
      <Header />
      <img src={bg_image} alt="bg-image" className="absolute" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-1/4 bg-black my-36 mx-auto left-0 right-0 p-10 rounded-lg text-white opacity-85"
      >
        <h1 className="font-bold text-3xl my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 my-2 w-full rounded-lg bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 my-2 w-full rounded-lg bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full rounded-lg bg-gray-800"
        />
        {errorMessage && (
          <p className="text-red-600 text-xs whitespace-pre-line">
            {errorMessage}
          </p>
        )}
        <button
          onClick={handleFormSubmit}
          className="p-3 my-2 w-full rounded-lg bg-red-600"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-2">
          {isSignInForm ? "New to Netflix? " : "Already Registered. "}
          <span
            onClick={toggleFormType}
            className="font-bold cursor-pointer hover:underline"
          >
            {isSignInForm ? "Sign Up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
