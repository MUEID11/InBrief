
import React from 'react';

const DiscussionDetails = ({ discussion }) => {
  return (
    <div className="p-4 border-b mb-4">
      <div className="flex items-center mb-4">
        <img
          src={discussion?.userImage}
          alt={discussion?.username}
          className="w-10 h-10 rounded-full border-[3px] border-solid border-green-600 mr-2"
        />
        <h1 className="font-semibold">{discussion?.username}</h1>
      </div>
      <h2 className="text-xl font-bold mb-2">{discussion.title}</h2>
      <p>{discussion.content}</p>
    </div>
  );
};

export default DiscussionDetails;
