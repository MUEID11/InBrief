import { useEffect, useState } from "react";
import NewsSection from "./NewsSection";

const SportsNewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch Sports News data from fakedata.json
  useEffect(() => {
    fetch("/fakedata.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.sportsNews);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Sports News:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

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
        <p className="text-xl text-red-600">
          Failed to load Sports News. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto grid gird-cols-1">
      <NewsSection
        title="Sports News"
        articles={articles}
        link="/sports-news"
      />
    </div>
  );
};

export default SportsNewsSection;
