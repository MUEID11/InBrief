import { useState, useEffect, useRef } from "react";
// import { FaRegPenToSquare } from 'react-icons/fa6';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import userThunk from "../../Features/thunks/userThunks";
import { Link, useNavigate } from "react-router-dom";
import { resetUser } from "../../Features/Authenticate/userSlice";

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
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${category}`);
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    dispatch(resetUser());
    navigate("/signin");
  };
  // Search end

  // Close the dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setIsDropDownOpen(false);
      }
      if (
        menuDropdownRef.current &&
        !menuDropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
      <Link
        to="/stories"
        className="hover:text-red-600 transition-all duration-600"
      >
        Stories
      </Link>
      <Link
        to="/about"
        className="hover:text-red-600 transition-all duration-600"
      >
        About
      </Link>
    </>
  );
  return (
    <nav className="bg-white border-b border-gray-200 w-full sticky top-0 z-10 min-h-[74px]">
      <div className=" flex justify-between items-center sm:py-4 px-4 min-h-[74px]">
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <img src={logo} alt=" Image Svg" className="w-28 sm:w-36" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        {/* <div className="sm:hidden">
          <button onClick={toggleMenu}>{isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}</button>
        </div> */}

        {/* Links */}
        {/* <div className="hidden lg:flex space-x-3 sm:space-x-5 mr-0 text-sm font-semibold">
          {navLinks}
        </div> */}
        {/* Search bar */}
        {/* Write Icon and Search Input */}
        <div className="flex justify-center items-center">
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
              className="bg-red-600 text-white px-4 py-2 rounded-r-sm hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 shadow-sm transition duration-300 ease-in-out"
            >
              Search
            </button>
          </form>
        </div>

        <div className="flex gap-2 items-center justify-center">
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
                !isDropDownOpen
                  ? "opacity-0 pointer-events-none select-none"
                  : "opacity-100"
              } transition-all duration-300`}
            >
              <ul className="py-2 text-sm text-gray-600 dark:text-gray-200">
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Profile
                  </Link>
                </li>
                {/* <li>
                  <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Dashboard
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleSignOut}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link
            className="group max-sm:hidden relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-600"
            to="/signup"
          >
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-red-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

            <span className="relative block border border-current bg-white px-4 py-2">
              {" "}
              SIGN UP{" "}
            </span>
          </Link>

          {/* Hamburger Icon (for tablet view) */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu      === (Shown when the hamburger icon is clicked) */}
      <div className={`relative lg:hidden `}>
        {/* <div className="px-4 pb-4 space-y-2 flex flex-col">
          <div className="pb-4 space-y-3 flex flex-col font-bold uppercase">{navLinks}</div>
          <div className="flex items-center py-2 sm:hidden">
            <FaRegPenToSquare className=" text-xl" />
            <h2 className="ml-2">Write</h2>
          </div>
          <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-md text-gray-600 focus:outline-none border border-gray-300 sm:hidden" />
        </div> */}
        <div
          ref={menuDropdownRef}
          id="dropdown"
          className={`absolute right-3 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-600 ${
            !isOpen
              ? "opacity-0 pointer-events-none select-none"
              : "opacity-100"
          } transition-all duration-300`}
        >
          <ul className="py-2 text-sm text-gray-600 dark:text-gray-200">
            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/signout"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
