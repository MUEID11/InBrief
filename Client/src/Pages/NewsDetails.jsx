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
} from 'react-share';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAddCommentMutation, useGetCommentQuery } from '../Features/Comment/commentsApi';
import { useSelector } from 'react-redux';

import { LuArrowBigUpDash } from 'react-icons/lu';
import CommentComponent from '../Components/Component/CommentComponent';

const NewsDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.user);
  const [comment, setComment] = useState('');
  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/articles/${id}`);
        setArticle(response.data);
      } catch (err) {
        setError('Error fetching article details');
        console.error('Error fetching article:', err);
      }
    };

    fetchArticleDetails();
    fetchArticleDetails();
  }, [id]);

  let { data: comments, isLoading: commentLoading, isError: commentError } = useGetCommentQuery(id) || {};

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
          userGmail: user?.email,
        },
      });
      console.log('Comment Added:', response);
      setComment('');
      e.target.reset();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  // total commentss count
  let totals = comments?.map((item) => item?.replies?.length);
  let ultimateTotal = totals?.reduce((acc, item) => acc + item, 0);
  ultimateTotal = ultimateTotal + comments?.length;

  if (error) {
    return <div className="text-center mt-10 text-red-500 font-semibold">{error}</div>;
  }

  if (!article) {
    return <div className="text-center mt-10 text-lg text-gray-500">Loading...</div>;
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
              <img className=" w-full h-96 object-cover mb-6" src={article?.image} alt={article?.title} />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{article?.title}</h2>
              <p className="text-base text-gray-600 mb-6">{article?.description.slice(0, 250)} ....</p>
              <a href={article?.url} target="_blank" rel="noopener noreferrer" className="text-center text-blue-600 text-bold  hover:underline hover:transition-transform ">
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
                  {article?.postedBy}
                </p>

                <div className="flex justify-between mt-4 ">
                  <fieldset className="flex items-center gap-4 border-2 border-gray-300 rounded-lg px-4 py-1 max-w-sm">
                    <legend>Share</legend>
                    <div>
                      <FacebookShareButton url={article?.url} className="Demo__some-network__share-button">
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>

                      <div>
                        <FacebookShareCount url={article?.url} className="Demo__some-network__share-count">
                          {(count) => count}
                        </FacebookShareCount>
                      </div>
                    </div>

                    <div className="Demo__some-network">
                      <TwitterShareButton url={article?.url} title={article?.title} className="Demo__some-network__share-button">
                        <XIcon size={32} round />
                      </TwitterShareButton>
                    </div>

                    <div className="Demo__some-network">
                      <LinkedinShareButton url={article?.url} className="Demo__some-network__share-button">
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>
                    </div>

                    <div className="Demo__some-network">
                      <RedditShareButton url={article?.url} title={article?.title} windowWidth={660} windowHeight={460} className="Demo__some-network__share-button">
                        <RedditIcon size={32} round />
                      </RedditShareButton>

                      <div>
                        <RedditShareCount url={article?.url} className="Demo__some-network__share-count" />
                      </div>
                    </div>
                  </fieldset>
                  {/* Likes and Bookmarks */}
                  <div className="flex items-center space-x-6">
                    <p className="flex items-center text-gray-500">
                      <button
                        // onClick={() => handleLike(article._id)}
                        className="">
                        <LuArrowBigUpDash className={' text-2xl text-green-500 bg-green-100 rounded-full'} />
                      </button>
                      <span className="font-semibold text-green-500 px-1"> Votes: </span>
                      {article?.likes?.length}
                    </p>
                    <p className="flex items-center text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-blue-500 mr-2">
                        <path d="M6 2C4.9 2 4 2.9 4 4v16l8-4 8 4V4c0-1.1-.9-2-2-2H6z" />
                      </svg>
                      <span className="font-semibold text-[#2D2D2D]">Bookmarks: </span>
                      {article?.bookmarks?.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Comments Section */}
            <form onSubmit={submitHandler}>
              <div className="bg-white shadow-lg rounded-sm  p-6 mb-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Comments ({Number(ultimateTotal)})</h3>
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-sm"
                  rows="2"
                  placeholder="Write a comment..."></textarea>
                <div className="flex justify-end ">
                  <button type="submit" className="mt-2 bg-red-500 text-white px-2 py-1 rounded-sm  ">
                    Comment
                  </button>
                </div>
              </div>
            </form>
            <div>
              <hr />
              {comments?.map((comment) => {
                return <CommentComponent key={comment?._id} comment={comment} />;
              })}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="md:w-1/4">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>

              <ul className="space-y-4">
                <li className="hover:underline text-blue-600">Global Market Updates</li>
                <li className="hover:underline text-blue-600">Tech Industry News</li>
                <li className="hover:underline text-blue-600">Health & Fitness Trends</li>
                <li className="hover:underline text-blue-600">Travel & Tourism</li>
              </ul>
            </div>

            {/* Weather  */}
            {/* Weather  */}

            <div
              className="relative bg-cover bg-no-repeat bg-center shadow-lg rounded-lg p-6 mb-8"
              style={{
                backgroundImage: "url('https://media.giphy.com/media/xT9IgDEI1iZyb2wqo8/giphy.gif')",
                backgroundBlendMode: 'overlay',
                filter: 'brightness(0.7) contrast(1.2)',
              }}>
              <h3 className="text-2xl font-bold text-slate-500 mb-4">Weather Forecast</h3>

              <div className="flex justify-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1558860718-b50198286a80
Example Code Snippet"
                  alt=""
                  className="rounded-full shadow-lg w-24 h-24 object-cover"
                />
              </div>

              <div className="text-center">
                <p className="text-orange-500 text-opacity-80 text-lg">Stay updated with the latest weather trends.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsDetails;
