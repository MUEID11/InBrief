import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ArticleForm = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [articleData, setArticleData] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
    source: "",
    category: "",
    region: "",
  });

  // State to manage if the input is focused (clicked)
  const [isFocused, setIsFocused] = useState(false);
  const handleImageChange = async (e) => {
    e.preventDefault();
    const articleImage = e.target.files[0];
    const image = new FormData();
    if (!image) {
      return;
    }
    image.append("file", articleImage);
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
      return alert("image upload failed");
    } else {
      setArticleData({ ...articleData, image: url });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticleData({ ...articleData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    articleData.category = articleData.category.toLowerCase();

    try {
      const updatedArticleData = {
        ...articleData,
        postedBy: user?.email,
        createdBy: user?._id,
        status: "pending", // Set the initial status to 'pending'
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/articles`,
        updatedArticleData
      );
      if (response.status === 201) {
        toast.success("Article submitted for approval");
        navigate("/dashboard/user/my-posts");
        // Clear the form after submission
        setArticleData({
          title: "",
          description: "",
          image: "",
          url: "",
          source: "",
          category: "",
          region: "",
        });
      } else {
        toast.error("Failed to submit the article");
      }
    } catch (error) {
      console.error("Error creating article:", error);
      toast.error("Error creating article");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-sm mt-10 relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 relative z-10">
        Create New Article
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        {/* Title Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={articleData.title}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
                isFocused
                  ? "border-gradient-to-r from-red-500 to-pink-500"
                  : "border-gray-300"
              }`}
            placeholder="Enter article title"
          />
        </div>

        {/* Description Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={articleData.description}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
                isFocused
                  ? "border-gradient-to-r from-red-500 to-pink-500"
                  : "border-gray-300"
              }`}
            rows="4"
            placeholder="Enter article description"
          />
        </div>

        {/* Image URL Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">
            Image URL
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
                isFocused
                  ? "border-gradient-to-r from-red-500 to-pink-500"
                  : "border-gray-300"
              }`}
            placeholder="Enter image URL"
          />
        </div>

        {/* Source Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">
            News Source
          </label>
          <input
            type="text"
            name="source"
            value={articleData.source}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
                isFocused
                  ? "border-gradient-to-r from-red-500 to-pink-500"
                  : "border-gray-300"
              }`}
            placeholder="e.g CNN | BBC"
          />
        </div>

        {/* URL Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">
            Link To News
          </label>
          <input
            type="text"
            name="url"
            value={articleData.url}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
                isFocused
                  ? "border-gradient-to-r from-red-500 to-pink-500"
                  : "border-gray-300"
              }`}
            placeholder="Enter News URL"
          />
        </div>

        {/* Category Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={articleData.category}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
                isFocused
                  ? "border-gradient-to-r from-red-500 to-pink-500"
                  : "border-gray-300"
              }`}
            placeholder="e.g War | Politics | Human Rights"
          />
        </div>

        {/* Region Input */}
        <div className="flex flex-col transform transition-all duration-300">
          <label className="text-lg font-semibold text-gray-800 mb-1">
            Region
          </label>
          <input
            type="text"
            name="region"
            value={articleData.region}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`border-2 rounded-sm p-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
                isFocused
                  ? "border-gradient-to-r from-red-500 to-pink-500"
                  : "border-gray-300"
              }`}
            placeholder="e.g Bangladesh | England | Palestine"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-red-600 rounded-sm text-white font-semibold rounded-sm shadow-lg hover:bg-red-700 transition-all duration-300"
        >
          Submit Article
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
