import { useEffect, useRef, useState } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import PreferenceModal from "../Components/Component/PreferenceModal";
import { useDispatch, useSelector } from "react-redux";
import { getArticleByPreference } from "../Features/thunks/articleThunk";
import NewsCard from "../Components/Component/NewsCard";
import ProfileLoadingTest from "../Components/Component/ProfileLoadingTest";

const MyFeed = () => {
  const [sort, setSort] = useState("DSC");
  const { user } = useSelector((state) => state.user);
  // console.log("first", user);
  const dispatch = useDispatch();
  // Get user's preferred articles from Redux state

  useEffect(() => {
    dispatch(getArticleByPreference({ id: user?._id, sort }));
  }, [user, sort]);

  const { articles, isLoading } = useSelector(
    (state) => state.preferredArticles
  );
  console.log(articles);
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);

  if (isLoading) {
    return <ProfileLoadingTest />;
  }

  return (
    <div className="px-3 pt-5 container">
      <div className="flex justify-between items-center">
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`flex items-center px-3 py-2 border-red-700 border  text-red-700 rounded-sm hover:shadow-lg hover:bg-red-800 hover:text-white transition-all duration-300`}
        >
          <MdOutlineDashboardCustomize />
          <span className="mx-2 text-sm font-medium">Customize Feed</span>
        </button>

        <div>
          <select
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            name="HeadlineAct"
            className="border border-red-700  text-red-700 text-sm rounded-sm focus:ring-red-200 focus:ring block w-full p-2 focus-visible:outline-none "
          >
            <option value="DSC">Latest to Oldest</option>
            <option value="ASC">Oldest to Latest</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-6">
        {articles && articles?.length > 0 ? (
          articles.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))
        ) : (
          <p className="text-center text-red-500 w-full col-span-4 text-lg mt-6">
            Sorry! No data available to show for the selected topics
          </p>
        )}
      </div>

      {/* modal */}
      <PreferenceModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        trigger={trigger}
      />
    </div>
  );
};

export default MyFeed;
