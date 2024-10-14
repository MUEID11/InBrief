import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CreateDiscussion from '../Components/Component/Forum/CreateDiscussionForm';
import DiscussionDetails from '../Components/Component/Forum/DiscussionDetails';
import Modal from '../Components/Component/Forum/Modal';
import CommentSection from '../Components/Component/Forum/CommentSection';

const ForumPage = () => {
  const [discussions, setDiscussions] = useState([]); 
  const [selectedDiscussion, setSelectedDiscussion] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.user); 

  // Handle new discussion creation
  const handleCreateDiscussion = (newDiscussion) => {
    setDiscussions((prevDiscussions) => [...prevDiscussions, newDiscussion]); 
    console.log('New Discussion Created:', newDiscussion);
  };

  // Handle selecting a discussion to view details
  const handleSelectDiscussion = (discussion) => {
    setSelectedDiscussion(discussion); 
    setShowModal(true);
  };

  // Handle adding a comment to the selected discussion
  const handleAddComment = (newComment) => {
    setSelectedDiscussion((prevDiscussion) => ({
      ...prevDiscussion,
      comments: [...prevDiscussion.comments, newComment], 
    }));
  };

   
  // Close modal and reset selected discussion
  const closeModal = () => {
    setShowModal(false);
    setSelectedDiscussion(null); 
  };

  return (
    <div className="flex">
      {/* Create Discussion Section */}
      <div className="w-1/2 p-4 border-r">
        <CreateDiscussion onCreate={handleCreateDiscussion} /> 
      </div>

      {/* Join Discussion Section */}
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-2">Join Discussion</h2>
        {discussions.map((discussion) => (
          <div
            key={discussion._id}
            onClick={() => handleSelectDiscussion(discussion)}
            className="cursor-pointer border p-2 mb-2"
          >
            <DiscussionDetails discussion={discussion} />
          </div>
        ))}
      </div>

      {/* Modal for Discussion Details */}
      {showModal && selectedDiscussion && (
    <Modal onClose={closeModal}>
        <DiscussionDetails discussion={selectedDiscussion} />
        <CommentSection
            discussionId={selectedDiscussion._id}
            onComment={handleAddComment}
        />
    </Modal>
      )}
    </div>
  );
};

export default ForumPage;
