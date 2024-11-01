import React from "react";
import Headline from "./Headline";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <section className="container w-full mx-auto md:mb-8 my-6 font-gsans">
      <div className="px-2 sm:px-0">
        <div className="w-full mx-auto p-2 sm:p-12 border bg-repeat bg-cover sm:mb-8 mb-4 border-b-4 border-l-4 flex flex-col transition-all duration-200 ease-in-out hover:border-slate-600 rounded-sm">
          <div className="text-center p-4">
            <h1 className="font-extrabold text-2xl max-sm:text-lg text-gray-700 uppercase tracking-wide">
              Welcome to <span className="text-red-600">InBrief</span>
            </h1>
            <p className="text-4xl max-sm:text-2xl mt-3 text-gray-800 max-w-[720px] mx-auto font-bold leading-relaxed">
              Crafting stories ✍️ that ignite{" "}
              <span className="text-red-600">
                <Typewriter
                  options={{
                    strings: [
                      "Inspiration for curious minds 🌍",
                      "Knowledge to empower 📘",
                      "Entertainment that excites 🎥",
                      "Insights that matter 📈",
                      "A deeper understanding 🌐",
                      "Up-to-date with latest trends 🔥",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 65,
                    deleteSpeed: 40,
                  }}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Headline />
      </div>

      {/* Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-sm:mt-5 m-2 sm:m-0">
        {/* Image Section */}
        <div>
          <div
            className="h-52 sm:h-72 bg-cover rounded-sm"
            style={{
              backgroundImage:
                "url(https://www.marketresearchintellect.com/images/01-24/global-shake-machines-market-size-and-forecast.webp)",
            }}
          ></div>
        </div>

        {/* News Section */}
        <div className="mt-4 max-sm:mt-0 mr-44 border-gray-200 rounded-lg w-full">
          <div className="px-4 py-3">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className="font-semibold text-red-600">Netflix</span>
              <span>12 minutes ago</span>
            </div>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Major Tech Merger Shakes Global Markets
            </h2>
            <p className="mt-3 text-xl font-medium text-gray-600">
              Two leading tech giants announce a historic merger, sending
              shockwaves through the global market. The deal is expected to
              reshape the tech landscape and impact millions of users worldwide.
            </p>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <span className="font-semibold text-red-600">Movies</span>
              <span>· 4 min read</span>
            </div>
          </div>
        </div>
      </div>
      {/* ---banner */}
    </section>
  );
};

export default Banner;
