// import { FaFacebook, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import {
  FaDiscord,
  FaTwitter,
} from "react-icons/fa6";
import logo from "./../../assets/whitelogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="p-4 bg-secondary-black">
        <footer className="text">
          <div className="w-full p-12 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://inbrief-3d9ce.web.app/" className="flex items-center">
                  <img src={logo} />
                </a>
                <p className="mt-4 text-lg font-medium text-neutral-300 max-w-96">
                  Craft narratives that ignites inspiration, knowledge and
                  entertainment
                </p>
                <div className="flex mt-4  sm:mt-5">
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-red-600  dark:hover:text-white mr-4"
                  >
                    <FaDiscord />
                    <span className="sr-only">Discord community</span>
                  </a>
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-red-600  dark:hover:text-white"
                  >
                    <FaTwitter />
                    <span className="sr-only">Twitter page</span>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 lg:gap-16 sm:grid-cols-3 text-neutral-300">
                <div>
                  <h2 className="mb-6 text-lg font-bold  uppercase dark:text-white">
                   Help Center
                  </h2>
                  <ul className=" dark: font-medium">
                    <li className="mb-4">
                      <a
                        href="https://x.com/Meghla1505"
                        className="hover:underline "
                      >
                       twitterX
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-lg font-bold  uppercase dark:text-white">
                    Follow us
                  </h2>
                  <ul className=" dark: font-medium">
                    <li className="mb-4">
                      <Link
                        to={'/aboutus'}
                        className="hover:underline "
                      >
                       About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-lg font-bold  uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul className=" dark: font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <Link to="tearm" className="hover:underline">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-4 border-gray-200" />
            <div className="flex items-center justify-between text-neutral-300">
              <span className="text-sm  sm:text-center mx-auto">
                © 2023{" "}
                <a href="https://inbrief-3d9ce.web.app/" className="hover:underline">
                  Inbrief™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
