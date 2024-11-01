import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MustRead = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="my-2 p-2 container mx-auto mt-4 sm:mt-12 max-sm:px-2">
      {/* Must read title */}
      <div className="flex justify-start items-center rounded-sm">
        <h2 className="text-2xl md:text-3xl font-inter font-semibold  ">
          Must read
        </h2>
      </div>
      {/* must read cards */}
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="my-6 grid grid-cols-1  lg:grid-cols-3 gap-6"
      >
        {/* 1st part */}
        <a href="https://example.com/news/ai-breakthrough">
          <div className="">
            <img
              src="https://www.mushroomnetworks.com/wp-content/uploads/2023/12/ai-in-networking.jpg"
              className="w-full rounded-sm"
              alt=""
            />

            <div className="flex gap-2 text-sm my-2 text-gray-600 font-medium">
              <button className="bg-red-600 text-white rounded-full size-6   text-[9px]">
                TD
              </button>
              <p>Tech Daily.</p>
              <p>10 hours ago</p>
            </div>

            <h3 className="text-xl font-semibold font-inter">
              New Technology Revolutionizes Artificial Intelligence
            </h3>
            <p className="text-sm mt-1 text-gray-600 font-medium">
              Tech Daily -
            </p>
            <p className="text-[13px] mb-1 text-gray-600 font-medium">
              A breakthrough in artificial intelligence promises to reshape
              industries worldwide, offering faster and more....
            </p>
            <div className="flex gap-2 text-sm my-2 text-gray-600 font-medium">
              <p className="text-red-600 text-sm">Technology.</p>

              <p>8 min read</p>
            </div>
          </div>
        </a>
        {/* 2nd part */}
        <a href="https://www.unocha.org/news/todays-top-news-lebanon-occupied-palestinian-territory-ukraine-west-and-central-africa-floods">
          <div className="bg-gray-800 shadow-xl relative md:min-h-[500px] rounded-sm">
            <img
              className="absolute  inset-0 w-full h-full object-cover opacity-40 rounded-sm"
              src="https://www.unocha.org/sites/default/files/styles/full_width_2_1_123/public/2024-08/Mali%20floods-Inondations%20Bla%20-%20Juillet%202024%20-%20Sinistr%C3%A9%201-02.jpg.webp"
              alt="singer"
            />

            <div className="relative p-4 h-full flex items-end">
              <div>
                <div className="flex gap-2 text-sm my-2 text-white">
                  <button className="bg-red-600 text-white rounded-full size-6   text-[9px]">
                    OCHA
                  </button>
                  <p className="opacity-70">OCHA.</p>
                  <p className="opacity-70">12 hours ago</p>
                </div>
                <h2 className="text-2xl font-serif font-semibold text-white">
                  Today's top news: Lebanon, Occupied Palestinian Territory,
                  Ukraine, West...
                </h2>
                <p className="text-white  text-[13px] line-clamp-2  ">
                  The Humanitarian Coordinator in Lebanon, Imran Riza, deplored
                  the dangerous escalation marked by yesterday's strike on a
                  relief center in central Beirut......
                </p>
                <div className="flex gap-2 text-[13px] text-white opacity-50">
                  <p>War :</p>
                  <p>12 min read</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        {/* 3rd part */}
        <div className="gap-6 grid grid-row-2 grid-cols-1 rounded-sm">
          <a href="https://news.sky.com/story/lebanese-emergency-workers-say-they-are-under-specific-attack-by-israelis-but-wont-be-intimidated-to-leave-13227484">
            <div className="row-span-1 flex items-center justify-center space-x-4 min-h-full">
              <div className="relative h-full w-full rounded-sm">
                <img
                  src="https://liveblog.digitalimages.sky/lc-images-sky/lcimg-64c4ffcf-e170-40e7-82a4-8671ab1ad12e.jpg"
                  className="h-full w-full object-cover rounded-sm"
                  alt=""
                />
              </div>
              <div className="p-2 flex-col space-y-2 justify-between">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="size-4 bg-red-400 rounded-full"></div>
                  <p>SN.</p>
                  <p>8 hours ago</p>
                </div>
                <h3 className="text-sm font-semibold font-inter">
                  Lebanese emergency workers say they are under
                </h3>
                <p className="text-sm mt-1 text-gray-600 font-medium">
                  Sky News -
                </p>
                <p className="text-xs mb-1 text-gray-600 font-medium">
                  Lebanese emergency workers say they are under 'specific
                  attack' by Israelis
                </p>
                <div className="flex gap-2 text-sm my-2 text-gray-600 font-medium">
                  <p className="text-red-600 text-sm">War.</p>
                  <p>8 min read</p>
                </div>
              </div>
            </div>
          </a>
          {/* 4th part */}
          <div className="row-span-1 flex items-center justify-center space-x-4 min-h-full">
            <div className="relative h-full w-full">
              <img
                src="https://www.kevinmd.com/wp-content/uploads/unnamed-42.jpg"
                className="h-full w-full object-cover rounded-sm"
                alt=""
              />
            </div>
            <div className="p-2 flex-col space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <div className="size-4 bg-red-400 rounded-full"></div>
                <p>CNN.</p>
                <p>10 hours ago</p>
              </div>
              <h3 className="text-sm font-semibold font-inter">
                Revolutionary AI Tool Transforms Healthcare
              </h3>
              <p className="text-sm mt-1 text-gray-600 font-medium">
                Ukraine CNN -
              </p>
              <p className="text-xs mb-1 text-gray-600 font-medium">
                A new AI-powered tool is set to revolutionize healthcare,
                promising faster diagnostics.
              </p>
              <div className="flex gap-2 text-sm my-2 text-gray-600 font-medium">
                <p className="text-red-600 text-sm">War.</p>
                <p>8 min read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustRead;
