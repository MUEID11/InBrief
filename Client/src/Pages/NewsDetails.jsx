import {
  FacebookShareCount,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  RedditShareCount,
} from "react-share";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { LuArrowBigUpDash } from "react-icons/lu";
import CommentComponent from "../Components/Component/CommentComponent";
import {
  useAddCommentMutation,
  useGetCommentQuery,
} from "../services/Comment/commentsApi";
import { useAddVotesMutation } from "../services/Votes/votesApi";
import toast from "react-hot-toast";
import { useAddBookmarkMutation } from "../services/bookmarksApi";
import { IoBookmarksOutline, IoBookmarksSharp } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaUserLock } from "react-icons/fa6";
import { ImSpinner9 } from "react-icons/im";

const MagazineModal = ({ userId, showModal, setShowModal, articleId }) => {
  const [magazines, setMagazines] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    // const mags =
    const mags = magazines?.filter((m) =>
      m?.articles?.some((a) => a._id === articleId)
    );
    // magazines.map(m => m.articles?.)
    mags.forEach((m) => {
      if (!selected.includes(m._id)) {
        setSelected((prevSelected) => [...prevSelected, m._id]);
      }
    });
    // setSelected(mags);
  }, [magazines]);

  console.log("firsthah", magazines, selected);
  const fetchMagazines = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/magazines?creatorId=${userId}`
      );
      setMagazines(response.data);
    } catch (error) {
      console.error("Error fetching magazines:", error);
    }
  };

  useEffect(() => {
    if (showModal) {
      fetchMagazines();
    }
  }, [showModal]);

  const submitModal = async () => {
    console.log(selected, userId, articleId, "ajkdhakj");
    if (selected.length > 0) {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/magazines/addArticle`,
        {
          userId,
          articleId,
          magazineId: selected,
        }
      );
      // const response = await axios.post(${import.meta.env.VITE_API_URL}/magazines/addArticle/${selected}, {
      //   userId,
      //   articleId,
      // });
      console.log(response);
      toast.success("Magazine added successfully!");
      setShowModal(false);
    } else {
      toast.error("Please select a magazine");
    }
  };

  return showModal ? (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-xl p-8 rounded-lg shadow-2xl relative mx-4 md:mx-0">
        <button
          onClick={() => {
            setShowModal(false);
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          <span className="text-xl font-bold">✕</span>
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Your Magazines
        </h2>
        <div className="max-h-96 overflow-y-auto">
          {magazines.length > 0 ? (
            <>
              <div className="space-y-4">
                {magazines.map((magazine) => (
                  <p
                    onClick={async () => {
                      // setSelected((prevSelected) => (prevSelected.includes(magazine._id) ? prevSelected.filter((id) => id !== magazine._id) : [...prevSelected, magazine._id]));
                      if (!selected.includes(magazine._id)) {
                        setSelected((prevSelected) => [
                          ...prevSelected,
                          magazine._id,
                        ]);
                      } else {
                        setSelected((prevSelected) =>
                          prevSelected.filter((id) => id !== magazine._id)
                        );
                        const response = await axios.patch(
                          `${
                            import.meta.env.VITE_API_URL
                          }/magazines/removeArticle/${magazine?._id}`,
                          {
                            userId,
                            articleId,
                          }
                        );
                        if (response.status == 200) {
                          toast.success("Magazine removed successfully!");
                        }
                        console.log(response);
                      }
                    }}
                    key={magazine?._id}
                    className={`p-4 cursor-pointer flex justify-between items-center bg-gray-100 ${
                      selected.includes(magazine._id)
                        ? "bg-rose-950 text-white"
                        : "bg-gray-100 text-gray-700"
                    }  rounded-lg shadow-sm transition-all duration-200`}
                  >
                    <h3 className="">{magazine?.title}</h3>
                    {magazine?.isPublic ? <FaEarthAfrica /> : <FaUserLock />}
                  </p>
                ))}
              </div>
              <button
                onClick={submitModal}
                className="border border-blue-800 hover:bg-blue-800 hover:text-white mt-6 text-blue-950 transition-all duration-300 px-8 py-2 rounded tracking-widest text-sm"
              >
                SAVE
              </button>
            </>
          ) : (
            <p className="text-center text-gray-500">No magazines found.</p>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

const NewsDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState(article?.likes?.length || 0);
  const [liked, setLiked] = useState(article?.likes?.includes(user?.email));
  const [bookmarked, setBookmarked] = useState(
    article?.bookmarks?.includes(user?.email)
  );

  const [
    addBookmark,
    { isError, error: bookmarkError, data: toggleBookmarkMsg, isSuccess },
  ] = useAddBookmarkMutation();
  const [showModal, setShowModal] = useState(false);
  const [addVotes] = useAddVotesMutation();

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/articles/${id}`
        );
        setArticle(response.data);
      } catch (err) {
        setError("Error fetching article details");
        console.error("Error fetching article:", err);
      }
    };

    fetchArticleDetails();
    fetchArticleDetails();
  }, [id]);

  useEffect(() => {
    const getRelatedData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/articles/search?category=${
            article?.category
          }`
        );
        setRelatedArticles(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRelatedData();
  }, [article]);

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
      toast(bookmarkError.data.message || "Something went wrong", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  }, [bookmarkError, isError, isSuccess, toggleBookmarkMsg]);

  let {
    data: comments,
    isLoading: commentLoading,
    isError: commentError,
  } = useGetCommentQuery(id) || {};
  // console.log(comments);

  // add comment
  const [addComment] = useAddCommentMutation() || {};

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await addComment({
        postId: id,
        data: {
          comment: comment,
          username: user?.name,
          userImage: user?.imageUrl,
          userEmail: user?.email,
        },
      });
      // console.log('Comment Added:', response);
      setComment("");
      e.target.reset();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  // total commentss count
  let totals = comments?.map((item) => item?.replies?.length);
  let ultimateTotal = totals?.reduce((acc, item) => acc + item, 0);
  ultimateTotal = ultimateTotal + comments?.length;

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        {error}
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
        <ImSpinner9 className="animate-spin text-red-900 text-6xl" />
      </div>
    );
  }

  // const shareUrl = 'http://github.com';
  // const title = 'GitHub';
  return (
    <div className="min-h-screen">
      {/* Header Not needed */}

      {/* Main Content */}
      <main className="container mx-auto my-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Article Section */}
          <div className="md:w-3/4">
            <div className="bg-white shadow-lg rounded-sm p-6">
              <img
                className=" w-full h-96 object-cover mb-6"
                src={article?.image}
                alt={article?.title}
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {article?.title}
              </h2>
              <p className="text-base text-gray-600 mb-6 whitespace-pre-wrap">
                {article?.description?.slice(0, 600)} ....
              </p>
              <a
                href={article?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-blue-600 text-bold  hover:underline hover:transition-transform "
              >
                Read full article
              </a>
              <div className="mt-6">
                <p className="text-gray-500">
                  <span className="font-semibold">Source: </span>
                  {article?.source?.name || article?.source}
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold">Category: </span>
                  {article?.category}
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold">Region: </span>
                  {article?.region}
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold">Posted by: </span>
                  <Link
                    to={`/articles/creator/${article?.postedBy}`}
                    title="Click Here to get all articles posted by this creator"
                  >
                    <span className="font-semibold text-blue-600">
                      {article?.createdBy?.name}
                    </span>
                  </Link>
                </p>

                <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-center justify-between mt-4 ">
                  <fieldset className="flex items-center gap-4 border-2 border-gray-300 rounded-lg px-4 py-1 max-w-sm">
                    <legend>Share</legend>
                    <div>
                      <FacebookShareButton
                        url={article?.url}
                        className="Demo__some-network__share-button"
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>

                      <div>
                        <FacebookShareCount
                          url={article?.url}
                          className="Demo__some-network__share-count"
                        >
                          {(count) => count}
                        </FacebookShareCount>
                      </div>
                    </div>

                    <div className="Demo__some-network">
                      <TwitterShareButton
                        url={article?.url}
                        title={article?.title}
                        className="Demo__some-network__share-button"
                      >
                        <XIcon size={32} round />
                      </TwitterShareButton>
                    </div>

                    <div className="Demo__some-network">
                      <LinkedinShareButton
                        url={article?.url}
                        className="Demo__some-network__share-button"
                      >
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>
                    </div>

                    <div className="Demo__some-network">
                      <RedditShareButton
                        url={article?.url}
                        title={article?.title}
                        windowWidth={660}
                        windowHeight={460}
                        className="Demo__some-network__share-button"
                      >
                        <RedditIcon size={32} round />
                      </RedditShareButton>
                    </div>
                  </fieldset>
                  {/* Likes and Bookmarks */}
                  <div className="flex items-center justify-center gap-5">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center gap-2">
                        <button
                          title="Vote"
                          onClick={() => handleLike(article._id)}
                          className=""
                        >
                          <LuArrowBigUpDash
                            className={`text-2xl font-medium ${
                              liked
                                ? "text-blue-500 bg-blue-100 rounded-full"
                                : "text-gray-500 bg-gray-200 rounded-full"
                            }`}
                          />
                        </button>
                        <p className="text-gray-700 text-sm"> {likes} Votes</p>
                      </div>
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
                    {/* show modal */}
                    {/* <button
                      className="bg-gray-200 px-3 py-1 text-sm font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                      onClick={() => setShowModal(true)}>
                      Show Magazines
                    </button> */}
                    <div>
                      <button
                        className="text-sm px-3 py-2 flex items-center gap-2 border border-red-500 text-red-500 rounded-lg "
                        onClick={() => setShowModal(true)}
                      >
                        <FaPlusCircle />
                        Add to Magazines
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Comments Section */}
            <form onSubmit={submitHandler}>
              <div className="bg-white shadow-lg rounded-sm  p-6 mb-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Comments ({Number(ultimateTotal)})
                </h3>
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-sm"
                  rows="2"
                  placeholder="Write a comment..."
                ></textarea>
                <div className="flex justify-end ">
                  <button
                    type="submit"
                    className="mt-2 bg-red-500 text-white px-2 py-1 rounded-sm  "
                  >
                    Comment
                  </button>
                </div>
              </div>
            </form>
            <div>
              <hr />
              {comments?.map((comment) => {
                return (
                  <CommentComponent key={comment?._id} comment={comment} />
                );
              })}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="md:w-1/4">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Related Articles
              </h3>

              <ul className="space-y-4">
                {/* <li className="hover:underline text-blue-600">Global Market Updates</li>
                <li className="hover:underline text-blue-600">Tech Industry News</li>
                <li className="hover:underline text-blue-600">Health & Fitness Trends</li>
                <li className="hover:underline text-blue-600">Travel & Tourism</li> */}
                {relatedArticles?.length > 0 &&
                  relatedArticles?.map((a) => (
                    <li key={a._id} className="hover:underline text-blue-600">
                      <Link to={`/articles/${a?._id}`}>{a.title}</Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Weather  */}
            {/* Weather  */}

            <div
              className="relative bg-cover bg-no-repeat bg-center shadow-lg rounded-lg p-6 mb-8"
              style={{
                backgroundImage:
                  "url('https://media.giphy.com/media/xT9IgDEI1iZyb2wqo8/giphy.gif')",
                backgroundBlendMode: "overlay",
                filter: "brightness(0.7) contrast(1.2)",
              }}
            >
              <h3 className="text-2xl font-bold text-slate-500 mb-4">
                Weather Forecast
              </h3>

              <div className="flex justify-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1558860718-b50198286a80
Example Code Snippet"
                  alt=""
                  className="rounded-full shadow-lg w-24 h-24 object-cover"
                />
              </div>

              <div className="text-center">
                <p className="text-orange-500 text-opacity-80 text-lg">
                  Stay updated with the latest weather trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MagazineModal
        userId={user?._id}
        showModal={showModal}
        setShowModal={setShowModal}
        articleId={article?._id}
      />
    </div>
  );
};

export default NewsDetails;
