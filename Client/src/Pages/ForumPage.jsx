import { useState } from "react";
import DiscussionList from "../Components/Component/Forum/DiscussionList";
import DiscussionDetails from "../Components/Component/Forum/DiscussionDetails";
import CommentSection from "../Components/Component/Forum/CommentSection";
import CreateDiscussion from "../Components/Component/Forum/CreateDiscussionForm";

const ForumPage = () => {
  const [discussions, setDiscussions] = useState([]);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [comments, setComments] = useState([]);
  const [showDiscussion, setShowDiscussion] = useState(false);

  const handleCreateDiscussion = (newDiscussion) => {
    setDiscussions([...discussions, { ...newDiscussion, id: Date.now() }]);
  };

  const handleSelectDiscussion = (discussion) => {
    setSelectedDiscussion(discussion);
    setShowDiscussion(true);  // Open modal to show details
  };
  
    // Add a comment to the discussion
  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  // Close the discussion modal
  const handleCloseDiscussion = () => {
    setShowDiscussion(false); // Close modal
    setSelectedDiscussion(null); // Clear selected discussion
  };

  return (
    <div className="forum-page p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Discussion Forum</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* Create a new discussion */}
        <div className="bg-gray-100 p-4 shadow-md rounded">
          <h2 className="text-lg font-semibold">Create a new discussion</h2>
          <CreateDiscussion onCreate={handleCreateDiscussion} />
        </div>

        {/* Join existing discussions */}
        <div className="bg-gray-100 p-4 shadow-md rounded">
          <h2 className="text-lg font-semibold">Join the discussion</h2>
          <DiscussionList discussions={discussions} onSelect={handleSelectDiscussion} />
          {selectedDiscussion && (
            <DiscussionDetails
              discussion={selectedDiscussion}
              comments={comments}
              onComment={handleAddComment}
              onClose={handleCloseDiscussion} // Close modal function
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForumPage;