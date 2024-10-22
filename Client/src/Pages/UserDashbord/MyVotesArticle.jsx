import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbFileDislike, TbListDetails } from "react-icons/tb";
import {
  useAddVotesMutation,
  useGetVotesQuery,
} from "../../services/Votes/votesApi";
import { LuArrowBigUpDash } from "react-icons/lu";
import toast from "react-hot-toast";
import { PiEmptyBold } from "react-icons/pi";

const MyVotesArticle = () => {
  const { user } = useSelector((state) => state.user);
  const { data, isLoading, isError } = useGetVotesQuery(user?.email);
  const votedArticles = data?.data;
  const [addVotes] = useAddVotesMutation();

  const handleLike = async (id) => {
    if (!user.email) {
      navigate("/signin");
      return;
    }

    try {
      const response = await addVotes({ id, userEmail: user?.email });
      toast("Vote removed successfully!", {
        icon: "✔️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      console.error("Failed to toggle like:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl">Loading voteded Articles</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl text-red-600">
          Failed to load voted Articles. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className="container px-4 mx-auto pt-1 my-10  ">
      {votedArticles?.length > 0 ? (
        <>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 ">
              My Voted Articles
            </h2>

            <span className="px-3 py-1 text-xs text-green-600 bg-green-100 rounded-full ">
              {votedArticles?.length} Articles
            </span>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                      <tr className=" bg-green-100 ">
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
                      {votedArticles?.map((votedArticle) => (
                        <tr key={votedArticle?._id}>
                          <td className=" py-4 px-2 text-sm text-gray-500  whitespace-nowrap">
                            {`${votedArticle?.title.substring(0, 40)}...`}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {votedArticle?.category}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {new Date(
                              votedArticle?.createdAt
                            ).toLocaleDateString()}
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <button
                                onClick={() => handleLike(votedArticle._id)}
                                className=""
                              >
                                <LuArrowBigUpDash
                                  className={`text-2xl font-medium text-gray-500 bg-gray-200 rounded-full`}
                                />
                              </button>
                            </div>
                          </td>
                          <Link to={`/articles/${votedArticle._id}`}>
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
            <span>No voted Article Found Yet!</span>
          </h3>
        </>
      )}
    </section>
  );
};

export default MyVotesArticle;
