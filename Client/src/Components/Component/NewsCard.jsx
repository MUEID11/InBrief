/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { LuArrowBigUpDash } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoBookmarksOutline, IoBookmarksSharp, IoContractSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import { useAddBookmarkMutation } from "../../services/bookmarksApi";
import { useAddVotesMutation } from "../../services/Votes/votesApi";
import Aos from "aos";
import "aos/dist/aos.css";

const NewsCard = ({ article }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [likes, setLikes] = useState(article?.likes?.length || 0);
  const [liked, setLiked] = useState(article?.likes?.includes(user?.email));
  const [bookmarked, setBookmarked] = useState(article?.bookmarks?.includes(user?.email));
  const [addBookmark, { isError, error, data: toggleBookmarkMsg, isSuccess }] = useAddBookmarkMutation();
  const [addVotes] = useAddVotesMutation();
  useEffect(() => {
    Aos.init();
  });

  const handleLike = async (id) => {
    if (!user.email) {
      navigate("/signin");
      return;
    }

    try {
      const response = await addVotes({ id, userEmail: user?.email });

      if (liked) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
      setLiked(!liked);
      // console.log(data.message);
    } catch (error) {
      console.error("Failed to toggle like:", error);
    }
  };

  const handleBookmark = (id) => {
    if (!user.email) {
      navigate("/signin");
      return;
    }

    addBookmark({ id, userEmail: user?.email })
      .unwrap()
      .then((payload) => console.log("fulfilled", payload))
      .catch((error) => console.error("rejected", error));
  };

  useEffect(() => {
    if (toggleBookmarkMsg && toggleBookmarkMsg.message && isSuccess) {
      setBookmarked(!bookmarked);
      toast(toggleBookmarkMsg.message, {
        icon: "✔️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }

    if (isError) {
      toast(error.data.message || "Something went wrong", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  }, [error, isError, isSuccess, toggleBookmarkMsg]);

  return (
    <article
      className="shadow-lg p-5 border  border-r-2 border-b-2 flex flex-col transition-all duration-300 ease-in-out hover:border-gray-600 hover:bg-gray-200 hover:scale-102 h-full rounded-sm"
      data-aos="fade-up"
      data-aos-duration="2000">
      <Link to={`/articles/${article?._id}`} className="flex-1">
        {/* Link wrapping Image */}

        <img src={article.image} alt={article.title} className="h-56 object-cover w-full" loading="lazy" />

        {/* Info Section */}
        <div className="mt-4 flex flex-col flex-grow">
          {/* Source Section */}
          <div className="flex gap-2 items-center">
            {/* <img
                src="https://via.placeholder.com/20" // Placeholder for the source icon
                className="size-5 bg-red-700 rounded-full object-cover"
                alt={`${article?.source?.url}`}
              /> */}
            <div className="size-2 bg-red-600 rounded-full"></div>
            <span className="text-sm text-gray-600">{article?.source?.name || article.source}</span>
          </div>

          {/* Headline */}
          <p target="_blank" rel="noopener noreferrer">
            <h3 className="font-bold text-lg mt-2">{article?.title}</h3>
          </p>
          {/* Date, Category, Region */}
          <div className="flex justify-between items-center mb-2 mt-1">
            <div className="flex gap-3 items-center">
              <p className="text-black-primary text-sm font-semibold">{article?.region}</p>
              <span className="text-xs text-neutral-600">{new Date(article?.createdAt).toLocaleDateString()}</span>
            </div>
            <p className="text-blue-500 font-semibold bg-blue-100 py-1 px-3 rounded-sm text-xs capitalize">{article?.category ? article?.category : "Category"}</p>
          </div>
          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 font-semibold flex-grow">{`${article?.description.substring(0, 100)}...`}</p>
        </div>
      </Link>

      <div>
        {/* <div className="flex gap-3 items-center justify-between mb-2">
          <p className="text-red-600 font-semibold">{article?.category ? article?.category : 'Category'}</p>
        </div> */}
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <button onClick={() => handleLike(article?._id)} className="">
                <LuArrowBigUpDash className={`text-2xl font-medium ${liked ? "text-blue-500 bg-blue-100 rounded-full" : "text-gray-500 bg-gray-200 rounded-full"}`} />
              </button>
              <p className="text-gray-700 text-sm"> {likes} Votes</p>
              {bookmarked ? (
                <IoBookmarksSharp title="Bookmark" className="cursor-pointer text-red-500" onClick={() => handleBookmark(article?._id)} />
              ) : (
                <IoBookmarksOutline title="Bookmark" className="cursor-pointer text-red-600" onClick={() => handleBookmark(article?._id)} />
              )}
            </div>
          </div>
          {/* Read More Button */}
          <Link to={`/articles/${article?._id}`}>
            <button className="text-red-600 self-end font-medium">Read More</button>
          </Link>
        </div>
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
    source: PropTypes.string.isRequired,
    region: PropTypes.string,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsCard;
