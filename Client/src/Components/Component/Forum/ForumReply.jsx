import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDeleteForumReplyMutation } from "../../../services/ForumComment/forumCommentApi";

const ForumReply = ({ reply }) => {
  const { user } = useSelector((state) => state.user);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const canDeleteReply = reply?.userEmail === user?.email;
  const [deleteForumReply] = useDeleteForumReplyMutation() || {};

  const handleDeleteReply = async () => {
    try {
      const response = await deleteForumReply({
        commentId: reply?.commentId,
        replyId: reply?._id,
      });
      setShowDeleteModal(false);
      // console.log("Delete forum reply:", response);
    } catch (error) {
      // console.error("Error deleting forum reply:", error);
    }
    setShowDeleteModal(false);
  };

  const handleClickOutside = (e) => {
    if (e.target.closest(".modal-content")) return;
    setShowDeleteModal(false);
  };

  return (
    <div className="relative">
      {/* Reply Content */}
      <div className="bg-white p-3 pl-16 rounded flex items-start">
        <img src={reply?.userImage} className="w-6 h-6 rounded-full mr-3" alt="User Profile" />
        <div className="flex-1 flex justify-between items-start">
          <div className="flex items-start">
            <div>
              <p className="font-semibold text-[15px]">
                {reply?.username}
                <span className="text-gray-500 text-[11px] ml-3">{new Date(reply.createdAt).toLocaleDateString()}</span>
              </p>
              <p className="text-sm text-neutral-700">{reply?.reply}</p>
            </div>
            {canDeleteReply && (
              <button onClick={() => setShowDeleteModal(!showDeleteModal)} className="m-4">
                <MdOutlineDelete />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleClickOutside}>
          <div className="modal-content bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold">Delete Reply</h2>
            <p>Are you sure you want to delete this reply?</p>
            <div className="flex justify-end mt-4">
              <button className="mr-2 text-gray-500" onClick={() => setShowDeleteModal(false)}>
                Cancel
              </button>
              <button className="bg-red-500 text-white px-4 py-1 rounded" onClick={handleDeleteReply}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForumReply;
