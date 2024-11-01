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
      <div className="mb-8">
        <Headline />
      </div>

      {/* Banner */}
      <a
        href="https://www.thedailystar.net/news/bangladesh/news/saff-championship-president-chief-adviser-congratulate-bangladesh-womens-team-3740986"
        target="_blank"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-sm:mt-8 m-2 sm:m-0">
          {/* Image Section */}
          <div className="">
            <div
              className="h-52 sm:h-72 bg-cover rounded-sm mr-2"
              style={{
                backgroundImage:
                  "url(https://www.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/10/30/saff_trophy.jpg)",
              }}
            ></div>
          </div>

          {/* News Section */}
          <div className=" mt-1 max-sm:mt-0 mr-44 border-gray-200 rounded-lg w-full">
            <div className="px-1 py-2">
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>The Daily Star</span>
              </div>

              <h2 className="mt-2 sm:text-3xl text-xl font-bold text-gray-900">
                SAFF championship: President, chief adviser congratulate
                Bangladesh women’s team
              </h2>
              <p className="mt-3 font-medium text-gray-600">
                Bangladesh national women's football team's head coach Peter
                Butler said he has delivered on the promise of bringing the SAFF
                Women's Championship title home. Speaking to reporters outside
                the Hazrat Shahjalal International Airport following the team's
                triumphant return from Nepal today, the Englishman said he was
                delighted that the team won playing excellent football through
                complete teamwork.
              </p>
              {/* <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>· 4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </a>
      {/* ---banner */}
    </section>
  );
};

export default Banner;
