import axios from "axios";
import React, { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useSelector } from "react-redux";

const CreateForumModal = ({ isModalOpen, setIsModalOpen, onCreateHandler }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState("");
  const [image, setImage] = useState(null);
  const { user } = useSelector((state) => state.user);

  console.log(image);
  const handleChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userImage = e.target.files[0];
    const image = new FormData();
    if (!image) {
      return;
    }
    image.append("file", userImage);
    image.append("upload_preset", "a4roznw9");
    const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
      method: "POST",
      body: image,
    });
    const data = await response.json();
    const url = data.secure_url;
    console.log(url);
    if (!url) {
      setLoading(false);
      return alert("image upload failed");
    } else {
      setImage(url);
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('content', content);
    // formData.append('image', image);
    // formData.append('username', user?.name);
    // formData.append('userImage', user?.imageUrl);

    const obj = { title, content };
    obj.image = image;
    obj.username = user?.name;
    obj.userImage = user?.imageUrl;

    console.log("megh", obj);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/forum`, obj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      onCreateHandler(response.data);
      setImage(null);
      setTitle("");
      setContent("");
      e.target.reset();
    } catch (error) {
      console.error("Error creating discussion", error);
    }
  };

  return (
    <div
      className={`fixed ${
        isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-all duration-300 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pt-24 p-6`}
      onClick={() => setIsModalOpen(false)}>
      <div className="bg-slate-50 backdrop-blur-lg shadow-xl p-6 max-w-[700px] rounded " onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className="p-2">
          <h1 className="font-bold text-neutral-800 text-2xl mb-3">Create Discussion</h1>
          <input required type="text" placeholder="Title" value={title} name="title" onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full mb-4" />
          <textarea
            required
            name="content"
            placeholder="Discussion content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 w-full h-36 mb-4"></textarea>
          <input required name="image" type="file" onChange={handleChange} className="mb-4 border p-2 w-full" />
          <div className="flex justify-end">
            {loading ? (
              <ImSpinner9 className="animate-spin text-red-900 mr-20" />
            ) : (
              <button type="submit" disabled={loading} className="bg-red-900 hover:bg-red-950 text-white px-4 py-3">
                Create Discussion
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForumModal;
