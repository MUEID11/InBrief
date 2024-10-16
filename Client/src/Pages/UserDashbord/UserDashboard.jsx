import React from 'react';
import { FaBookmark, FaEye, FaList, FaNewspaper } from 'react-icons/fa';
import { LuArrowBigUpDash } from 'react-icons/lu';

const UserDashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  mb-6 mt-4 p-2 ">
      <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-6 shadow-md relative  mx-auto md:w-full min-h-36">
        <FaNewspaper className="absolute top-4 left-4 text-blue-500 text-3xl" />
        <div className="ml-12">
          <h2 className="text-gray-900 text-xl font-semibold mb-2">
            My Posted Articles
          </h2>
          <p className=' absolute bottom-1 right-2 text-blue-700 hover:underline cursor-pointer'>click here</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-6 shadow-md relative  mx-auto md:w-full min-h-36">
      <LuArrowBigUpDash className="absolute top-4 left-4 text-green-600 text-3xl bg-green-300 rounded-2xl" />
        <div className="ml-12">
          <h2 className="text-gray-900 text-xl font-semibold mb-2">
            Voted News
          </h2>
          <p className=' absolute bottom-1 right-2 text-blue-700 hover:underline cursor-pointer'>click here</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-6 shadow-md relative  mx-auto md:w-full min-h-36">
        <FaBookmark className="absolute top-4 left-4 text-blue-500 text-xl" />
        <div className="ml-12">
          <h2 className="text-gray-900 text-xl font-semibold mb-2">
           Bookmarked News
          </h2>
          <p className=' absolute bottom-1 right-2 text-blue-700 hover:underline cursor-pointer'>click here</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default UserDashboard;