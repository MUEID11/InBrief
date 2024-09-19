// src/Components/NewsSection.jsx

import PropTypes from 'prop-types';
import NewsCard from './NewsCard';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSection = ({ title, articles, link }) => {
  // Function to determine grid columns based on the section title
  const getGridColumns = () => {
    switch (title) {
      case 'Latest News':
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      case 'Business':
      case 'Sports':
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2';
      default:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2';
    }
  };

  return (
    <div className="mt-14">
      {/* Header with Title and "View All" Link */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-3xl">{title}</h2>
        <Link
          to={link}
          className="flex items-center gap-1 font-bold text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          View All <FaArrowRight />
        </Link>
      </div>

      {/* Grid of News Cards */}
      <div className={`grid ${getGridColumns()} gap-4`}>
        {Array.isArray(articles) && articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p className="text-center col-span-full">No articles available.</p>
        )}
      </div>
    </div>
  );
};

// PropTypes for type checking
NewsSection.propTypes = {
  title: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  link: PropTypes.string.isRequired,
};

// Default Props in case props are not passed
NewsSection.defaultProps = {
  articles: [],
};

export default NewsSection;
