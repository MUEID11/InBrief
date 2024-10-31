import { Link, useLocation } from "react-router-dom";
import { IoMdBook } from "react-icons/io";
import { SlPeople } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineFeed, MdOutlineForum, MdOutlineSpaceDashboard } from "react-icons/md";
import { TbBookmarks } from "react-icons/tb";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { PiBooks } from "react-icons/pi";
import Weather from "./Weather";

const Asidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="sticky top-[85px] max-w-60 p-4 flex flex-col md:max-w-52 h-[calc(100vh-70px)] overflow-y-auto bg-gray-100 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 max-lg:hidden overflow-hidden no-scrollbar">
      <div className="flex flex-col justify-between flex-1 mt-4">
        <nav className="-mx-4 space-y-3">
          {/* Home */}
          <Link
            to="/"
            className={`flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg ${
              pathname === "/" && "bg-gray-200 text-gray-700"
            }`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="mx-2 text-sm font-semibold">Home</span>
          </Link>
          {/* My Feed */}
          <Link
            to={"/my-feed"}
            className={`flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg ${
              pathname === "/my-feed" && "bg-gray-200 text-gray-700"
            }`}>
            <BsNewspaper />
            <span className="mx-2 text-sm font-semibold">My Feed</span>
          </Link>
          {/* Magazine*/}
          <Link
            to={"/magazine"}
            className={`flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg ${
              pathname === "/magazine" && "bg-gray-200 text-gray-700"
            }`}>
            <MdOutlineFeed className="text-[19px]" />
            <span className="mx-2 text-sm font-semibold">All Magazines</span>
          </Link>

          <Link
            to={"/my-magazines"}
            className={`flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg ${
              pathname === "/my-magazines" && "bg-gray-200 text-gray-700"
            }`}>
            <MdOutlineFeed className="text-[19px]" />
            <span className="mx-2 text-sm font-semibold">My Magazines</span>
          </Link>

          {/* About us */}
          <Link
            to="/about"
            className={`flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg ${
              pathname === "/about" && "bg-gray-200 text-gray-700"
            }`}>
            <SlPeople />
            <span className="mx-2 text-sm font-semibold">About Us</span>
          </Link>
          {/* Contact us */}
          <Link
            to="/contact"
            className={`flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg ${
              pathname === "/contact" && "bg-gray-200 text-gray-700"
            }`}>
            <FiPhoneCall />
            <span className="mx-2 text-sm font-semibold">Contact Us </span>
          </Link>

          <Link
            to="/forum"
            className={`flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg ${
              pathname === "/forum" && "bg-gray-200 text-gray-700"
            }`}>
            <MdOutlineForum />
            <span className="mx-2 text-sm font-semibold">Forum</span>
          </Link>

          <Link
            to={"/submit-article"}
            className={`flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg ${
              pathname === "/submit-article" && "bg-gray-200 text-gray-700"
            }`}>
            <AiOutlineFileAdd />
            <span className="mx-2 text-sm font-semibold">Add Article</span>
          </Link>
          <Link
            to={"/featured-books"}
            className={`flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg ${
              pathname === "/featured-books" && "bg-gray-200 text-gray-700"
            }`}>
            <PiBooks />
            <span className="mx-2 text-sm font-semibold">Featured Books</span>
          </Link>
        </nav>

        <div className="mt-6">
          <Weather />
        </div>
      </div>
    </div>
  );
};

export default Asidebar;
