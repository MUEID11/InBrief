// src/Components/Component/Forum/CreateDiscussion.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const CreateDiscussion = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState("");
  const [image, setImage] = useState(null);
  const { user } = useSelector((state) => state.user);

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
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUD_NAME
      }/image/upload`,
      {
        method: "POST",
        body: image,
      }
    );
    const data = await response.json();
    const url = data.secure_url;
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

    const obj = { title, content };
    obj.image = image;
    obj.username = user?.name;
    obj.userImage = user?.imageUrl;

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/forum`, obj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      onCreate(response.data);

      setImage(null);
      setTitle("");
      setContent("");
      toast("Discussion Create Successfully", {
        icon: "✅",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      e.target.reset();
    } catch (error) {
      console.error("Error creating discussion", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-2">
      <h1 className="font-bold text-xl mb-2">Create Discussion</h1>
      <input
        required
        type="text"
        placeholder="Title"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <textarea
        required
        name="content"
        placeholder="Discussion content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full mb-4"
      ></textarea>
      <input
        required
        name="image"
        type="file"
        onChange={handleChange}
        className="mb-4 border p-2 w-full"
      />
      <div className="flex justify-end">
        {loading ? (
          <ImSpinner9 className="animate-spin text-blue-500 mr-20" />
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white p-2"
          >
            Create Discussion
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateDiscussion;
