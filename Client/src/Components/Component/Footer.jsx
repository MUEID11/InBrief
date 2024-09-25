// import { FaFacebook, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FaDiscord, FaDribbble, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";
import logo from "./../../assets/whitelogo.png";

const Footer = () => {
  return (
    <>
      <div className="p-6 mt-20 bg-gray-600">
        <footer className="text">
          <div className="w-full container mx-auto py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                  <img src={logo} />
                </a>
                <p className="mt-4 text-lg font-medium text-neutral-200 max-w-80">
                  Craft narratives that ignites inspiration, knowledge and
                  entertainment
                </p>
                <div className="flex mt-4  sm:mt-5">
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-red-600 hover:text-gray-100 dark:hover:text-white"
                  >
                    <FaFacebook />
                    <span className="sr-only">Facebook page</span>
                  </a>
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-red-600 hover:text-gray-100 dark:hover:text-white ms-5"
                  >
                   <FaDiscord />
                    <span className="sr-only">Discord community</span>
                  </a>
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-red-600 hover:text-gray-100 dark:hover:text-white ms-5"
                  >
                    <FaTwitter />
                    <span className="sr-only">Twitter page</span>
                  </a>
                  <a
                    href="#"
                    className="text-white p-2 rounded-full bg-red-600 hover:text-gray-100 dark:hover:text-white ms-5"
                  >
                    <FaGithub />
                    <span className="sr-only">GitHub account</span>
                  </a>
      
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 lg:gap-16 sm:grid-cols-4">
                <div>
                  <h2 className="mb-6 text-lg font-bold text-gray-100 uppercase dark:text-white">
                    Resources
                  </h2>
                  <ul className="text-gray-100 dark:text-gray-100 font-medium">
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
                  <h2 className="mb-6 text-lg font-bold text-gray-100 uppercase dark:text-white">
                    Follow us
                  </h2>
                  <ul className="text-gray-100 dark:text-gray-100 font-medium">
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
                  <h2 className="mb-6 text-lg font-bold text-gray-100 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul className="text-gray-100 dark:text-gray-100 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-lg font-bold text-gray-100 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul className="text-gray-100 dark:text-gray-100 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-lg font-bold text-gray-100 uppercase dark:text-white">
                    Resources
                  </h2>
                  <ul className="text-gray-100 dark:text-gray-100 font-medium">
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
                  <h2 className="mb-6 text-lg font-bold text-gray-100 uppercase dark:text-white">
                    Follow us
                  </h2>
                  <ul className="text-gray-100 dark:text-gray-100 font-medium">
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
                  <h2 className="mb-6 text-lg font-bold text-gray-100 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul className="text-gray-100 dark:text-gray-100 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-lg font-bold text-gray-100 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul className="text-gray-100 dark:text-gray-100 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-100 sm:text-center dark:text-gray-100">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite™
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a
                  href="#"
                  className="text-gray-100 hover:text-gray-100 dark:hover:text-white"
                >
                  <FaFacebook />
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:text-gray-100 dark:hover:text-white ms-5"
                >
                  <FaDiscord />
                  <span className="sr-only">Discord community</span>
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:text-gray-100 dark:hover:text-white ms-5"
                >
                  <FaTwitter />
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:text-gray-100 dark:hover:text-white ms-5"
                >
                  <FaGithub />
                  <span className="sr-only">GitHub account</span>
                </a>
                <a
                  href="#"
                  className="text-gray-100 hover:text-gray-100 dark:hover:text-white ms-5"
                >
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
