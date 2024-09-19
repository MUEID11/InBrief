import { useState } from 'react';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa';
import MyImageSvg from '../assets/digital-news.gif';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navLinks = (
    <>
      <Link to="/" className="hover:text-gray-400">
        Home
      </Link>
      <Link to="/" className="hover:text-gray-400">
        Stories
      </Link>
      <Link to="/about" className="hover:text-gray-400">
        About
      </Link>
      <Link to="/signup" className="hover:text-gray-400">
        Sign Up
      </Link>
    </>
  );
  return (
    <nav className="bg-white  text-violet-800 px-4 sm:px-10">
      <div className="container mx-auto flex justify-between items-center py-3 sm:py-5">
        {/* Logo */}
        <div className="flex text-sm  sm:text-2xl  font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          <img src={MyImageSvg} alt=" Image Svg" className="w-[25px]  rounded-lg " />

          <a href="/">
            In<span className="text-2xl">Brief</span>
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>{isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}</button>
        </div>

        {/* Links */}
        <div className="hidden  sm:flex space-x-3 sm:space-x-5 mr-0 sm:mr-40  bg-gradient-to-r from-purple-800 via-pink-700 to-blue-800 bg-clip-text text-transparent">
          {navLinks}
        </div>

        {/* Write Icon and Search Input */}
        <div className="hidden sm:flex items-center">
          <FaRegPenToSquare className="text-lg sm:text-xl" />
          <h2 className="ml-2">Write</h2>
        </div>

        <div className="hidden sm:flex">
          <input type="text" placeholder="Search..." className="px-4 py-2 rounded-md text-gray-700 focus:outline-none border border-gray-300" />
        </div>
      </div>

      {/* Mobile Menu      === (Shown when the hamburger icon is clicked) */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pb-4 space-y-2">
          {navLinks}
          <div className="flex items-center py-2">
            <FaRegPenToSquare className=" text-xl" />
            <h2 className="ml-2">Write</h2>
          </div>
          <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-md text-gray-700 focus:outline-none border border-gray-300" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
