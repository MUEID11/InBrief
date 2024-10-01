import React, { useState } from "react";
import axios from "axios";

const ArticleForm = () => {
  const [articleData, setArticleData] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
    source: "",
    category: "",
    region: "",
    postedBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticleData({ ...articleData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/articles", articleData);
      console.log("Article created:", response.data);
      setArticleData({
        title: "",
        description: "",
        image: "",
        url: "",
        source: "",
        category: "",
        region: "",
        postedBy: "",
      });
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 shadow-lg rounded-lg mt-10 relative">
      {/* Adding a GIF background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://media.giphy.com/media/26Fxy3Iz1ari8oytO/giphy.gif"
          alt="background animation"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <h2 className="text-4xl font-bold text-center text-white mb-8 relative z-10">
        Create New Article
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 relative z-10 animate-pulse" // adding pulse animation
      >
        {/* Title Input */}
        <div className="flex flex-col transform hover:translate-y-1 transition-all duration-300">
          <label className="text-lg font-semibold text-white mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={articleData.title}
            onChange={handleChange}
            required
            className="border-none rounded-md p-3 bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            placeholder="Enter article title"
          />
        </div>

        {/* Description Input */}
        <div className="flex flex-col transform hover:translate-y-1 transition-all duration-300">
          <label className="text-lg font-semibold text-white mb-1">Description</label>
          <textarea
            name="description"
            value={articleData.description}
            onChange={handleChange}
            required
            className="border-none rounded-md p-3 bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            rows="4"
            placeholder="Enter article description"
          />
        </div>

        {/* Image URL Input */}
        <div className="flex flex-col transform hover:translate-y-1 transition-all duration-300">
          <label className="text-lg font-semibold text-white mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={articleData.image}
            onChange={handleChange}
            required
            className="border-none rounded-md p-3 bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            placeholder="Enter image URL"
          />
        </div>

        {/* Source Input */}
        <div className="flex flex-col transform hover:translate-y-1 transition-all duration-300">
          <label className="text-lg font-semibold text-white mb-1">Source</label>
          <input
            type="text"
            name="source"
            value={articleData.source}
            onChange={handleChange}
            required
            className="border-none rounded-md p-3 bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            placeholder="Enter source"
          />
        </div>

        {/* URL Input */}
        <div className="flex flex-col transform hover:translate-y-1 transition-all duration-300">
          <label className="text-lg font-semibold text-white mb-1">URL</label>
          <input
            type="text"
            name="url"
            value={articleData.url}
            onChange={handleChange}
            required
            className="border-none rounded-md p-3 bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            placeholder="Enter URL"
          />
        </div>

        {/* Category Input */}
        <div className="flex flex-col transform hover:translate-y-1 transition-all duration-300">
          <label className="text-lg font-semibold text-white mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={articleData.category}
            onChange={handleChange}
            required
            className="border-none rounded-md p-3 bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            placeholder="Enter category"
          />
        </div>

        {/* Region Input */}
        <div className="flex flex-col transform hover:translate-y-1 transition-all duration-300">
          <label className="text-lg font-semibold text-white mb-1">Region</label>
          <input
            type="text"
            name="region"
            value={articleData.region}
            onChange={handleChange}
            className="border-none rounded-md p-3 bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            placeholder="Enter region"
          />
        </div>

        {/* Posted By Input */}
        <div className="flex flex-col transform hover:translate-y-1 transition-all duration-300">
          <label className="text-lg font-semibold text-white mb-1">Posted By</label>
          <input
            type="text"
            name="postedBy"
            value={articleData.postedBy}
            onChange={handleChange}
            required
            className="border-none rounded-md p-3 bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            placeholder="Enter your name"
          />
        </div>

        {/* Submit Button with movement effect */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          Submit Article
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
