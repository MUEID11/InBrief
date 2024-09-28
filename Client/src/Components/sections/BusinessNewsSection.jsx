import { useEffect, useState } from "react";
import NewsSection from "./NewsSection";

const BusinessNewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch Business News data from API
  useEffect(() => {
    fetch("http://localhost:5000/articles/business")
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
  }, []);
  console.log(articles);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl">Loading Business News...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl text-red-600">
          Failed to load Business News. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="m-2 container mx-auto">
      <NewsSection title="Business" articles={articles} link="/business" />
    </div>
  );
};

export default BusinessNewsSection;
