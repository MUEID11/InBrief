import { useState } from "react";
import PropTypes from "prop-types";

const NewsCard = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // // Toggle the expanded state to show full description
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="shadow-lg p-4 rounded-3xl flex flex-col transform hover:scale-105 transition-transform duration-300">
      {/* Link wrapping Image */}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read more about ${article.headline}`}
      >
        <img
          src={article.image}
          alt={article.headline}
          className="rounded-2xl h-56 object-cover w-full"
          loading="lazy"
        />
      </a>

      {/* Info Section */}
      <div className="mt-4">
        {/* Source Section */}
        <div className="flex gap-2 items-center">
          {/* Replace the placeholder with actual source icon */}
          <img
            src="https://via.placeholder.com/20" // Placeholder for the source icon
            className="size-5 bg-red-700 rounded-full object-cover"
            alt={`${article.source}`}
          />
          <span className="text-sm text-gray-600">{article.source}</span>
        </div>

        {/* Headline */}
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h3 className="font-bold text-lg mt-2">{article.headline}</h3>
        </a>

      

        {/* Description */}
        <p className="text-sm text-gray-600  mb-4">
          {isExpanded
            ? article.description
            : `${article.description.substring(0, 100)}...`}
        </p>

          {/* Date and Category */}
          <div className="flex gap-3 items-center">
          <p className="text-red-500 font-semibold">{article.region}</p>
          <span className="text-xs">
            {new Date(article.date).toLocaleDateString()}
          </span>
        </div>

        {/* Read More Button */}
        <button
          onClick={toggleDescription}
          className="mt-auto text-red-500 text-sm hover:underline "
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>

      </div>
    </article>
    
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
