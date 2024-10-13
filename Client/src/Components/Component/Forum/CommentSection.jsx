import { useState } from "react";

const CommentSection = ({ comments, onComment }) => {
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    onComment(comment);
    setComment("");
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleComment} className="mb-4">
        <textarea
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border"
        ></textarea>
        <button type="submit" className="bg-red-600 rounded-sm text-white p-2">
          Submit Comment
        </button>
      </form>
      <div className="comments-list">
        {comments.map((cmt, index) => (
          <div key={index} className="p-2 border-b">
            {cmt}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;