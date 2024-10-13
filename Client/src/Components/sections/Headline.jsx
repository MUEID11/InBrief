import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBullhorn, FaExclamationCircle, FaNewspaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Headline = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const getData = async () => {
            try {
              const {data} = await axios.get(
                `${import.meta.env.VITE_API_URL}/articles?sort=dsc&limit=8`
              );
              
              setArticles(data.data);
              setLoading(false);
            } catch (error) {
              console.error("Error fetching articles:", error);
              setError(true);
              setLoading(false);
            }
          };
          getData()
      }, []);
console.log(articles)

      if (loading) {
        return (
          <div className="flex items-center justify-center p-4">
            <p className="text-xl">Loading headlines...</p>
          </div>
        );
      }
    
      if (error) {
        return (
          <div className="flex items-center justify-center p-4">
            <p className="text-xl text-red-600">
              Failed to load headlines. Please try again later.
            </p>
          </div>
        );
      }


    return (
        <div className="flex items-center mb-4 ">
        <div className="bg-gray-200 flex items-center px-4 py-2 rounded-l-lg">
          <FaNewspaper className="text-red-600 text-xl" />
          <span className="text-gray-900 font-bold ml-2">Headlines</span>
        </div>
  
        <div className="bg-white flex-1  rounded-r-lg ">
          <marquee className="text-gray-800 text-lg font-semibold">
            {articles.map((article, index) => (
              <Link
              key={index}
              to={`/articles/${article?._id}`}
              className="mx-4 hover:text-red-500"
            >
              {article.title}
            </Link>
            ))}
          </marquee>
        </div>
      </div>
    );
};

export default Headline;