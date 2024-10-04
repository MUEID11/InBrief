import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MustRead = () => {
  return (
    <div className="my-2 p-2 container mx-auto mt-4 sm:mt-12 max-sm:px-2">
      {/* Must read title */}
      <div className="flex justify-between items-center rounded-sm">
        <h2 className="text-2xl md:text-3xl font-inter font-semibold  ">
          Must read
        </h2>
        <Link
          to={"/mustread"}
          className="flex items-center gap-1 font-bold text-red-600 hover:text-red-700 transition-colors duration-300"
        >
          See All <FaArrowRight />
        </Link>
      </div>
      {/* must read cards */}
      <div className="my-6 grid grid-cols-1  lg:grid-cols-3 gap-6">
        {/* 1st part */}
        <div className="">
          <img
            src="https://images.pexels.com/photos/20258/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            className="w-full rounded-sm"
            alt=""
          />

          <div className="flex gap-2 text-sm my-2 text-gray-600 font-medium">
            <button className="bg-red-600 text-white rounded-full size-6   text-[9px]">
              CNN
            </button>
            <p>CNN.</p>
            <p>10 hours ago</p>
          </div>

          <h3 className="text-xl font-semibold font-inter">
            Ukraine`s slience along southern front fuels counteroffensive...
          </h3>
          <p className="text-sm mt-1 text-gray-600 font-medium">
            Ukraine CNN -
          </p>
          <p className="text-[13px] mb-1 text-gray-600 font-medium">
            Miles of empty feilds where ou might expect a build up of army Tanks
            tracks that emerge in the mud frome nowhere...
          </p>
          <div className="flex gap-2 text-sm my-2 text-gray-600 font-medium">
            <p className="text-red-600 text-sm">War.</p>

            <p>8 min read</p>
          </div>
        </div>
        {/* 2nd part */}
        <div className="bg-gray-800 shadow-xl relative md:min-h-[500px] rounded-sm">
          <img
            className="absolute  inset-0 w-full h-full object-cover opacity-40 rounded-sm"
            src="https://static.vecteezy.com/system/resources/previews/029/630/494/non_2x/handsome-young-male-singer-holds-a-microphone-stand-and-performs-on-a-concert-stage-free-photo.jpeg"
            alt="singer"
          />

          <div className="relative p-4 h-full flex items-end">
            <div>
              <div className="flex gap-2 text-sm my-2 text-white">
                <button className="bg-red-600 text-white rounded-full size-6   text-[9px]">
                  CNN
                </button>
                <p className="opacity-70">CNN.</p>
                <p className="opacity-70">10 hours ago</p>
              </div>
              <h2 className="text-2xl font-serif font-semibold text-white">
                John Legend is sending a poweful message to woman on the Eras
                ...
              </h2>
              <p className="text-white  text-[13px] line-clamp-2  ">
                My first singing of discomfort at jhon legend show in Las vegas
                hit after the infected beast faded from fan favourite crual
                summer the...
              </p>
              <div className="flex gap-2 text-[13px] text-white opacity-50">
                <p>Entertainment :</p>
                <p>10 min read</p>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd part */}
        <div className="gap-6 grid grid-row-2 grid-cols-1 rounded-sm">
          <div className="row-span-1 flex items-center justify-center space-x-4 min-h-full">
            <div className="relative h-full w-full rounded-sm">
              <img
                src="https://images.pexels.com/photos/20258/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                className="h-full w-full object-cover rounded-sm"
                alt=""
              />
            </div>
            <div className="p-2 flex-col space-y-2 justify-between">
              <div className="flex items-center space-x-3 text-sm">
                <div className="size-4 bg-red-400 rounded-full"></div>
                <p>CNN.</p>
                <p>10 hours ago</p>
              </div>
              <h3 className="text-sm font-semibold font-inter">
                Ukraine`s slience along southern front fuels counteroffensive...
              </h3>
              <p className="text-sm mt-1 text-gray-600 font-medium">
                Ukraine CNN -
              </p>
              <p className="text-xs mb-1 text-gray-600 font-medium">
                Miles of empty feilds where ou might expect a build up of army
              </p>
              <div className="flex gap-2 text-sm my-2 text-gray-600 font-medium">
                <p className="text-red-600 text-sm">War.</p>
                <p>8 min read</p>
              </div>
            </div>
          </div>
          <div className="row-span-1 flex items-center justify-center space-x-4 min-h-full">
            <div className="relative h-full w-full">
              <img
                src="https://images.pexels.com/photos/20258/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
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
                Ukraine`s slience along southern front fuels counteroffensive...
              </h3>
              <p className="text-sm mt-1 text-gray-600 font-medium">
                Ukraine CNN -
              </p>
              <p className="text-xs mb-1 text-gray-600 font-medium">
                Miles of empty feilds where ou might expect a build up of army
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
