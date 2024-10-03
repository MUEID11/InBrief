/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import NewsSection from './NewsSection';

const TopLatestNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  let url;
  if (width <= 1536 && width >= 1280) {
    url = `http://localhost:5000/articles?sort=dsc&limit=6`;
  } else if (width >= 1024 && width <= 1280) {
    url = `http://localhost:5000/articles?sort=dsc&limit=4`;
  } else if (width >= 1536) {
    url = `http://localhost:5000/articles?sort=dsc&limit=8`;
  } else {
    url = `http://localhost:5000/articles?sort=dsc&limit=4`;
  }

  // Fetch Latest News data from fakedata.json
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(({ data }) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching Latest News:', err);
        setError(true);
        setLoading(false);
      });
  }, [url]);

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
      <NewsSection title="Latest News" articles={articles} link="/latest-news" />
    </div>
  );
};

export default TopLatestNews;
