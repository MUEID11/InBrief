/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
// import { FaRegPenToSquare } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './../../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import userThunk from '../../Features/thunks/userThunks';
import { Link, useNavigate } from 'react-router-dom';
import { resetUser } from '../../Features/Authenticate/userSlice';
import { RiMenu3Line } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import { IoMdBook } from 'react-icons/io';
import { SlPeople } from 'react-icons/sl';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const userDropdownRef = useRef(null);
  const menuDropdownRef = useRef(null);
  const { user } = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userThunk());
  }, [dispatch]);
  console.log(user);

  // Search start
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${category}`);
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    dispatch(resetUser());
    navigate('/signin');
  };
  // Search end

  // Close the dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
      if (menuDropdownRef.current && !menuDropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userDropdownRef]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <>
      <Link to="/" className="hover:text-red-600 transition-all duration-600">
        Home
      </Link>
      <Link to="/stories" className="hover:text-red-600 transition-all duration-600">
        Stories
      </Link>
      <Link to="/about" className="hover:text-red-600 transition-all duration-600">
        About
      </Link>
    </>
  );
  return (
    <nav className="bg-white border-b border-gray-200 w-full sticky top-0 z-10 min-h-[74px]">
      <div className=" flex justify-between items-center sm:py-4 px-4 min-h-[74px]">
        {/* Logo */}
        <div>
          <Link to={'/'}>
            <img src={logo} alt=" Image Svg" className="w-28 sm:w-36" />
          </Link>
        </div>

        {/* Write Icon and Search Input */}
        <div className="flex justify-center max-sm:hidden items-center">
          <form onSubmit={handleSearch} className="flex w-full max-w-sm">
            <input
              type="text"
              value={category}
              className="flex-1 border border-gray-200 rounded-l-sm py-2 px-4 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none text-gray-700 placeholder-gray-400 placeholder-shown:font-light"
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Search by category"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 text-lg rounded-sm focus:ring-red-400 focus:outline-none">
              Search
            </button>
          </form>
        </div>

        <div className="flex gap-2 items-center justify-center">
          {user?.email ? (
            <div className="relative">
              <div onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                {isDropDownOpen ? (
                  <img
                    className="relative size-10 hover:scale-105 transition ease-in-out duration-200 rounded-full border-2 p-[2px]  border-red-600 cursor-pointer"
                    src={user?.imageUrl}
                    alt="Medium avatar"
                  />
                ) : (
                  <div>
                    <img
                      className="relative size-10 hover:scale-105 transition ease-in-out duration-200 rounded-full border-2 p-[2px]  border-red-600 cursor-pointer"
                      src={user?.imageUrl}
                      alt="Medium avatar"
                    />
                  </div>
                )}
              </div>
              <div
                ref={userDropdownRef}
                id="dropdown"
                className={`absolute right-3 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-600 ${
                  !isDropDownOpen ? 'opacity-0 pointer-events-none select-none' : 'opacity-100'
                } transition-all duration-300`}>
                <ul className="py-2 text-sm text-gray-600 dark:text-gray-200">
                  <li>
                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleSignOut} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}

          {!user?.email ? (
            <Link className="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-600" to="/signup">
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-red-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

              <span className="relative block border border-current bg-white px-4 py-2"> SIGN UP </span>
            </Link>
          ) : (
            <Link className="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-600">
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-red-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

              <span className="relative block border border-current bg-white px-4 py-2"> LOGOUT </span>
            </Link>
          )}

          {/* Hamburger Icon (for tablet view) */}
          <div className="lg:hidden pt-[6px]">
            <button onClick={toggleMenu}>{isOpen ? <RxCross1 className="text-3xl" /> : <RiMenu3Line className="text-3xl" />}</button>
          </div>
        </div>
      </div>

      {/* Mobile Menu      === (Shown when the hamburger icon is clicked) */}
      <div className={`relative lg:hidden `}>
        <div
          ref={menuDropdownRef}
          id="dropdown"
          className={`absolute  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full h-screen dark:bg-gray-600 ${
            !isOpen ? '-left-full' : 'left-0'
          } transition-all duration-300 overflow-hidden`}>
          <div className="flex flex-col justify-between flex-1 mt-4 h-[calc(100vh-95px)]">
            <nav className=" space-y-3">
              <form onSubmit={handleSearch} className="flex w-full max-w-sm px-3">
                <input
                  type="text"
                  value={category}
                  className="flex-1 border border-gray-200 rounded-l-sm py-2 px-4 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none text-gray-700 placeholder-gray-400 placeholder-shown:font-light"
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Search by category"
                />
                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded-r-sm hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 shadow-sm transition duration-300 ease-in-out">
                  Search
                </button>
              </form>
              {/* Home */}
          <Link to="/" className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg"
            >
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
          <Link to="/stories" className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg"
            >
           
            <IoMdBook />
            <span className="mx-2 text-sm font-medium">Stories</span>
          </Link>
           {/* About us */}
          <Link to="/about" className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg"
            >
            
           <SlPeople />
            <span className="mx-2 text-sm font-medium">About Us</span>
          </Link>
           {/* Contact us */}
          <Link to="/contact" className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg"
            >
            
            <FiPhoneCall />
            <span className="mx-2 text-sm font-medium">Contact Us </span>
          </Link>
           {/* Dashboard */}
          <Link to="/dashboard" className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg"
            >
            
            <MdOutlineSpaceDashboard />
            <span className="mx-2 text-sm font-medium">Dashboard</span>
          </Link>
            </nav>

            <div className="mt-6 pl-2">
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
      </div>
    </nav>
  );
};

export default Navbar;