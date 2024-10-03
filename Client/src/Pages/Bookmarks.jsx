import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NewsCard from '../Components/Component/NewsCard';

const Bookmarks = () => {
  const { user } = useSelector((state) => state.user);
  const [bookmarks, setBookmarks] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/articles/allBookmarks?userEmail=${user?.email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBookmarks(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching Bookmarks:', err);
        setError(true);
        setLoading(false);
      });
  }, [user?.email]);

  console.log('bookmarks=>', bookmarks);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl">Loading Latest News...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl text-red-600">Failed to load Latest News. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center text-2xl font-semibold my-5 text-neutral-700">BOOKMARKS</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-8">
        {bookmarks.length > 0 && bookmarks.map((bookmark) => <NewsCard key={bookmark._id} article={bookmark} />)}
      </div>
    </div>
  );
};

export default Bookmarks;
