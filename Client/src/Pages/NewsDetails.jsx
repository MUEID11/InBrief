import {
  FacebookShareCount,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,XIcon,
  RedditShareCount,
} from "react-share";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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

const MagazineModal = ({ userId, showModal, setShowModal }) => {
  const [magazines, setMagazines] = useState([]);

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

  return showModal ? (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4">My Magazines</h2>
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-0 right-0 m-4"
        >
          Close
        </button>
        {magazines.length > 0 ? (
          <ul>
            {magazines.map((magazine) => (
              <li key={magazine._id} className="mb-2">
                <h3 className="font-medium">{magazine.title}</h3>
                <p>{magazine.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No magazines found.</p>
        )}
      </div>
    </div>
  ) : null;
};

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [addBookmark, { isError, error: bookmarkError, data: toggleBookmarkMsg, isSuccess }] =
    useAddBookmarkMutation();
  const [addVotes] = useAddVotesMutation();

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/articles/${id}`
        );
        setArticle(response.data);
        setLikes(response.data.likes.length || 0);
        setLiked(response.data.likes.includes(user?.email));
        setBookmarked(response.data.bookmarks.includes(user?.email));
      } catch (err) {
        setError("Error fetching article details");
        console.error("Error fetching article:", err);
      }
    };

    fetchArticleDetails();
  }, [id, user?.email]);

  const handleLike = async () => {
    if (!user?.email) {
      navigate("/signin");
      return;
    }

    try {
      await addVotes({ id, userEmail: user.email });
      setLikes(liked ? likes - 1 : likes + 1);
      setLiked(!liked);
    } catch (error) {
      console.error("Failed to toggle like:", error);
    }
  };

  const handleBookmark = () => {
    if (!user?.email) {
      navigate("/signin");
      return;
    }

    addBookmark({ id, userEmail: user.email })
      .unwrap()
      .then(() => {
        setBookmarked(!bookmarked);
        toast(toggleBookmarkMsg.message, {
          icon: "✔️",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        toast(bookmarkError?.data?.message || "Something went wrong", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        console.error("Failed to toggle bookmark:", error);
      });
  };

  const [addComment] = useAddCommentMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      await addComment({
        postId: id,
        data: {
          comment,
          username: user?.name,
          userImage: user?.imageUrl,
          userEmail: user?.email,
        },
      });
      setComment("");
      e.target.reset();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const { data: comments, isLoading: commentLoading } = useGetCommentQuery(id) || {};

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        {error}
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center mt-10 text-lg text-gray-500">Loading...</div>
    );
  }

  const ultimateTotal = (comments?.reduce((acc, item) => acc + (item?.replies?.length || 0), 0) || 0) + (comments?.length || 0);

  return (
    <div className="min-h-screen">
      <main className="container mx-auto my-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <div className="bg-white shadow-lg rounded-sm p-6">
              <img
                className="w-full h-96 object-cover mb-6"
                src={article?.image}
                alt={article?.title}
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {article?.title}
              </h2>
              <p className="text-base text-gray-600 mb-6 whitespace-pre-wrap">
                {article?.description.slice(0, 250)} ...
              </p>
              <a
                href={article?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-blue-600 font-bold hover:underline"
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
                  <Link to={`/articles/creator/${article?.postedBy}`}>
                    <span className="font-semibold text-blue-600">
                      {article?.createdBy?.name}
                    </span>
                  </Link>
                </p>

                <div className="flex justify-between mt-4">
                  <fieldset className="flex items-center gap-4 border-2 border-gray-300 rounded-lg px-4 py-1 max-w-sm">
                    <legend>Share</legend>
                    <FacebookShareButton url={article?.url}>
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton url={article?.url} title={article?.title}>
                      <XIcon size={32} round />
                    </TwitterShareButton>
                    <LinkedinShareButton url={article?.url}>
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <RedditShareButton url={article?.url} title={article?.title}>
                      <RedditIcon size={32} round />
                    </RedditShareButton>
                  </fieldset>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center gap-2">
                      <button title="Vote" onClick={handleLike}>
                        <LuArrowBigUpDash
                          size={32}
                          className={`${liked ? "text-green-600" : "text-gray-400"}`}
                        />
                      </button>
                      <p>{likes}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button title="Bookmark" onClick={handleBookmark}>
                        {bookmarked ? (
                          <IoBookmarksSharp size={32} className="text-blue-700" />
                        ) : (
                          <IoBookmarksOutline size={32} className="text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="py-4">
              <CommentComponent
                user={user}
                totalCount={ultimateTotal}
                submitHandler={submitHandler}
                setComment={setComment}
                comment={comment}
                comments={comments}
                commentLoading={commentLoading}
              />
            </section>
          </div>

          <aside className="md:w-1/4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 w-full py-2 px-4 text-white rounded-md"
            >
              My Magazines
            </button>
            <MagazineModal
              userId={user?._id}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default NewsDetails;
