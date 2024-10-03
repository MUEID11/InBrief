/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";
import { LuArrowBigUpDash } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoBookmarksOutline, IoBookmarksSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const NewsCard = ({ article }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const [likes, setLikes] = useState(article?.likes?.length || 0);
  const [liked, setLiked] = useState(article?.likes?.includes(user?.email));
  const [bookmarked, setBookmarked] = useState(
    article?.bookmarks?.includes(user?.email)
  );

  const handleLike = async (id) => {
    if (!user.email) {
      navigate("/signin");

      return;
    }
    try {
      const response = await fetch(
        "${import.meta.env.VITE_API_URL}/articles/addLike",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ articleId: id, userEmail: user?.email }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (liked) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
      setLiked(!liked);
      console.log(data.message);
    } catch (error) {
      console.error("Failed to toggle like:", error);
    }
  };

  const handleBookmark = async (id) => {
    if (!user.email) {
      navigate("/signin");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/articles/addBookmark`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ articleId: id, userEmail: user?.email }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(response);

      const data = await response.json();
      console.log("bookmarked resp=>", data);

      setBookmarked(!bookmarked);

      toast(data.message, {
        icon: "✔️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="shadow-lg p-5 border border-red-600 border-r-4 border-b-4 flex flex-col transition-all duration-300 ease-in-out hover:border-gray-600 hover:scale-105 h-full rounded-sm">
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
            alt={`${article?.source?.url}`}
          />
          <span className="text-sm text-gray-600">{article?.source?.name}</span>
        </div>

        {/* Headline */}
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h3 className="font-bold text-lg mt-2">{article?.headline}</h3>
        </a>
        {/* Date and Category */}
        <div className="flex gap-3 items-center my-2">
          <p className="text-red-600 font-semibold">{article?.region}</p>
          <span className="text-xs">
            {new Date(article.date).toLocaleDateString()}
          </span>
        </div>
        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 flex-grow">{`${article.description.substring(
          0,
          100
        )}...`}</p>
      </div>
      <div className="flex gap-3 items-center justify-between mb-2">
        <p className="text-red-600 font-semibold">
          {article?.category ? article?.category : "Category"}
        </p>
        <span className="text-xs">{article?.date}</span>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2">
            <button onClick={() => handleLike(article._id)} className="">
              <LuArrowBigUpDash
                className={`text-2xl font-medium ${
                  liked
                    ? "text-green-600 bg-green-200 rounded-full"
                    : "text-gray-500 bg-gray-200 rounded-full"
                }`}
              />
            </button>
            <p className="text-gray-700 text-sm"> {likes} Votes</p>
            {bookmarked ? (
              <IoBookmarksSharp
                title="Bookmark"
                className="cursor-pointer text-red-500"
                onClick={() => handleBookmark(article._id)}
              />
            ) : (
              <IoBookmarksOutline
                title="Bookmark"
                className="cursor-pointer text-red-600"
                onClick={() => handleBookmark(article._id)}
              />
            )}
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
    _id: PropTypes.string.isRequired,
    category: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
    }).isRequired,
    region: PropTypes.string,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsCard;
