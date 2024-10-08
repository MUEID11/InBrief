import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className=" text-center">
            <h1 className="my-8 text-2xl md:text-9xl font-extrabold ">
              Error 404
            </h1>
            <p className="text-3xl font-semibold md:text-5xl">
              Sorry, we couldn&apos;t find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600 text-xl">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <Link to="/">
             
              <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Back to Home
                </span>
                <span className="relative invisible">Back to Home</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
