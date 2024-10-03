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
              className="bg-red-600 text-white px-4 py-2 rounded-r-sm hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 shadow-sm transition duration-300 ease-in-out">
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
          } transition-all duration-300`}>
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
              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg"
                href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Home</span>
              </a>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg"
                href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Dashboard</span>
              </a>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-all duration-500 transform rounded-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 hover:translate-x-2 hover:scale-105 hover:rounded-lg"
                href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Projects</span>
              </a>

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
