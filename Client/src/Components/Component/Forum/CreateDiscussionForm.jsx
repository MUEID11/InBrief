// src/Components/Component/Forum/CreateDiscussion.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const CreateDiscussion = ({ onCreate }) => {
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
      const response = await axios.post("http://localhost:5000/forum", obj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      onCreate(response.data);
      setImage(null);
      setTitle("");
      setContent("");
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
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2"
        >
          Create Discussion
        </button>
      </div>
    </form>
  );
};

export default CreateDiscussion;
