import { useState } from "react";
import CreateDiscussion from "../Components/Component/Forum/CreateDiscussion";
import DiscussionList from "../Components/Component/Forum/DiscussionList";
import DiscussionDetails from "../Components/Component/Forum/DiscussionDetails";
import CommentSection from "../Components/Component/Forum/CommentSection";

const ForumPage = () => {
  const [discussions, setDiscussions] = useState([]);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [comments, setComments] = useState([]);

  const handleCreateDiscussion = (newDiscussion) => {
    setDiscussions([...discussions, { ...newDiscussion, id: Date.now() }]);
  };

  const handleSelectDiscussion = (discussion) => {
    setSelectedDiscussion(discussion);
  };

  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="forum-page p-4">
      <h1 className="text-2xl font-bold">Forum</h1>
      <CreateDiscussion onCreate={handleCreateDiscussion} />
      <div className="discussions-list mt-4">
        <DiscussionList discussions={discussions} onSelect={handleSelectDiscussion} />
      </div>
      {selectedDiscussion && (
        <div className="discussion-details mt-4">
          <DiscussionDetails discussion={selectedDiscussion} />
          <CommentSection comments={comments} onComment={handleAddComment} />
        </div>
      )}
    </div>
  );
};

export default ForumPage;
