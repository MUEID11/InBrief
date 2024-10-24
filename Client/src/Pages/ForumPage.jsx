import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateDiscussion from "../Components/Component/Forum/CreateDiscussionForm";
import DiscussionDetails from "../Components/Component/Forum/DiscussionDetails";
import { getForums } from "../Features/thunks/forumThunk";

const ForumPage = () => {
  const [discussions, setDiscussions] = useState([]);
  const { forums: discussionsS } = useSelector((state) => state.forumsR);
  console.log("discussion", discussions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getForums());
  }, [discussions]);

  console.log(discussions);
  const { user } = useSelector((state) => state.user);

  // // Handle new discussion creation
  const handleCreateDiscussion = (newDiscussion) => {
    setDiscussions((prevDiscussions) => [...prevDiscussions, newDiscussion]);
    console.log("New Discussion Created:", newDiscussion);
  };

  // Handle selecting a discussion to view details
  const handleSelectDiscussion = (discussion) => {
    setSelectedDiscussion(discussion);
    setShowModal(true);
  };

  return (
    <div className=" flex flex-col justify-center items-center container mx-auto">
      {/* Create Discussion Section */}
      <div className="  mx-auto p-4 border-r">
        <CreateDiscussion onCreate={handleCreateDiscussion} />
      </div>

      {/* Join Discussion Section */}
      <div className=" p-4  mx-auto">
        <h2 className="text-xl font-bold mb-2">Join Discussion</h2>
        {discussionsS?.map((discussion) => (
          <div
            key={discussion._id}
            onClick={() => handleSelectDiscussion(discussion)}
            className="cursor-pointer border p-2 mb-2"
          >
            <DiscussionDetails discussion={discussion} />
            {/* <Link
              to={`forum-details/${discussion?._id}`}
              className="mt-6"
              onClose={closeModal}
            >
              <DiscussionDetails discussion={selectedDiscussion} />
              <CommentSection
                discussionId={selectedDiscussion._id}
                onComment={handleAddComment}
              />
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
