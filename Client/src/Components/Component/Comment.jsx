import { useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  useAddLikeCommentMutation,
  useAddReplyMutation,
  useDeleteCommentMutation,
} from "../../Features/Comment/commentsApi";
import { useSelector } from "react-redux";
import Reply from "./Reply";

const Comment = ({ comment }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [reply, setReply] = useState("");
  const { user } = useSelector((state) => state.user);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const canDeleteComment = comment?.userGmail === user?.email;
  const [addReply] = useAddReplyMutation() || {};
  const [addLikeComment] = useAddLikeCommentMutation() || {};
  const [deleteComment] = useDeleteCommentMutation() || {};
  const hasLiked = comment?.likes?.includes(user?.email);

//   add reply to comment
  const submitReply = async (e) => {
    e.preventDefault();
    try {
      const response = await addReply({
        commentId: comment?._id,
        data: {
          commentId: comment?._id,
          username: user?.name,
          userImage: user?.imageUrl,
          userGmail: user?.email,
          reply,
        },
      });
      console.log("Reply Added:", response);
      setReply("");
      setShowReplyForm(false);
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

//   like comment
  const handleLike = async () => {
    try {
      const response = await addLikeComment({
        commentId: comment._id,
        data: {
          commentId: comment._id,
          userEmail: user?.email,
        },
      });
      console.log("Like Added:", response);
    } catch (error) {
      console.error("Error adding like:", error);
    }
  };


//   deletee comment

  const handleDeleteComment = async () => {
    try {
      const response = await deleteComment({
        commentId: comment._id,
      });
      setShowDeleteModal(false);
      console.log("Delete Comment:", response);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };
  const handleClickOutside = (e) => {
    if (e.target.closest(".modal-content")) return;
    setShowDeleteModal(false);
  };


  return (
    <div className="relative">
      <div className="bg-white p-4 rounded shadow-sm flex items-start">
        <img
          src={comment?.userImage}
          alt="User Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex-1 flex justify-between">
          <div>
            <p className="font-semibold">
              {comment?.username}
              <span className="text-gray-500  ml-4 text-[12px] ">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </p>
            <p>{comment?.comment}</p>
            <div className="flex items-center pt-1">
              <div className="flex items-center gap-1">
                <button onClick={handleLike}>
                  {hasLiked ? (
                    <BiSolidLike className="text-xl text-blue-500" /> // Liked
                  ) : (
                    <BiLike className="text-xl" />
                  )}
                </button>
                <p>{comment?.likes?.length}</p>
              </div>
              <button
                className="text-blue-500 text-sm ml-4 flex gap-1 items-center"
                onClick={() => setShowReplyForm(!showReplyForm)}
              >
                <FaRegCommentDots />
                {showReplyForm ? "Cancel" : "Reply"}
              </button>
            </div>
          </div>
          {canDeleteComment && (
            <button
              onClick={() => setShowDeleteModal(!showDeleteModal)}
              className="ml-4"
            >
              <BsThreeDotsVertical />
            </button>
          )}
        </div>
      </div>

      {/* Reply Form */}
      {showReplyForm && (
        <form onSubmit={submitReply} className="pl-6 pr-4 bg-white">
          <input
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Add a reply..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white px-2 py-1 rounded-sm"
            >
              Reply
            </button>
          </div>
        </form>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleClickOutside}
        >
          <div className="modal-content bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold">Delete Comment</h2>
            <p>Are you sure you want to delete this comment?</p>
            <div className="flex justify-end mt-4">
              <button
                className="mr-2 text-gray-500"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-1 rounded"
                onClick={handleDeleteComment}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Show All Replies */}
      <div>
        {comment?.replies?.length >= 0 &&
          comment?.replies?.map((reply) => {
            return <Reply key={reply?._id} reply={reply} />;
          })}
      </div>
    </div>
  );
};

export default Comment;
