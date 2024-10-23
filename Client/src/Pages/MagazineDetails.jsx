import React from 'react';
import { FaUserCircle, FaTag, FaUserFriends } from 'react-icons/fa';

const App = () => {
  const magazine = {
    name: 'Politics in Everything',
    topics: 'Politics',
    coverImageUrl: 'https://i.ibb.co/ssgbwzY/pngwing-1.png', // Replace with a valid image URL
    followers: ['user1', 'user2', 'user3'],
    createdBy: 'user123',
  };

  return (
    <div
      className="min-h-screen bg-no-repeat object-cover bg-right flex items-center justify-center"
      style={{ backgroundImage: `url(${magazine.coverImageUrl})` }}
    >
      <div className="bg-white bg-opacity-80 max-w-3xl w-full shadow-lg rounded-lg p-6">
        {/* Magazine Name */}
        <div className="mb-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{magazine.name}</h1>
          <p className="text-gray-500">A deep dive into the world of politics</p>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Topics */}
          <div className="flex items-center">
            <FaTag className="text-gray-600 mr-3" />
            <div>
              <h2 className="text-lg font-semibold">Topics</h2>
              <p className="text-gray-600">{magazine.topics}</p>
            </div>
          </div>

          {/* Followers */}
          <div className="flex items-center">
            <FaUserFriends className="text-gray-600 mr-3" />
            <div>
              <h2 className="text-lg font-semibold">Followers</h2>
              <ul className="text-gray-600 list-disc pl-5">
                {magazine.followers.map((follower, index) => (
                  <li key={index}>{follower}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Created By */}
          <div className="flex items-center">
            <FaUserCircle className="text-gray-600 mr-3" />
            <div>
              <h2 className="text-lg font-semibold">Created By</h2>
              <p className="text-gray-600">{magazine.createdBy}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
