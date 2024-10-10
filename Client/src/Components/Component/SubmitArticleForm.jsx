import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ArticleForm = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [articleData, setArticleData] = useState({
    title: '',
    description: '',
    image: '',
    url: '',
    source: '',
    category: '',
    region: '',
  });

  // State to manage if the input is focused (clicked)
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticleData({ ...articleData, [name]: value });
  };

  const handleSubmit = async (e) => {
    articleData.category = articleData.category.toLowerCase();
    console.log(articleData);
    e.preventDefault();
    try {
      const updatedArticleData = {
        ...articleData,
        postedBy: user?.email,
      };

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/articles`, updatedArticleData);
      console.log(response);
      toast.success('Article added successfully');
      navigate('/dashboard/my-posts')
      setArticleData({
        title: '',
        description: '',
        image: '',
        url: '',
        source: '',
        category: '',
        region: '',
      });
    } catch (error) {
      console.error('Error creating article:', error);
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-sm mt-10 relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 relative z-10">Create New Article</h2>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        {/* Title Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={articleData.title}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? 'border-gradient-to-r from-red-500 to-pink-500' : 'border-gray-300'}`}
            placeholder="Enter article title"
          />
        </div>

        {/* Description Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">Description</label>
          <textarea
            name="description"
            value={articleData.description}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? 'border-gradient-to-r from-red-500 to-pink-500' : 'border-gray-300'}`}
            rows="4"
            placeholder="Enter article description"
          />
        </div>

        {/* Image URL Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={articleData.image}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? 'border-gradient-to-r from-red-500 to-pink-500' : 'border-gray-300'}`}
            placeholder="Enter image URL"
          />
        </div>

        {/* Source Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">Source</label>
          <input
            type="text"
            name="source"
            value={articleData.source}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? 'border-gradient-to-r from-red-500 to-pink-500' : 'border-gray-300'}`}
            placeholder="Enter source"
          />
        </div>

        {/* URL Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">URL</label>
          <input
            type="text"
            name="url"
            value={articleData.url}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? 'border-gradient-to-r from-red-500 to-pink-500' : 'border-gray-300'}`}
            placeholder="Enter URL"
          />
        </div>

        {/* Category Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={articleData.category}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? 'border-gradient-to-r from-red-500 to-pink-500' : 'border-gray-300'}`}
            placeholder="Enter category"
          />
        </div>

        {/* Region Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">Region</label>
          <input
            type="text"
            name="region"
            value={articleData.region}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? 'border-gradient-to-r from-red-500 to-pink-500' : 'border-gray-300'}`}
            placeholder="Enter region"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-sm shadow-lg hover:from-red-800 hover:to-pink-300 transition-all duration-300">
          Submit Article
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
