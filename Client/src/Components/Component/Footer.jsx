// import { FaFacebook, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import {
  FaDiscord,
  FaDribbble,
  FaFacebook,
  FaGithub,
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
                <a href="https://flowbite.com/" className="flex items-center">
                  <img src={logo} />
                </a>
                <p className="mt-4 text-lg font-medium text-neutral-300 max-w-80">
                  Craft narratives that ignites inspiration, knowledge and
                  entertainment
                </p>
                <div className="flex mt-4  sm:mt-5">
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-red-600  dark:hover:text-white"
                  >
                    <FaFacebook />
                    <span className="sr-only">Facebook page</span>
                  </a>
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-red-600  dark:hover:text-white ms-5"
                  >
                    <FaDiscord />
                    <span className="sr-only">Discord community</span>
                  </a>
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-red-600  dark:hover:text-white ms-5"
                  >
                    <FaTwitter />
                    <span className="sr-only">Twitter page</span>
                  </a>
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-red-600  dark:hover:text-white ms-5"
                  >
                    <FaGithub />
                    <span className="sr-only">GitHub account</span>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 lg:gap-16 sm:grid-cols-4 text-neutral-300">
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
                <div>
                  <h2 className="mb-6 text-lg font-bold  uppercase dark:text-white">
                    Resources
                  </h2>
                  <ul className=" dark: font-medium">
                    <li className="mb-4">
                      <a
                        href="https://flowbite.com/"
                        className="hover:underline"
                      >
                        Flowbite
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Tailwind CSS
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
                      <a
                        href="https://github.com/themesberg/flowbite"
                        className="hover:underline "
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Discord
                      </a>
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
            <div className="sm:flex sm:items-center sm:justify-between text-neutral-300">
              <span className="text-sm  sm:text-center dark:">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite™
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0 text-neutral-300">
                <a href="#" className="  dark:hover:text-white">
                  <FaFacebook />
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="  dark:hover:text-white ms-5">
                  <FaDiscord />
                  <span className="sr-only">Discord community</span>
                </a>
                <a href="#" className="  dark:hover:text-white ms-5">
                  <FaTwitter />
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="  dark:hover:text-white ms-5">
                  <FaGithub />
                  <span className="sr-only">GitHub account</span>
                </a>
                <a href="#" className="  dark:hover:text-white ms-5">
                  <FaDribbble />
                  <span className="sr-only">Dribbble account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
