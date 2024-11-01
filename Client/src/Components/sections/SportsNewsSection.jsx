/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import NewsSection from "./NewsSection";

const SportsNewsSection = ({ isHomeSection = false }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  let url;
  // let url = `${import.meta.env.VITE_API_URL}/articles?category=sports`;

  if (isHomeSection) {
    if (width <= 1500 && width >= 1280) {
      url = `${import.meta.env.VITE_API_URL}/articles?category=sports&limit=3`;
    } else if (width >= 1024 && width <= 1280) {
      url = `${import.meta.env.VITE_API_URL}/articles?category=sports&limit=2`;
    } else {
      url = `${import.meta.env.VITE_API_URL}/articles?category=sports&limit=4`;
    }
  } else {
    url = `${import.meta.env.VITE_API_URL}/articles?category=sports`;
  }

  // Fetch Business News data from API
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(({ data }) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Business News:", err);
        setError(true);
        setLoading(false);
      });
  }, [url]);
  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl">Loading Sports News...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl text-red-600">Failed to load Sports News. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <NewsSection isHomeSection={isHomeSection} title="Sports" articles={articles} link="/sports" />
    </div>
  );
};

export default SportsNewsSection;
