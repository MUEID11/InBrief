import { useState } from 'react';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <>
      <Link to="/" className="hover:text-neutral-700 transition-all duration-500">
        Home
      </Link>
      <Link to="/stories" className="hover:text-neutral-700 transition-all duration-500">
        Stories
      </Link>
      <Link to="/about" className="hover:text-neutral-700 transition-all duration-500">
        About
      </Link>
      <Link to="/signup" className="hover:text-neutral-700 transition-all duration-500">
        Sign Up
      </Link>
    </>
  );
  return (
    <nav className="bg-white  text-red-500 px-4 lg:px-10">
      <div className="container mx-auto flex justify-between items-center py-3 sm:py-5">
        {/* Logo */}
        <div>
          <Link to={'/'}>
            <img src={logo} alt=" Image Svg" className="w-36 sm:w-44" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        {/* <div className="sm:hidden">
          <button onClick={toggleMenu}>{isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}</button>
        </div> */}

        {/* Links */}
        <div className="hidden lg:flex space-x-3 sm:space-x-5 mr-0 text-red-600 text-base font-bold uppercase">{navLinks}</div>

        {/* Write Icon and Search Input */}
        <div className="flex gap-2 items-center justify-center">
          <div className="hidden sm:flex items-center">
            <FaRegPenToSquare className="text-lg sm:text-xl" />
            <h2 className="lg:mr-4 text-red-600 font-medium text-base">Write</h2>
          </div>

          {/* <div className="hidden sm:flex">
            <input type="text" placeholder="Search..." className="px-4 py-2 rounded-md text-gray-700  focus:ring-rose-300 focus:ring focus:outline-none border border-rose-300" />
          </div> */}

          <div className="relative">
            <img
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="w-[52px] h-[52px] rounded-full border p-[2px] border-red-500 cursor-pointer"
              src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              alt="Medium avatar"
            />
            <div
              id="dropdown"
              className={`absolute right-3 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
                isDropDownOpen ? 'opacity-0 cursor pointer-events-none select-none' : 'opacity-100'
              } transition-all duration-300`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <a className="group max-sm:hidden relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500" href="#">
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-red-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

            <span className="relative block border border-current bg-white px-8 py-3"> REGISTER </span>
          </a>

          {/* Hamburger Icon (for tablet view) */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>{isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}</button>
          </div>
        </div>
      </div>

      {/* Mobile Menu      === (Shown when the hamburger icon is clicked) */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pb-4 space-y-2 flex flex-col">
          <div className="pb-4 space-y-3 flex flex-col font-bold uppercase">{navLinks}</div>
          <div className="flex items-center py-2 sm:hidden">
            <FaRegPenToSquare className=" text-xl" />
            <h2 className="ml-2">Write</h2>
          </div>
          <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-md text-gray-700 focus:outline-none border border-gray-300 sm:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
