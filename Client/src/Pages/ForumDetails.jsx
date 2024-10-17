import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../Components/Component/Forum/CommentSection";

const ForumDetails = () => {
  const [forum, setForum] = useState({});
  const { id } = useParams();
  // const [selectedDiscussion, setSelectedDiscussion] = useState(null);

  // Handle adding a comment to the selected discussion
  // const handleAddComment = (newComment) => {
  //   setSelectedDiscussion((prevDiscussion) => ({
  //     ...prevDiscussion,
  //     comments: [...prevDiscussion.comments, newComment],
  //   }));
  // };

  useEffect(() => {
    const fetchForum = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/forum/${id}`
        );
        const data = await response.json();
        setForum(data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchForum();
  }, []);
  console.log("megh", forum);

  return (
    <div className=" flex items-center justify-center">
      <div className="rounded-sm p-4 max-w-2xl w-full relative">
        <div className="flex items-center mb-4">
          <img
            src={forum?.userImage}
            alt={forum?.username}
            className="w-10 h-10 rounded-full border-[3px] border-solid border-green-600 mr-2"
          />
          <h1 className="font-semibold">{forum?.username}</h1>
        </div>
        <h2 className="text-xl font-bold mb-2">{forum.title}</h2>
        <p>{forum.content}</p>
        <img className="max-w-sm" src={forum?.image} alt="" />
        <button className="absolute top-7 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"></button>
      </div>
      <CommentSection
        discussionId={forum?._id}
        // selectedDiscussion={selectedDiscussion}
        // onComment={handleAddComment}
      ></CommentSection>
    </div>
  );
};

export default ForumDetails;