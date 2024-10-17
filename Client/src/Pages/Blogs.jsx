import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="p-8 bg-background dark:bg-primary">
      <h2 className="text-3xl font-bold">Our recent blogs</h2>
      <p className=" mb-6">
        Surround yourself with the community and resources to help bring your
        vision to life.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
        {/* Card 1 */}
        <div className="relative w-full h-60 rounded-sm overflow-hidden">
          <img
            src="https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/media/2024/08/19/Sheikh-Hasina-praying-38b34e20154f5aeb1dceca187c199bcc.jpg?jadewits_media_id=26631"
            alt="Financial Freedom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-1 px-1 text-white">
            <h3 className="text-lg font-bold">
              Empowering financial freedom & solutions
            </h3>
            <div className="flex justify-end p-1">
              <button className="mt-1 flex items-center justify-center w-10 h-10 bg-white text-black rounded-full">
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="relative w-full h-60 rounded-sm overflow-hidden">
          <img
            src="https://t4.ftcdn.net/jpg/06/63/58/87/360_F_663588701_rMLLyNbMO3MPpLTaSHMjS068RYXS9wfC.jpg"
            alt="Financial Freedom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-1 px-1 text-white">
            <h3 className="text-lg font-bold">
              Empowering financial freedom & solutions
            </h3>
            <div className="flex justify-end p-1">
              <button className="mt-1 flex items-center justify-center w-10 h-10 bg-white text-black rounded-full">
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="relative w-full h-60 rounded-sm overflow-hidden">
          <img
            src="https://www.brac.net/images/news/2024/Bangladesh-flood-emergency.jpg"
            alt="Financial Freedom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-1 px-1 text-white">
            <h3 className="text-lg font-bold">
              Empowering financial freedom & solutions
            </h3>
            <div className="flex justify-end p-1">
              <button className="mt-1 flex items-center justify-center w-10 h-10 bg-white text-black rounded-full">
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="relative w-full h-60 rounded-sm overflow-hidden">
          <img
            src="https://static.timesofisrael.com/www/uploads/2024/10/AFP__20241016__36K62VB__v2__HighRes__TopshotLebanonIsraelPalestinianConflict-640x400.jpg"
            alt="Financial Freedom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-1 px-1 text-white">
            <h3 className="text-lg font-bold">
              Empowering financial freedom & solutions
            </h3>
            <div className="flex justify-end p-1">
              <button className="mt-1 flex items-center justify-center w-10 h-10 bg-white text-black rounded-full">
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="relative w-full h-60 rounded-sm overflow-hidden">
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQHVmqgiBrBgdA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699503751096?e=2147483647&v=beta&t=TmaEWHULaftVXzRKTj6otGnRoQkCq2zuNkwR5A8CC7U"
            alt="Financial Freedom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-1 px-1 text-white">
            <h3 className="text-lg font-bold">
              Empowering financial freedom & solutions
            </h3>
            <div className="flex justify-end p-1">
              <button className="mt-1 flex items-center justify-center w-10 h-10 bg-white text-black rounded-full">
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
