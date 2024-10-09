import { useState } from "react";
import { LuArrowBigUpDash } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import { useAddReplyMutation } from "../../Features/Comment/commentsApi";
import { useSelector } from "react-redux";
import Reply from "./Reply";

const Comment = ({ comment }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [reply, setReply] = useState("");
  const { user } = useSelector((state) => state.user);
  const [addReply] = useAddReplyMutation() || {};

  const submitReply = async (e) => {
    e.preventDefault();
    try {
      const response = await addReply({
        commentId: comment?._id,
        data: {
          commentId: comment?._id,
          username: user?.name,
          reply,
        },
      });
      console.log("Reply Added:", response);
      setReply("");
      setShowReplyForm(!showReplyForm)
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  return (
    <div className="">
      {/* Comment Content with User Profile */}
      <div className="bg-white p-4 rounded shadow-sm flex items-start">
        <img
          src="https://logopond.com/logos/b4f4918b027ac2801e051ef9f44b44c9.png"
          alt="User Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{comment.username}</p>
          <p>{comment.comment}</p>
          <div className="flex items-center justify-start  pt-1">
            <button
              // onClick={() => handleLike(article._id)}
              className=""
            >
              <LuArrowBigUpDash
                className={" text-xl text-green-500 bg-green-100 rounded-full"}
              />
            </button>
            <button
              className="text-blue-500 text-sm ml-4 flex gap-1 items-center"
              onClick={() => setShowReplyForm(!showReplyForm)}
            >
              <FaRegCommentDots />
              Reply
            </button>
          </div>
        </div>
      </div>

      {/* Reply Form */}
      {showReplyForm && (
        <form onSubmit={submitReply} className="pl-6 pr-4 bg-white">
          <input
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="add a reply..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            required
          />
          <div className="flex justify-end ">
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white px-2 py-1 rounded-xl"
            >
              reply
            </button>
          </div>
        </form>
      )}
{/* show All replies here */}
<div>
{
                comment?.replies?.length >= 0 && comment?.replies?.map((reply) => {
                    return <Reply key={reply?._id} reply={reply} />
                })
            }
</div>

    </div>
  );
};

export default Comment;
