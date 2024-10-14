import CommentSection from "./CommentSection";

const DiscussionDetails = ({ discussion, comments, onComment, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white shadow-md rounded p-4 relative w-11/12 md:w-2/3 lg:w-1/2">
        {/* Cross Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &#10005;
        </button>
        <div className="flex items-center space-x-2 mb-4">
          {discussion.userImage && (
            <img
              src={discussion.image}
              alt="Discussion"
              className="w-10 h-10 rounded-full"
            />
          )}
          <h2 className="text-xl font-bold">{discussion.title}</h2>
        </div>
        <p className="mb-4">{discussion.content}</p>
        {discussion.image && (
          <img
            src={URL.createObjectURL(discussion.image)}
            alt="Discussion"
            className="mb-4 w-full h-64 object-cover"
          />
        )}
        <CommentSection comments={comments} onComment={onComment} />
      </div>
    </div>
  );
};

export default DiscussionDetails;
