import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewsDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

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
  }, [id]);

  if (error) {
    return <div className="text-center mt-10 text-red-500 font-semibold">{error}</div>;
  }

  if (!article) {
    return <div className="text-center mt-10 text-lg text-gray-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-4xl font-bold text-gray-800">News Aggregator</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto my-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Article Section */}
          <div className="md:w-3/4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img className="rounded-lg w-full h-96 object-cover mb-6" src={article?.image} alt={article?.title} />
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{article?.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{article?.description}</p>
              <a
                href={article?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-blue-600 text-bold  hover:underline hover:text-xl hover:transition-transform text-lg">
                Read full article
              </a>
              <div className="mt-6">
                <p className="text-gray-500">
                  <span className="font-semibold">Source: </span>
                  {article?.source?.name}
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

                {/* Likes and Bookmarks */}
                <div className="flex justify-end mt-4 space-x-6">
                  <p className="flex items-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-red-500 mr-2">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1.1 4.07 2.09C10.59 6.1 12.26 5 14 5c2.08 0 3.5 1.42 3.5 3.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="font-semibold text-red-500">Likes: </span>
                    {article?.likes?.length}
                  </p>
                  <p className="flex items-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-blue-500 mr-2">
                      <path d="M6 2C4.9 2 4 2.9 4 4v16l8-4 8 4V4c0-1.1-.9-2-2-2H6z" />
                    </svg>
                    <span className="font-semibold text-blue-500">Bookmarks: </span>
                    {article?.bookmarks?.length}
                  </p>
                </div>
              </div>
            </div>
            {/* Comments Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Comments</h3>
              <textarea className="w-full mt-4 p-2 border border-gray-300 rounded" rows="3" placeholder="Write a comment..."></textarea>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Submit</button>
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
