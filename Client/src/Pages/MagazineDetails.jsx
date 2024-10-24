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
        className="w-full h-72 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${magazine.coverImageUrl})` }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">{magazine.title}</h1>
        </div>
      </div>

      {/* Magazine Details */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
        {/* Magazine Title and Description */}
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">{magazine.title}</h2>
          <p className="text-gray-600 italic">Exploring the intricacies of {magazine.topic}</p>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Topic */}
          <div className="flex items-center">
            <FaTag className="text-blue-600 mr-3" />
            <div>
              <h3 className="text-lg font-medium">Topic</h3>
              <p className="text-gray-700">{magazine.topic}</p>
            </div>
          </div>

          {/* Followers */}
          <div className="flex items-center">
            <FaUserFriends className="text-green-600 mr-3" />
            <div>
              <h3 className="text-lg font-medium">Followers</h3>
              <ul className="text-gray-700 list-disc pl-5">
                {magazine.followers.map((follower, index) => (
                  <li key={index}>{follower}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Created By */}
          <div className="flex items-center">
            <FaUserCircle className="text-purple-600 mr-3" />
            <div>
              <h3 className="text-lg font-medium">Created By</h3>
              <p className="text-gray-700">{magazine.creator}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
