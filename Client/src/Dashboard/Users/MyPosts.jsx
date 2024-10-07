import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { PiEmptyBold } from "react-icons/pi";
import toast from "react-hot-toast";

const MyPosts = () => {
  const { user } = useSelector((state) => state.user);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.error("Error creating article:", error);
      toast.error(error.message);
    }
  }, [user, setArticles]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/articles/user/${user?.email}`
    );
    setArticles(data);
  };

  return (
    <section className="container px-4 mx-auto pt-1 my-10  ">
      {articles.length > 0 ? (
        <>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 ">
              My Posted Articles
            </h2>

            <span className="px-3 py-1 text-xs text-red-600 bg-blue-100 rounded-full ">
              {articles.length} Articles
            </span>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                      <tr className=" bg-red-100 ">
                        <th
                          scope="col"
                          className="py-3.5 px-3 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Title</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <span>Votes</span>
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <span>Bookmarks </span>
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <span>CreatedAt</span>
                        </th>

                        <th
                          scope="col"
                          className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-left ">
                      {articles.map((article) => (
                        <tr key={article._id}>
                          <td className=" py-4 px-2 text-sm text-gray-500  whitespace-nowrap">
                            {`${article.title.substring(0, 40)}...`}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {article.likes.length}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {article.bookmarks.length}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {new Date(article.createdAt).toLocaleDateString()}
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <button
                                onClick={() => handledelete(article._id)}
                                className="px-3 py-1 rounded-full text-red-500  bg-blue-100/60"
                              >
                                <FaTrash></FaTrash>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-center text-3xl mt-20 font-semibold text-red-500 flex justify-center items-center gap-2">
            {" "}
            <span>
              {" "}
              <PiEmptyBold />
            </span>{" "}
            <span>No Articles Added By You Yet</span>
          </h3>
        </>
      )}
    </section>
  );
};

export default MyPosts;
