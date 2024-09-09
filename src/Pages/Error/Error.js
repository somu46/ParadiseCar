

import { Link } from "react-router-dom";



const Error = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="text-6xl font-bold text-inherit">404</div>
        <div className="text-xl text-inherit mt-4">
          Oops! Something went wrong.
        </div>
        <div className="text-md text-inherit mt-4">
          Sorry ! Page Not Found.
        </div>
        <Link
          to="/"
          className="mt-8 border-2 border-black shadow-lg border-white-600 p-2 rounded-md font-semibold text-inherit hover:border-yellow-500 hover:border-2 transition-all duration-300 ease-in-out hover:tracking-wider"
        >
          Back to Home &rarr;
        </Link>
      </div>
    </>
  );
};


export default Error;