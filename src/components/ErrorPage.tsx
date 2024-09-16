import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="fixed flex justify-center items-center h-full w-full bg-black">
      <div className="flex flex-col justify-center items-center border-2 border-red-600 rounded-lg p-4 m-10">
        <ExclamationTriangleIcon className="w-1/5 h-1/5 text-white" />
        <div className="text-white text-2xl text-center">
          Oops..!! The Page you are looking for does not exist.
          <br />
          <Link to={"/"} className="text-red-600 text-xl font-bold underline">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
