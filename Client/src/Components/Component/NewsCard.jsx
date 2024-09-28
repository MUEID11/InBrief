import PropTypes from "prop-types";
import { FaBookmark, FaHeart, FaRegHeart } from "react-icons/fa";

const NewsCard = ({ article }) => {
  return (
    <article className="shadow-lg p-5 border border-red-600 border-r-4 border-b-4 flex flex-col transition-all duration-300 ease-in-out hover:border-gray-600 hover:scale-105 h-full">
      {/* Link wrapping Image */}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read more about ${article.title}`}
      >
        <img
          src={article.image}
          alt={article.title}
          className="h-56 object-cover w-full"
          loading="lazy"
        />
      </a>

      {/* Info Section */}
      <div className="mt-4 flex flex-col flex-grow">
        {/* Source Section */}
        <div className="flex gap-2 items-center">
          <img
            src="https://via.placeholder.com/20" // Placeholder for the source icon
            className="size-5 bg-red-700 rounded-full object-cover"
            alt={`${article?.source.name}`}
          />
          <span className="text-sm text-gray-600">{article?.source.url}</span>
        </div>

        {/* Headline */}
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h3 className="font-bold text-lg mt-2">{article?.title}</h3>
        </a>
        {/* Date and Category */}
        <div className="flex gap-3 items-center my-2">
          <p className="text-red-600 font-semibold">{article?.region}</p>
          <span className="text-xs">
            {new Date(article.date).toLocaleDateString()}
          </span>
        </div>
        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          {`${article.description.substring(0, 100)}...`}
        </p>
      </div>
      <div className="flex gap-3 items-center justify-between mb-2">
                <p className="text-red-600 font-semibold">{article?.category ? article?.category : "Category"}</p>
                <span className="text-xs">{article?.date}</span>
              </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2">
          <button><FaHeart className="text-red-600 text-lg"/></button>
          <p className="text-gray-700 text-sm">3 likes</p>
          </div>
        </div>
        {/* Read More Button */}
        <button className="text-red-600 self-end font-medium">Read More</button>
        
      </div>
    </article>
  );
};

// PropTypes for type checking
NewsCard.propTypes = {
  article: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string.isRequired,
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
