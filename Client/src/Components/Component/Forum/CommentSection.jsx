import { useState } from "react";
import { useSelector } from "react-redux"; 

const CommentSection = ({ comments, onComment }) => {
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.user);

  const handleComment = (e) => {
    e.preventDefault();
    onComment({
      text: comment,
      username: user?.name,
      userImage: user?.imageUrl,
    });
    setComment("");
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleComment} className="mb-4 flex items-center space-x-2">
        {user?.imageUrl && (
          <img
            src={user.imageUrl}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
        )}
        <textarea
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 rounded-full text-white p-2"
        >
          Submit
        </button>
      </form>

      <div className="comments-list space-y-4">
        {comments.map((cmt, index) => (
          <div key={index} className="flex items-start space-x-2">
            {cmt.userImage && (
              <img
                src={cmt.userImage}
                alt={cmt.username}
                className="w-8 h-8 rounded-full"
              />
            )}
            <div>
              <p className="font-semibold">{cmt.username}</p>
              <p>{cmt.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
