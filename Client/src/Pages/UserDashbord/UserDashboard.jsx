import React from "react";
import { FaBookmark, FaEye, FaList, FaNewspaper } from "react-icons/fa";
import { LuArrowBigUpDash } from "react-icons/lu";
import { Link } from "react-router-dom";

const UserDashboard = () => {



  return (
    <div>
      <h3 className="text-xl md:text-2xl text-black font-bold p-4">
        User Dashboard
      </h3>
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 1st card */}
        <div className="min-h-36 bg-white shadow-lg  border flex  gap-2 p-4 relative">
          <FaNewspaper className="  text-red-500  text-xl mr-3" />
          <div className=" ">
            <h2 className="text-gray-900 text-2xl font-semibold mb-2 p-1">
             My Posted Articles
            </h2>
            <Link to={"/dashboard/user/my-posts"}>
            <p className="text-xl font-medium absolute right-4 bottom-2 text-blue-700 hover:underline cursor-pointer">
              click here
            </p></Link>
          </div>
        </div>
        {/* 2nd card */}
        <div className="min-h-36 bg-white shadow-lg  border flex  gap-2 p-4 relative">
          <LuArrowBigUpDash className="  text-green-600  text-2xl bg-green-300 rounded-3xl mr-3" />
          <div className=" ">
            <h2 className="text-gray-900 text-2xl font-semibold mb-2 p-1">
              Voted Articles
            </h2>
            <Link to={'/dashboard/user/my-votedArticles'} >
            <p className="text-xl font-medium absolute right-4 bottom-2 text-blue-700 hover:underline cursor-pointer">
              click here
            </p>
            </Link>
          </div>
        </div>
        {/* 3rd card */}
        <div className="min-h-36 bg-white shadow-lg  border flex  gap-2 p-4 relative">
          <FaBookmark  className="  text-blue-500  text-xl mr-3" />
          <div className=" ">
            <h2 className="text-gray-900 text-2xl font-semibold mb-2 p-1">
          Bookmarked Articles
            </h2>
            <Link to={"/dashboard/user/my-bookmarks"}>
            <p className="text-xl font-medium absolute right-4 bottom-2 text-blue-700 hover:underline cursor-pointer">
              click here
            </p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

