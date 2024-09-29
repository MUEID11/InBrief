import { useEffect, useState } from 'react';
import NewsSection from './NewsSection';

const TopLatestNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch Latest News data from fakedata.json
  useEffect(() => {
    fetch('/fakedata.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.latestNews);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching Latest News:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl">Loading Latest News...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl text-red-600">Failed to load Latest News. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto m-2">
      <NewsSection title="Top Latest News" articles={articles} link="/latest-news" />
    </div>
  );
};

export default TopLatestNews;
