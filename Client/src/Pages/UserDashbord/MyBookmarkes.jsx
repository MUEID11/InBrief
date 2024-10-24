import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useAddBookmarkMutation,
  useGetBookmarksQuery,
} from "../../services/bookmarksApi";
import { FaTrash } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { PiEmptyBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdBookmarkRemove } from "react-icons/md";
import toast from "react-hot-toast";

const MyBookmarkes = () => {
  const { user } = useSelector((state) => state.user);
  const { data, isLoading, isError } = useGetBookmarksQuery(user?.email);
  const bookmarks = data?.data;
  const [addBookmark, { error, data: toggleBookmarkMsg, isSuccess }] =
    useAddBookmarkMutation();

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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl">Loading Bookmarks...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl text-red-600">
          Failed to load Latest News. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className="container px-4 mx-auto pt-1 my-10  ">
      {bookmarks?.length > 0 ? (
        <>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 ">
              Bookmarked Articles
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
              {bookmarks?.length} Articles
            </span>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                      <tr className=" bg-blue-100 ">
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
                          <span>Category </span>
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-8 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <span>Status </span>
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
                          Remove Votes
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
                      {bookmarks?.map((bookmark) => (
                        <tr key={bookmark?._id}>
                          <td className=" py-4 px-2 text-sm text-gray-500  whitespace-nowrap">
                            {`${bookmark?.title.substring(0, 40)}...`}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {bookmark?.category}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                                bookmark?.status === "pending" &&
                                "bg-yellow-100/60 text-yellow-500"
                              }
                                 ${
                                  bookmark?.status === "approved" &&
                                   "bg-emerald-100/60 text-emerald-500"
                                 } 
                                 ${
                                  bookmark?.status === "rejected" &&
                                   "bg-emerald-100/60 text-red-500"
                                 } 
                                `}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  bookmark?.status === "pending" &&
                                  "bg-yellow-500"
                                }  ${
                                  bookmark?.status === "approved" &&
                                  "bg-green-500"
                                }  
                                  ${
                                    bookmark?.status === "rejected" &&
                                    "bg-red-500"
                                  }  
                                  `}
                              ></span>
                              <h2 className="text-sm font-normal ">
                                { bookmark?.status}
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {new Date(bookmark?.createdAt).toLocaleDateString()}
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <button
                                className="px-3 py-1 rounded-full text-blue-500 text-xl  bg-blue-100/60"
                                onClick={() => handleBookmark(bookmark._id)}
                              >
                                <MdBookmarkRemove />
                              </button>
                            </div>
                          </td>
                          <Link to={`/articles/${bookmark._id}`}>
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
              <PiEmptyBold/>
            </span>{" "}
            <span>No Bookmarked Article Found Yet!</span>
          </h3>
        </>
      )}
    </section>
  );
};

export default MyBookmarkes;
