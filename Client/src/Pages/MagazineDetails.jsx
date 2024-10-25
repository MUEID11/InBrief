import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserCircle, FaTag, FaUserFriends, FaPlusCircle, FaRegCheckCircle } from "react-icons/fa";
import axios from "axios";
import NewsCard from "../Components/Component/NewsCard";
import { useSelector } from "react-redux";

const MagazineDetails = () => {
  const { magazineId } = useParams();
  const { user } = useSelector((state) => state.user);
  const [magazine, setMagazine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [follow, setFollow] = useState();
  const [error, setError] = useState(null);
  const [followed, setFollowed] = useState(magazine?.followers?.includes(user?._id));
  // useEffect(() => {
  //   if (magazine?.followers?.includes(user?._id)) {
  //     setFollow(true);
  //   } else {
  //     setFollow(false);
  //   }
  // }, []);
  console.log("follow", magazine?.followers?.includes(user?._id), follow);

  useEffect(() => {
    // Fetch magazine data from the API
    const fetchMagazine = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/magazines/${magazineId}`);
        setMagazine(response.data);
        console.log("Fetched magazine data:", response.data); // Correct place to log response.data
        setLoading(false);
      } catch (err) {
        setError("Failed to load magazine details");
        setLoading(false);
      }
    };

    fetchMagazine();
  }, [magazineId, follow]);

  const handleFollow = async () => {
    if (!user?.email) {
      navigate("/signin");
      return;
    }

    try {
      const response = await axios.patch(`${import.meta.env.VITE_API_URL}/magazines/followMagazine/${magazineId}`, { userId: user?._id });

      setFollow(true);

      // console.log(response);
    } catch (error) {
      console.error("Failed to  follow:", error);
    }
  };
  const handleUnFollow = async () => {
    if (!user.email) {
      navigate("/signin");
      return;
    }

    try {
      const response = await axios.patch(`${import.meta.env.VITE_API_URL}/magazines/unfollowMagazine/${magazineId}`, { userId: user?._id });

      setFollow(false);

      // console.log(response);
    } catch (error) {
      console.error("Failed to  unfollow:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!magazine) return <p>No magazine details available</p>;

  return (
    <div className="min-h-screen bg-gray-100 container">
      {/* Cover Image */}
      <div
        className="w-full h-72 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${magazine?.image || "default-image-url"})`,
        }}>
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center">{magazine?.title || "No Title"}</h1>
          <p className=" font-medium text-white max-w-[500px] pt-2  text-center">{magazine?.description || "No Title"}</p>
          <div className=" ">
            {magazine?.followers?.includes(user?._id) ? (
              <button onClick={() => handleUnFollow()} className="flex items-center shadow-lg py-2 rounded-full bg-white pt-2 mt-4 px-3">
                {" "}
                <FaRegCheckCircle className=" mr-2 text-2xl" />
                <h3 className="text-lgfont-">Following</h3>{" "}
              </button>
            ) : (
              <button onClick={() => handleFollow()} className="flex items-center shadow-lg py-2 rounded-full bg-white pt-2 mt-4 px-3">
                {" "}
                <FaPlusCircle className=" mr-2 text-2xl " />
                <h3 className="text-lg ">Follow</h3>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Magazine Details */}
      <div className=" p-2 mb-10 ">
        <div className="flex  gap-6 justify-center items-center pt-4 ">
          <div className="flex items-center shadow-lg p-4 rounded-lg">
            <FaTag className="text-blue-600 mr-3 text-xl" />
            <div>
              <h3 className="text-lg font-medium">Topic</h3>
              <p className="text-gray-700 text-[14px]">{magazine.topic || "Unknown Topic"}</p>
            </div>
          </div>

          <div className="flex items-center shadow-lg p-4 rounded-lg">
            <FaUserFriends className="text-green-600 mr-3 text-2xl flex" />
            <div>
              <h3 className="text-lg font-medium">Followers</h3>
              <p className="text-gray-700 text-[14px] ml-3"> {magazine?.followers?.length}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center shadow-lg p-4 rounded-lg">
            <FaUserCircle className="text-purple-600 mr-3 text-2xl" />
            <div>
              <h3 className="text-lg font-medium">Created By</h3>
              <p className="text-gray-700 text-[14px]">{magazine.creator?.name || magazine.creator?._id || "Unknown Creator"}</p>
            </div>
          </div>
        </div>
      </div>
      {/* magazine articles */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-8 my-6">
        {magazine?.articles?.length > 0 ? (
          magazine?.articles?.map((article, index) => <NewsCard key={index} article={article} />)
        ) : (
          <div className="flex flex-col gap-4 items-center justify-center w-full col-span-full">
            <p>No Articles added yet to this playlist!</p>
            <Link className="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-600" to="/my-feed">
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-red-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

              <span className="relative block border border-current bg-white sm:px-4 sm:py-2 px-2 py-1"> Browse Feed </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MagazineDetails;
