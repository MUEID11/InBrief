import { Link } from 'react-router-dom';
import { IoMdBook } from 'react-icons/io';
import { SlPeople } from 'react-icons/sl';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
const Asidebar = () => {
  return (
    <div className="sticky top-16 w-64 p-4 flex flex-col md:w-64 h-[calc(100vh-70px)] overflow-y-auto bg-gray-100 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 max-lg:hidden overflow-hidden">
      <div className="flex flex-col justify-between flex-1 mt-4">
        <nav className="-mx-4 space-y-3">
          {/* Home */}
          <Link
            to="/"
            className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="mx-2 text-sm font-medium">Home</span>
          </Link>
          {/* Stories */}
          <Link
            to="/stories"
            className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg> */}
            <IoMdBook />
            <span className="mx-2 text-sm font-medium">Stories</span>
          </Link>
          {/* About us */}
          <Link
            to="/about"
            className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg">
            <SlPeople />
            <span className="mx-2 text-sm font-medium">About Us</span>
          </Link>
          {/* Contact us */}
          <Link
            to="/contact"
            className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg">
            <FiPhoneCall />
            <span className="mx-2 text-sm font-medium">Contact Us </span>
          </Link>
          {/* Dashboard */}
          <Link
            to="/dashboard"
            className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg">
            <MdOutlineSpaceDashboard />
            <span className="mx-2 text-sm font-medium">Dashboard</span>
          </Link>

          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg"
            href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
              />
            </svg>
            <span className="mx-2 text-sm font-medium">Tasks</span>
          </a>

          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg"
            href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
            <span className="mx-2 text-sm font-medium">Reporting</span>
          </a>

          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg"
            href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.594-.766-6.363-2.06 1.547-1.284 2.777-2.645 3.378-3.87a9.376 9.376 0 00.681 1.333c1.013 1.31 2.585 2.122 4.493 2.122 3.174 0 5.74-2.098 6.55-4.977 0 .001 0 .001.001 0"
              />
            </svg>
            <span className="mx-2 text-sm font-medium">Teams</span>
          </a>

          <Link
            to={'/bookmarks'}
            className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg"
            href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.594-.766-6.363-2.06 1.547-1.284 2.777-2.645 3.378-3.87a9.376 9.376 0 00.681 1.333c1.013 1.31 2.585 2.122 4.493 2.122 3.174 0 5.74-2.098 6.55-4.977 0 .001 0 .001.001 0"
              />
            </svg>
            <span className="mx-2 text-sm font-medium">Bookmarks</span>
          </Link>
        </nav>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Active Posts</h2>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center p-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg">
              <span className="text-sm">Post Title 1</span>
            </li>
            {/* <li className="flex items-center p-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg">
                            <span className="text-sm">Post Title 2</span>
                        </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Asidebar;
