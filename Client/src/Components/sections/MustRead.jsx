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
        data-aos-duration="1000"
        className="my-6 grid grid-cols-1  lg:grid-cols-3 gap-6"
      >
        {/* 1st part */}
        <a
          href="https://metalinjection.net/news/brujeria-cancels-all-tour-dates-due-to-severe-medical-emergency"
          target="-blank"
        >
          <div className="flex-col flex-1">
            <img
              src="https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/07/Brujeria-2023.png"
              className="w-full rounded-sm h-96 object-cover"
              alt=""
            />

            <div className="flex gap-2 text-sm my-2 text-gray-600 font-medium">
              <button className="bg-red-600 text-white rounded-full size-6   text-[9px]">
                TD
              </button>
              <p>The Daily Star.</p>
              <p>10 hours ago</p>
            </div>

            <h3 className="text-xl font-semibold font-inter">
              BRUJERIA Cancels All Tour Dates Due To 'Severe Medical Emergency
            </h3>
            <p className="text-sm mt-1 text-gray-600 font-medium">
              Tech Daily -
            </p>
            <p className="text-[13px] mb-1 text-gray-600 font-medium">
              Brujeria has had to cancel their tour dates due to a severe
              medical emergency. More updates will follow soon..
            </p>
            <div className="flex gap-2 text-sm my-2 text-gray-600 font-medium">
              <p className="text-red-600 text-sm">Music.</p>

              <p>8 min read</p>
            </div>
          </div>
        </a>
        {/* 2nd part */}
        <a
          href="https://www.bbc.com/future/article/20241030-the-island-ruled-by-alien-snakes-and-spiders"
          target="_blank"
        >
          <div className="bg-gray-800 shadow-xl relative md:min-h-[500px] h-full rounded-sm">
            <img
              className="absolute  inset-0 w-full h-full object-cover opacity-40 rounded-sm"
              src="https://ichef.bbci.co.uk/images/ic/1024xn/p0k17t9t.jpg.webp"
              alt="singer"
            />

            <div className="relative p-4 h-full flex items-end">
              <div>
                <div className="flex gap-2 text-sm my-2 text-white">
                  <button className="bg-red-600 text-white rounded-full size-6   text-[9px]">
                    BBC
                  </button>
                  <p className="opacity-70">BBC.</p>
                  <p className="opacity-70">12 hours ago</p>
                </div>
                <h2 className="text-2xl font-serif font-semibold text-white">
                  The US island ruled by alien snakes and spiders...
                </h2>
                <p className="text-white  text-[13px] line-clamp-2  ">
                  Guam has 40 times more spiders than neighbouring islands – and
                  a population of invasive snakes so voracious, they have
                  emptied the forests of every bird...
                </p>
                <div className="flex gap-2 text-[13px] text-white opacity-50">
                  <p>Earth :</p>
                  <p>12 min read</p>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* 3rd part */}
        <a
          href="https://www.brookings.edu/articles/how-artificial-intelligence-is-transforming-the-world/"
          target="_blank"
        >
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
      </div>
    </div>
  );
};

export default MustRead;
