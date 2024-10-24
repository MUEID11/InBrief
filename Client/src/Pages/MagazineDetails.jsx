import React from 'react';
import { FaUserCircle, FaTag, FaUserFriends } from 'react-icons/fa';

const App = () => {
  const magazine = {
    title: 'Politics in Everything',
    topic: 'Politics',
    coverImageUrl: 'https://i.ibb.co/ssgbwzY/pngwing-1.png', // Replace with a valid image URL
    followers: ['user1', 'user2', 'user3'], // Replace with actual user names or IDs
    creator: 'user123', // Replace with creator's name or ID
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover Image */}
      <div
        className="w-full h-64 bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${magazine.coverImageUrl})` }}
      ></div>

      {/* Magazine Details */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-4">
        {/* Magazine Title */}
        <div className="mb-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{magazine.title}</h1>
          <p className="text-gray-500">A deep dive into the world of {magazine.topic}</p>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Topics */}
          <div className="flex items-center">
            <FaTag className="text-gray-600 mr-3" />
            <div>
              <h2 className="text-lg font-semibold">Topic</h2>
              <p className="text-gray-600">{magazine.topic}</p>
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
              <p className="text-gray-600">{magazine.creator}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
