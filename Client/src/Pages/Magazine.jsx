import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const Magazine = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [magazines, setMagazines] = useState([]);

  const handleCreateMagazine = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const visibility = formData.get("visibility");
    const isPublic = visibility === "public";

    const magazineImage = formData.get("image");

    const image = new FormData();
    image.append("file", magazineImage);
    image.append("upload_preset", "a4roznw9");

    try {
      setLoading(true);

      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/image/upload`,
        {
          method: "POST",
          body: image,
        }
      );

      const imageData = await cloudinaryResponse.json();
console.log(imageData)

      if (!imageData.secure_url) {
        throw new Error("Image upload failed");
      }

      const magazineData = {
        title: formData.get("title"),
        topic: formData.get("topic"),
        description: formData.get("description"),
        isPublic,
        image: imageData.secure_url, 
        creator: user._id,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/magazines`,
        magazineData
      );

      if (response.status === 201) {
        setLoading(false);
        setShowModal(false);
        toast("Magazine Created!", {
          icon: "✔️",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        console.log("Magazine created successfully:", response.data);
      } else {
        throw new Error("Magazine creation failed");
      }
    } catch (error) {
      console.error("Error creating magazine:", error);
      toast("Something went wrong", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/magazines`
      );
      console.log(data);
      setMagazines(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  console.log(magazines);

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
        {magazines?.length > 0 &&
          magazines?.map((magazine) => (
            <div
              key={magazine?._id}
              className="relative w-full h-70 rounded-sm overflow-hidden"
            >
              <img
                src={magazine?.image}
                alt={magazine?.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="px-1 text-white flex-col items-center justify-center">
                <h3 className="text-xl font-semibold absolute bottom-24 px-1">
                  {magazine?.title}
                </h3>
                <h3 className="text-lg font-medium absolute bottom-16 px-1">
                  {magazine?.description}
                </h3>
              </div>
            </div>
          ))}
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pt-20 p-6"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-2">Create Playlist</h2>
            <form onSubmit={handleCreateMagazine}>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  className="w-full border p-1 rounded"
                  placeholder="Enter magazine title"
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
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Enter magazine description"
                  className="w-full border p-1 rounded"
                  rows="2"
                  required
                ></textarea>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">
                  Visibility
                </label>
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
                {loading ? "Creating..." : "Create"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Magazine;
