import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import PlaceholderImg from "../PlaceholderImg";

const DiscussionDetails = ({ discussion }) => {
  console.log(discussion);
  return (
    <div className="p-4 border-b h-full mb-4">
      <Link
        to={`forum-details/${discussion?._id}`}
        className="flex flex-col h-full"
      >
        <div className="flex-1 flex-grow">
          <div className="flex items-center mb-4">
            <img
              loading="lazy"
              src={discussion?.userImage}
              alt={discussion?.username}
              className="w-10 h-10 rounded-full  border-solid border-green-600 mr-2"
            />
            <h1 className="font-semibold">{discussion?.username}</h1>
          </div>
          <h2 className="text-xl font-bold mb-2">{discussion.title}</h2>
          <p className="text-sm text-neutral-700">
            {discussion.content.slice(0, 220)}
            {discussion.content.length > 220 && " ....."}
          </p>
        </div>
        <LazyLoad
          debounce={"50ms"}
          height={240}
          offset={100}
          placeholder={<PlaceholderImg />}
        >
          <img
            loading="lazy"
            className="sm:w-full h-60 object-cover"
            src={discussion?.image}
            alt=""
          />
        </LazyLoad>
      </Link>
    </div>
  );
};

export default DiscussionDetails;
