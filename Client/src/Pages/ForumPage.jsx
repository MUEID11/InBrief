import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateDiscussion from "../Components/Component/Forum/CreateDiscussionForm";
import DiscussionDetails from "../Components/Component/Forum/DiscussionDetails";
import { getForums } from "../Features/thunks/forumThunk";
import ProfileLoadingTest from "../Components/Component/ProfileLoadingTest";

const ForumPage = () => {
  const [discussions, setDiscussions] = useState([]);
  const { forums: discussionsS, isLoading } = useSelector(
    (state) => state.forumsR
  );
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

  if (isLoading) return <ProfileLoadingTest />;

  return (
    <div className="flex flex-col justify-center container mx-auto">
      {/* Create Discussion Section */}
      <div className="p-4 max-w-[1000px] border-2 mt-2 ml-5 mb-4">
        <CreateDiscussion onCreate={handleCreateDiscussion} />
      </div>

      {/* Join Discussion Section */}
      <div className="p-4 sm:grid sm:grid-cols-2 mx-auto">
        <h2 className="text-xl font-bold mb-2 sm:col-span-full">
          Join Discussion
        </h2>
        {discussionsS?.map((discussion) => (
          <div
            key={discussion._id}
            onClick={() => handleSelectDiscussion(discussion)}
            className="cursor-pointer shadow-md hover:bg-gray-200 border p-2 mb-1 sm:m-2"
          >
            <DiscussionDetails discussion={discussion} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
