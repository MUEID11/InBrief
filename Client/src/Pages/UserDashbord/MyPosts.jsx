import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { PiEmptyBold } from "react-icons/pi";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";

const MyPosts = () => {
  const { user } = useSelector((state) => state.user);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (user?.email) {
      getData();
    }
  }, [user]);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/articles/user/${user?.email}`
      );
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const handledelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(
            `${import.meta.env.VITE_API_URL}/articles/${id}`
          );

          // console.log("Delete response:", res.data);

          if (res.data.result) {
            getData();
            Swal.fire({
              title: "Deleted!",
              text: "Article has been deleted.",
              icon: "success",
            });
          } else {
            console.log("Article not found.");
            toast.error("Failed to delete the article.");
          }
        } catch (error) {
          console.error("Error deleting article:", error);
          toast.error("Error deleting article");
        }
      }
    });
  };
  return (
    <section className="container px-4 mx-auto pt-1 my-10  ">
      {articles?.length > 0 ? (
        <>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 ">
               Posted Articles
            </h2>

            <span className="px-3 py-1 text-xs text-red-600 bg-blue-100 rounded-full ">
              {articles?.length} Articles
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
                        <th
                          scope="col"
                          className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          View Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-left ">
                      {articles?.map((article) => (
                        <tr key={article?._id}>
                          <td className=" py-4 px-2 text-sm text-gray-500  whitespace-nowrap">
                            {`${article?.title.substring(0, 40)}...`}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap ">
                            {article?.likes?.length}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {article?.bookmarks?.length}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {new Date(article?.createdAt).toLocaleDateString()}
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <button
                                onClick={() => handledelete(article?._id)}
                                className="px-3 py-1 rounded-full text-red-500  bg-blue-100/60"
                              >
                                <FaTrash></FaTrash>
                              </button>
                            </div>
                          </td>
                          <Link to={`/articles/${article?._id}`}>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                <button className="px-3 py-1 rounded-full  bg-blue-100/60">
                                  <TbListDetails />
                                </button>
                              </div>
                            </td>
                          </Link>
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
          <h3 className="text-center text-2xl mt-20 font-medium text-red-500 flex justify-center items-center gap-2">
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

