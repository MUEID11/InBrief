
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const CommentSection = ({ discussionId, onComment }) => {
  const [comment, setComment] = useState('');
  const { user } = useSelector((state) => state.user); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent if comment is empty
    if (!comment) return;

    try {
      const commentData = {
        comment,
        username: user?.name, 
        userImage: user?.imageUrl, 
        discussionId,
      };

    //  jhari deyen an ami localhost thik kore dibonii
      const response = await axios.post(`http://localhost:5000/forum/${discussionId}/comments`, commentData);
      onComment(response.data);
      setComment('');
    } catch (error) {
      console.error('Error adding comment', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="flex items-center mb-4">
        <img
          src={user?.imageUrl}
          alt={user?.name}
          className="w-8 h-8 rounded-full mr-2"
        />
        <h1 className="font-semibold">{user?.name}</h1>
      </div>
      <textarea
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border p-2 w-full mb-4"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Comment
      </button>
    </form>
  );
};

export default CommentSection;
