// src/components/ArticleList.js
import { useEffect, useState } from "react";
import axios from "axios";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/articles`
        );
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article._id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={article.image}
              alt={article.title}
              className="h-40 w-full object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">{article.title}</h3>
            <p className="text-gray-600 mt-2">
              {article.description.substring(0, 100)}...
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Source: {article.source}
            </p>
            <p className="text-gray-500 text-sm">
              Category: {article.category}
            </p>
            <p className="text-gray-500 text-sm">
              Posted By: {article.postedBy}
            </p>
            <div className="flex items-center justify-between mt-4">
              {/* <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                onClick={() => handleLike(article._id)}
              >
                Like
              </button>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                onClick={() => handleBookmark(article._id)}
              >
                Bookmark
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
