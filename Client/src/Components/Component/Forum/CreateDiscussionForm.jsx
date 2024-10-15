// src/Components/Component/Forum/CreateDiscussion.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const CreateDiscussion = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const { user } = useSelector((state) => state.user); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent if title or content is empty
    if (!title || !content || !image) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);
    formData.append('username', user?.name); 
    formData.append('userImage', user?.imageUrl); 

    try {
      const response = await axios.post('http://localhost:5000/forum', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onCreate(response.data); 
      setTitle('');
      setContent(''); 
      setImage(null); 
    } catch (error) {
      console.error('Error creating discussion', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="font-bold mb-2">Create Discussion</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <textarea
        placeholder="Discussion content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full mb-4"
      ></textarea>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Create Discussion
      </button>
    </form>
  );
};

export default CreateDiscussion;
