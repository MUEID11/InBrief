// src/Components/NewsSection.jsx

import PropTypes from "prop-types";
import NewsCard from "../Component/NewsCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSection = ({ title, articles, link, isHomeSection }) => {
  // Function to determine grid columns based on the section title
  const getGridColumns = () => {
    switch (title) {
      case "Top Latest News":
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4";
      case "Latest News":
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4";
      case "Business":
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4";
      case "Sports":
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4";
      case "Featured News":
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4";

      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    }
  };

  return (
    <div className="sm:mt-14 mt-6 px-1">
      {/* Header with Title and "View All" Link */}
      <div className="flex justify-between items-center mb-3 px-1">
        <h2 className="text-2xl md:text-3xl text-neutral-900 font-inter font-bold">{title}</h2>
        {isHomeSection && (
          <Link to={link} className="flex items-center gap-1 font-bold text-red-600 hover:text-red-700 transition-colors duration-300">
            See All <FaArrowRight />
          </Link>
        )}
      </div>

      {/* Grid of News Cards */}
      <div className={`grid ${getGridColumns()} gap-6`}>
        {Array.isArray(articles) && articles.length > 0 ? (
          articles.map((article, index) => <NewsCard key={index} article={article} />)
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
