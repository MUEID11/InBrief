import React from "react";
import { Link } from "react-router-dom";

const DiscussionDetails = ({ discussion }) => {
  console.log(discussion);
  return (
    <div className="p-4 border-b mb-4">
      <Link to={`forum-details/${discussion?._id}`}>
        <div className="flex items-center mb-4">
          <img src={discussion?.userImage} alt={discussion?.username} className="w-10 h-10 rounded-full  border-solid border-green-600 mr-2" />
          <h1 className="font-semibold">{discussion?.username}</h1>
        </div>
        <h2 className="text-xl font-bold mb-2">{discussion.title}</h2>
        <p>{discussion.content}</p>
        <img className="sm:max-w-sm" src={discussion?.image} alt="" />
      </Link>
    </div>
  );
};

export default DiscussionDetails;
