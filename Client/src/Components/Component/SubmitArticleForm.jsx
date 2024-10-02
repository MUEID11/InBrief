import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Importing framer-motion

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
  
  // State to manage if the input is focused (clicked)
  const [isFocused, setIsFocused] = useState(false);

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
    <motion.div
      className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-3xl mt-10 relative overflow-hidden" // Light background with overflow hidden
      animate={{
        y: [0, 10, 0], // Moving the form up and down continuously
      }}
      transition={{
        repeat: Infinity, // Infinite loop
        duration: 3, // Slow motion effect
        ease: "easeInOut",
      }}
    >
      {/* New News-themed GIF Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif" // News-themed GIF
          alt="background animation"
          className="w-full h-full object-cover opacity-10"
          animate={{
            x: [0, 50, 0], // Slow horizontal movement of the background
          }}
          transition={{
            repeat: Infinity,
            duration: 10, // Slow movement for a smooth effect
            ease: "linear",
          }}
        />
      </div>

      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-8 relative z-10"
        animate={{
          y: [0, -10, 0], // Spring-like jumping effect
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5, // Speed of the spring
          ease: "easeInOut",
          type: "spring", // Spring animation type
          stiffness: 100, // Spring stiffness for more bounce
        }}
      >
        Create New Article
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Title Input */}
        <motion.div
          className="flex flex-col transform transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <label className="text-lg font-semibold text-gray-800 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={articleData.title}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)} // Set focus to true on focus
            onBlur={() => setIsFocused(false)} // Set focus to false on blur
            required
            className={`border-2 rounded-xl p-3 bg-slate-300 text-gray-800 placeholder-gray-400 focus:outline-none 
                        focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? "border-gradient-to-r from-red-500 to-pink-500" : "border-gray-300"}`} // Change class based on focus
            placeholder="Enter article title"
          />
        </motion.div>

        {/* Description Input */}
        <motion.div
          className="flex flex-col transform transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <label className="text-lg font-semibold text-gray-800 mb-1">Description</label>
          <textarea
            name="description"
            value={articleData.description}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)} // Set focus to true on focus
            onBlur={() => setIsFocused(false)} // Set focus to false on blur
            required
            className={`border-2 rounded-xl p-3 bg-slate-300 text-gray-800 placeholder-gray-400 focus:outline-none 
                        focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? "border-gradient-to-r from-red-500 to-pink-500" : "border-gray-300"}`} // Change class based on focus
            rows="4"
            placeholder="Enter article description"
          />
        </motion.div>

        {/* Image URL Input */}
        <motion.div
          className="flex flex-col transform transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <label className="text-lg font-semibold text-gray-800 mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={articleData.image}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)} // Set focus to true on focus
            onBlur={() => setIsFocused(false)} // Set focus to false on blur
            required
            className={`border-2 rounded-xl p-3 bg-slate-300 text-gray-800 placeholder-gray-400 focus:outline-none 
                        focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? "border-gradient-to-r from-red-500 to-pink-500" : "border-gray-300"}`} // Change class based on focus
            placeholder="Enter image URL"
          />
        </motion.div>

        {/* Source Input */}
        <motion.div
          className="flex flex-col transform transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <label className="text-lg font-semibold text-gray-800 mb-1">Source</label>
          <input
            type="text"
            name="source"
            value={articleData.source}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)} // Set focus to true on focus
            onBlur={() => setIsFocused(false)} // Set focus to false on blur
            required
            className={`border-2 rounded-xl p-3 bg-slate-300 text-gray-800 placeholder-gray-400 focus:outline-none 
                        focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? "border-gradient-to-r from-red-500 to-pink-500" : "border-gray-300"}`} // Change class based on focus
            placeholder="Enter source"
        />
        </motion.div>

        {/* URL Input */}
        <motion.div
          className="flex flex-col transform transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <label className="text-lg font-semibold text-gray-800 mb-1">URL</label>
          <input
            type="text"
            name="url"
            value={articleData.url}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)} // Set focus to true on focus
            onBlur={() => setIsFocused(false)} // Set focus to false on blur
            required
            className={`border-2 rounded-xl p-3 bg-slate-300 text-gray-800 placeholder-gray-400 focus:outline-none 
                        focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? "border-gradient-to-r from-red-500 to-pink-500" : "border-gray-300"}`} // Change class based on focus
            placeholder="Enter URL"
          />
        </motion.div>

        {/* Category Input */}
        <motion.div
          className="flex flex-col transform transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <label className="text-lg font-semibold text-gray-800 mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={articleData.category}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)} // Set focus to true on focus
            onBlur={() => setIsFocused(false)} // Set focus to false on blur
            required
            className={`border-2 rounded-xl p-3 bg-slate-300 text-gray-800 placeholder-gray-400 focus:outline-none 
                        focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? "border-gradient-to-r from-red-500 to-pink-500" : "border-gray-300"}`} // Change class based on focus
            placeholder="Enter category"
          />
        </motion.div>

        {/* Region Input */}
        <motion.div
          className="flex flex-col transform transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <label className="text-lg font-semibold text-gray-800 mb-1">Region</label>
          <input
            type="text"
            name="region"
            value={articleData.region}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)} // Set focus to true on focus
            onBlur={() => setIsFocused(false)} // Set focus to false on blur
            required
            className={`border-2 rounded-xl p-3 bg-slate-300 text-gray-800 placeholder-gray-400 focus:outline-none 
                        focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? "border-gradient-to-r from-red-500 to-pink-500" : "border-gray-300"}`} // Change class based on focus
            placeholder="Enter region"
          />
        </motion.div>

        {/* Posted By Input */}
        <motion.div
          className="flex flex-col transform transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <label className="text-lg font-semibold text-gray-800 mb-1">Posted By</label>
          <input
            type="text"
            name="postedBy"
            value={articleData.postedBy}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)} // Set focus to true on focus
            onBlur={() => setIsFocused(false)} // Set focus to false on blur
            required
            className={`border-2 rounded-xl p-3 bg-slate-300 text-gray-800 placeholder-gray-400 focus:outline-none 
                        focus:ring-2 focus:ring-red-500 transition-all duration-300 ${isFocused ? "border-gradient-to-r from-red-500 to-pink-500" : "border-gray-300"}`} // Change class based on focus
            placeholder="Enter your name"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full p-3 bg-gradient-to-r from-red-800 to-pink-400 text-white font-semibold rounded-xl shadow-lg hover:from-red-800 hover:to-pink-300 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Submit Article
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ArticleForm;
