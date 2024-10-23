import React, { useState } from "react";

const Magazine = () => {
  const [showModal, setShowModal] = useState(false); // State to toggle modal visibility

  // Function to handle playlist creation form submission
  const handleCreatePlaylist = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const playlistData = {
      title: formData.get("title"),
      topic: formData.get("topic"),
      visibility: formData.get("visibility"),
      image: formData.get("image")
    };

    console.log("Playlist Created", playlistData);
    setShowModal(false); // Close modal after submission
  };

  return (
    <div className="p-4">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl md:text-2xl font-inter font-medium pb-4">Magazine</h3>
        <button
          className="text-sm px-3 py-1 bg-gray-300 rounded-lg mb-4"
          onClick={() => setShowModal(true)}
        >
          Create Playlist
        </button>
      </div>

      {/* Magazine content */}
      <div>
        <div className="relative w-full h-60 rounded-sm overflow-hidden">
          <img
            src="https://www.brac.net/images/news/2024/Bangladesh-flood-emergency.jpg"
            alt="Magazine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="px-1 text-white">
            <h3 className="text-xl font-semibold absolute bottom-24 left-8">
              Magazine Name
            </h3>
            <h3 className="text-lg font-medium absolute bottom-16 left-8">
              Magazine Topic
            </h3>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)} 
        >
          <div
            className="bg-white p-6 rounded-lg w-96"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2 className="text-xl font-semibold mb-4">Create Playlist</h2>
            <form onSubmit={handleCreatePlaylist}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  className="w-full border p-2 rounded"
                  placeholder="Enter magazine name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Topic</label>
                <input
                  type="text"
                  name="topic"
                   placeholder="Enter magazine topic"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
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
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="w-full border p-2 rounded"
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
