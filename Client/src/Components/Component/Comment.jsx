import { useState } from 'react';

const Comment = ({ comment }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState('');



  return (
    <div className="p-4 border border-gray-200">
      {/* Comment content */}
      <div className="mb-2">
        <p className="font-semibold">{comment.username}</p>
        <p>{comment.comment}</p>
      </div>

    </div>
  );
};

export default Comment;
