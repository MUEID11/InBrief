// src/Components/BusinessNewsSection.jsx

import React, { useEffect, useState } from 'react';
import NewsSection from './NewsSection';

const BusinessNewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch Business News data from fakedata.json
  useEffect(() => {
    fetch('/fakedata.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.businessNews);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching Business News:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

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
        <p className="text-xl text-red-500">Failed to load Business News. Please try again later.</p>
      </div>
    );
  }

  return (
    <NewsSection
      title="Business"
      articles={articles}
      link="/business"
    />
  );
};

export default BusinessNewsSection;
