import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useAddForumCommentMutation } from "../../../services/ForumComment/forumCommentApi";

const CommentSection = ({ discussionId }) => {
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.user);
  const [addForumComment] = useAddForumCommentMutation() || {};


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent if comment is empty
    if (!comment) return;

    try {
      const response = await addForumComment({
        discussionId,
        data: {
          comment: comment,
          username: user?.name,
          userImage: user?.imageUrl,
          userEmail: user?.email,
        },
      });
      console.log('forum Comment Added:', response);
      setComment("");
      e.target.reset();
    } catch (error) {
      console.error("Error adding comment", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        {/* <div className="flex items-center mb-4">
          <img
            src={user?.imageUrl}
            alt={user?.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <h1 className="font-semibold">{user?.name}</h1>
        </div> */}
        <textarea
          onChange={(e) => setComment(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded-sm"
                  rows="2"
                  placeholder="Write a comment..."></textarea>
                <div className="flex justify-end ">
                  <button type="submit" className="mt-2 bg-red-500 text-white px-2 py-1 rounded-sm  ">
                    Comment
                  </button>
                </div>
      </form>
      {/* <div>{data}</div> */}
    </div>
  );
};

export default CommentSection;
