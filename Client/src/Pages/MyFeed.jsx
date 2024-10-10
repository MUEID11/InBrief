import { useEffect, useRef, useState } from 'react';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import PreferenceModal from '../Components/Component/PreferenceModal';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleByPreference } from '../Features/thunks/articleThunk';
import NewsCard from '../Components/Component/NewsCard';

const MyFeed = () => {
  const { user } = useSelector((state) => state.user);
  console.log('first', user);
  const dispatch = useDispatch();
  // Get user's preferred articles from Redux state

  useEffect(() => {
    dispatch(getArticleByPreference(user?._id));
  }, [user]);

  const { articles } = useSelector((state) => state.preferredArticles);
  console.log(articles);
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  return (
    <div className="px-3 pt-5 container">
      <button
        ref={trigger}
        onClick={() => setModalOpen(true)}
        className={`flex items-center px-3 py-2 bg-red-200 text-red-800 rounded-lg hover:shadow-lg transition-all duration-300 shadow-red-200`}>
        <MdOutlineDashboardCustomize />
        <span className="mx-2 text-sm font-medium">Customize Feed</span>
      </button>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-6">
        {articles && articles?.length > 0 && articles.map((article) => <NewsCard key={article._id} article={article} />)}
      </div>

      {/* modal */}
      <PreferenceModal modalOpen={modalOpen} setModalOpen={setModalOpen} trigger={trigger} />
    </div>
  );
};

export default MyFeed;
