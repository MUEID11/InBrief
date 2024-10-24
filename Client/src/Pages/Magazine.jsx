import React, { useState } from "react";
import { useSelector } from "react-redux";

const Magazine = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.user);

  // Function to handle playlist creation
  const handleCreatePlaylist = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const playlistData = {
      title: formData.get("title"),
      topic: formData.get("topic"),
      description: formData.get("description"),
      visibility: formData.get("visibility"),
      image: formData.get("image"),
    };

    console.log("Playlist Created", playlistData);
    setShowModal(false); // Close modal after submission
  };

  return (
    <div className="p-4 container max-auto">
      {/* Magazine header */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl md:text-2xl font-inter font-medium pb-4">
          Magazine
        </h3>
        <button
          className="text-sm px-3 py-1 bg-gray-300 rounded-lg mb-4"
          onClick={() => setShowModal(true)}
        >
          Create Playlist
        </button>
      </div>

      {/* Magazine content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative w-full h-70 rounded-sm overflow-hidden">
          <img
            src="https://www.brac.net/images/news/2024/Bangladesh-flood-emergency.jpg"
            alt="Magazine"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="px-1 text-white flex-col items-center justify-center">
            <h3 className="text-xl font-semibold absolute bottom-24 px-1">
              Magazine Name
            </h3>
            <h3 className="text-lg font-medium absolute bottom-16 px-1">
              Magazine Topic
            </h3>
          </div>
        </div>
        {/* 2nd */}
        <div className="relative w-full h-70 rounded-sm overflow-hidden">
          <img
            src="https://www.brac.net/images/news/2024/Bangladesh-flood-emergency.jpg"
            alt="Magazine"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="px-1 text-white flex-col items-center justify-center">
            <h3 className="text-xl font-semibold absolute bottom-24 px-1">
              Magazine Name
            </h3>
            <h3 className="text-lg font-medium absolute bottom-16 px-1">
              Magazine Topic
            </h3>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pt-20 p-6"
          onClick={() => setShowModal(false)} // Close modal when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg w-96"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2 className="text-lg font-semibold mb-2">Create Playlist</h2>
            <form onSubmit={handleCreatePlaylist}>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  className="w-full border p-1 rounded"
                  placeholder="Enter magazine name"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Topic</label>
                <input
                  type="text"
                  name="topic"
                  placeholder="Enter magazine topic"
                  className="w-full border p-1 rounded"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  placeholder="Enter magazine description "
                  className="w-full border p-1 rounded"
                  rows="2"
                  required
                ></textarea>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Visibility</label>
                <select
                  name="visibility"
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="w-full border p-1 rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Magazine;
