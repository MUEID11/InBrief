import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateDiscussion from "../Components/Component/Forum/CreateDiscussionForm";
import DiscussionDetails from "../Components/Component/Forum/DiscussionDetails";
import { getForums } from "../Features/thunks/forumThunk";
import ProfileLoadingTest from "../Components/Component/ProfileLoadingTest";
import CreateForumModal from "../Components/Component/CreateForumModal";
import { FaPlusCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const ForumPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    toast("New Discussion Created!", {
      icon: "✔️",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setIsModalOpen(false);
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
      {/* <div className="p-4 max-w-[1000px] border-2 mt-2 ml-5 mb-4">
        <CreateDiscussion onCreate={handleCreateDiscussion} />
      </div> */}

      {/* Join Discussion Section */}
      <div className="p-4 mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl text-neutral-800 font-bold mb-2 sm:col-span-full">
            Join Discussions
          </h2>
          <button
            className="px-3 py-2 flex items-center gap-2 border border-red-900 hover:bg-red-950 text-red-900 hover:text-neutral-50 transition-all duration-300 rounded mb-4"
            onClick={() => setIsModalOpen(true)}
          >
            <FaPlusCircle />
            Create Forum
          </button>
          <CreateForumModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onCreateHandler={handleCreateDiscussion}
          />
        </div>
        <div className=" sm:grid sm:grid-cols-2 ">
          {discussionsS?.map((discussion) => (
            <div
              key={discussion._id}
              onClick={() => handleSelectDiscussion(discussion)}
              className="cursor-pointer shadow-md hover:bg-gray-200 border p-2 mb-1 sm:m-2"
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
    </div>
  );
};

export default ForumPage;
