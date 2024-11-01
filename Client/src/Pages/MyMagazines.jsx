import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { PiEmptyBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import ProfileLoadingTest from "../Components/Component/ProfileLoadingTest";

const MyMagazines = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [magazines, setMagazines] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCreateMagazine = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const visibility = formData.get("visibility");
    const isPublic = visibility === "public";

    const magazineImage = formData.get("image");

    const image = new FormData();
    image.append("file", magazineImage);
    image.append("upload_preset", "a4roznw9");

    try {
      const cloudinaryResponse = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: image,
      });

      const imageData = await cloudinaryResponse.json();
      console.log(imageData);

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

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/magazines`, magazineData);

      if (response.status === 201) {
        setShowModal(false);
        getData();
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
        setLoading(false);
        throw new Error("Magazine creation failed");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
      setLoading(true);
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/magazines?creatorId=${user?._id}`);
      console.log(data);
      setMagazines(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setLoading(false);
    }
  };

  console.log(magazines);

  return (
    <div className="p-4 container max-auto">
      {/* Magazine header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-inter font-medium mb-2">My Magazines</h3>
          <p className="text-neutral-600 max-w-[600px] text-sm">
            Your curated universe of magazines—whether private or shared with the world, each collection reflects your unique interests and passions
          </p>
        </div>
        <button className="text-sm px-3 py-2 flex items-center gap-2 border border-red-500 text-red-500 rounded-lg mb-4" onClick={() => setShowModal(true)}>
          <FaPlusCircle />
          Create Magazine
        </button>
      </div>

      {/* Magazine content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {magazines?.length > 0 &&
          magazines?.map((magazine) => (
            <Link to={`/magazines/${magazine?._id}`}>
              {" "}
              <div key={magazine?._id} className="relative group w-full h-80 rounded-sm overflow-hidden">
                <img src={magazine?.image} alt={magazine?.title} className="w-full h-full object-cover opacity-90 group-hover:scale-[1.07] transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="px-1 text-white absolute bottom-8 ">
                  <h3 className="text-2xl font-semibold px-1 mb-1">{magazine?.title}</h3>
                  <h3 className="font-medium text-neutral-200 text-sm px-1">
                    {magazine?.description?.length > 70 ? magazine?.description?.substring(0, 70) : magazine?.description}
                    {magazine?.description?.length > 70 && "..."}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pt-24 p-6" onClick={() => setShowModal(false)}>
          <div className="bg-white p-6 rounded-lg w-96" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-semibold mb-2 ">Create Playlist</h2>
            <form onSubmit={handleCreateMagazine}>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input type="text" name="title" className="w-full border p-1 rounded" placeholder="Enter magazine title" required />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Topic</label>
                <input type="text" name="topic" placeholder="Enter magazine topic" className="w-full border p-1 rounded" required />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea name="description" placeholder="Enter magazine description" className="w-full border p-1 rounded" rows="2" required></textarea>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Visibility</label>
                <select name="visibility" className="w-full border p-2 rounded" required>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Image</label>
                <input type="file" name="image" accept="image/*" className="w-full border p-1 rounded" required />
              </div>
              <button disabled={loading} type="submit" className={`${loading ? "bg-gray-400" : "bg-blue-500"} text-white px-4 py-2 rounded`}>
                {loading ? "Creating..." : "Create"}
              </button>
            </form>
          </div>
        </div>
      )}
      {loading && <ProfileLoadingTest />}
      {!magazines?.length > 0 && (
        <>
          <h3 className="text-center text-xl mt-20 font-medium text-red-500 flex justify-center items-center gap-2">
            {" "}
            <span>
              {" "}
              <PiEmptyBold />
            </span>{" "}
            <span>No Magazine Found</span>
          </h3>
        </>
      )}
    </div>
  );
};

export default MyMagazines;
