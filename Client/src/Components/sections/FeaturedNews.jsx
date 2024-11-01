/* eslint-disable no-unused-vars */
// src/Components/FeaturedNews.jsx

import { useEffect, useState } from "react";
import NewsSection from "./NewsSection";

const FeaturedNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  let url;
  if (width <= 1536 && width >= 1280) {
    url = `${import.meta.env.VITE_API_URL}/articles/featured?limit=6`;
  } else if (width >= 1024 && width <= 1280) {
    url = `${import.meta.env.VITE_API_URL}/articles/featured?limit=4`;
  } else if (width >= 1536) {
    url = `${import.meta.env.VITE_API_URL}/articles/featured?limit=8`;
  } else {
    url = `${import.meta.env.VITE_API_URL}/articles/featured?limit=4`;
  }

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Featured News:", err);
        setError(true);
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl">Loading Featured News...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl text-red-600">Failed to load Featured News. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto m-2">
      <NewsSection title="Featured News" articles={articles} link="/latest-news" isHomeSection={false} />
    </div>
  );
};

export default FeaturedNews;
