import { useState, useEffect, useRef } from 'react';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userThunk from '../../Features/thunks/userThunks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const userDropdownRef = useRef(null);
  const menuDropdownRef = useRef(null);
  const user = useSelector((state)=> state?.user);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(userThunk())
  },[dispatch])
  console.log(user)
  // Close the dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if ((userDropdownRef.current || menuDropdownRef.current) && (!userDropdownRef.current.contains(event.target) || !menuDropdownRef.current.contains(event.target))) {
        setIsDropDownOpen(false);
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
      <Link to="/" className="hover:text-neutral-600 transition-all duration-600">
        Home
      </Link>
      <Link to="/stories" className="hover:text-neutral-600 transition-all duration-600">
        Stories
      </Link>
      <Link to="/about" className="hover:text-neutral-600 transition-all duration-600">
        About
      </Link>
    </>
  );
  return (
    <nav className="bg-white  text-red-600 px-4 lg:px-10">
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
            <input type="text" placeholder="Search..." className="px-4 py-2 rounded-md text-gray-600  focus:ring-rose-300 focus:ring focus:outline-none border border-rose-300" />
          </div> */}

          <div className="relative">
            <div onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
              {isDropDownOpen ? (
                <img
                  className="relative size-12 hover:scale-105 transition ease-in-out duration-200 rounded-full border-2 p-[2px]  border-red-600 cursor-pointer"
                  src={user.user?.imageUrl}
                  alt="Medium avatar"
                />
              ) : (
                <div>
                  <img
                    className="relative size-12 hover:scale-105 transition ease-in-out duration-200 rounded-full border-2 p-[2px]  border-red-600 cursor-pointer"
                    src={user.user?.imageUrl}
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
                  <Link to='/profile' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to='/dashboard' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to='/settings' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link to='/signout' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link className="group max-sm:hidden relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-600" to="/signup">
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-red-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

            <span className="relative block border border-current bg-white px-6 py-2"> SIGN UP </span>
          </Link>

          {/* Hamburger Icon (for tablet view) */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>{isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}</button>
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
            !isOpen ? 'opacity-0 pointer-events-none select-none' : 'opacity-100'
          } transition-all duration-300`}>
          <ul className="py-2 text-sm text-gray-600 dark:text-gray-200">
          <li>
                  <Link to='/profile' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to='/dashboard' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to='/settings' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link to='/signout' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
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
