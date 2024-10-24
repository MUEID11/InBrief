import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaUserCircle, FaTag, FaUserFriends, FaPlusCircle, FaRegCheckCircle } from 'react-icons/fa';
import axios from 'axios';
import NewsCard from '../Components/Component/NewsCard';

const MagazineDetails = () => {
  const { magazineId } = useParams();
  const [magazine, setMagazine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [follow, isFollow] = useState(false);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    // Fetch magazine data from the API
    const fetchMagazine = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/magazines/${magazineId}`
        );
        setMagazine(response.data);
        console.log('Fetched magazine data:', response.data); // Correct place to log response.data
        setLoading(false);
      } catch (err) {
        setError('Failed to load magazine details');
        setLoading(false);
      }
    };

    fetchMagazine();
  }, [magazineId]);

  console.log(magazine?.articles)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!magazine) return <p>No magazine details available</p>;

  return (
    <div className="min-h-screen bg-gray-100 container">
      {/* Cover Image */}
      <div
        className="w-full h-72 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${magazine?.image || 'default-image-url'})` }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center">{magazine?.title || 'No Title'}</h1>
          <p className=" font-medium text-white max-w-[500px] pt-2  text-center">{magazine?.description || 'No Title'}</p>
          <div className="flex items-center shadow-lg py-2 rounded-full bg-white pt-2 px-3 ">
          {follow ? <> <FaRegCheckCircle className=" mr-3 text-2xl" />
            <h3 className="text-lg font-medium">Following</h3> </>
          :
          <> <FaPlusCircle className=" mr-3 text-2xl " />
            <h3 className="text-lg font-medium">Follow</h3></>
          }

          </div>
        </div>
      </div>

      {/* Magazine Details */}
      <div className=" p-2 mb-10 ">
      


        <div className="flex gap-10 justify-center items-center pt-4 ">
          <div className="flex items-center shadow-lg p-4 rounded-lg">
            <FaTag className="text-blue-600 mr-3 text-xl" />
            <div>
              <h3 className="text-lg font-medium">Topic</h3>
              <p className="text-gray-700 text-[14px]">{magazine.topic || 'Unknown Topic'}</p>
            </div>
          </div>

          <div className="flex items-center shadow-lg p-4 rounded-lg">
            <FaUserFriends className="text-green-600 mr-3 text-2xl flex" />
            <div>
              <h3 className="text-lg font-medium">Followers</h3>
             <p className='text-gray-700 text-[14px] ml-3'> {magazine?.followers?.length}</p>
            </div>
          </div>

          <div className="flex items-center shadow-lg p-4 rounded-lg">
            <FaUserCircle className="text-purple-600 mr-3 text-2xl" />
            <div>
              <h3 className="text-lg font-medium">Created By</h3>
              <p className="text-gray-700 text-[14px]">{magazine.creator?.name || magazine.creator?._id || 'Unknown Creator'}</p>
            </div>
          </div>
         
        </div>
      </div>
      {/* magazine articles */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-8">
        {magazine?.articles?.length > 0 && magazine?.articles?.map((article,index)=>(
          <NewsCard key={index} article={article}/>
        ))}
      </div>
      
    </div>
  );
};

export default MagazineDetails;
