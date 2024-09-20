// src/Components/NewsCard.jsx

import { useState } from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state to show full description
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read more about ${article.headline}`}
      >
        <img
          src={article.image}
          alt={article.headline}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </a>

      {/* Information Section */}
      <div className="flex flex-col flex-grow p-4">
        {/* Headline */}
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex-grow">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white hover:text-blue-600 transition-colors duration-300 mb-2">
            {article.headline}
          </h3>
        </a>

        {/* Source and Date */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {`${article.source} - ${new Date(article.date).toLocaleDateString()}`}
        </p>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {isExpanded ? article.description : `${article.description.substring(0, 100)}...`}
        </p>

        {/* Read More Button */}
        <button
          onClick={toggleDescription}
          className="mt-auto text-red-500 text-sm hover:underline"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

// PropTypes for type checking
NewsCard.propTypes = {
  article: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    summary: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    source: PropTypes.string,
    region: PropTypes.string,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsCard;
