import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CommentSection from './CommentSection';

const JoinDiscussion = ({ discussion }) => {
  const { user } = useSelector((state) => state.user);  // Fetching user info from redux
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:5000/forum/${discussion._id}/comment`, {
      text: comment,
      userName: user?.name,
      userImage: user?.imageUrl,
    })
    .then(response => {
      console.log(response.data);
      setComment('');  
    })
    .catch(error => console.log(error));
  };

  return (
    <div className="join-discussion">
      <h2>{discussion.title}</h2>
      <p>{discussion.description}</p>
hghfffffff

      {/* Comments Section */}
      <CommentSection comments={discussion.comments} />

      {/* Add Comment */}
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

export default JoinDiscussion;
