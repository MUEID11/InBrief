import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaUserCircle, FaTag, FaUserFriends } from 'react-icons/fa';
import axios from 'axios';

const MagazineDetails = () => {
  const { magazineId } = useParams();
  const [magazine, setMagazine] = useState(null);
  const [loading, setLoading] = useState(true);
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!magazine) return <p>No magazine details available</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover Image */}
      <div
        className="w-full h-72 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${magazine.coverImageUrl || 'default-image-url'})` }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">{magazine.title || 'No Title'}</h1>
        </div>
      </div>

      {/* Magazine Details */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">{magazine.title || 'No Title'}</h2>
          <p className="text-gray-600 italic">Exploring the intricacies of {magazine.topic || 'Unknown Topic'}</p>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex items-center">
            <FaTag className="text-blue-600 mr-3" />
            <div>
              <h3 className="text-lg font-medium">Topic</h3>
              <p className="text-gray-700">{magazine.topic || 'Unknown Topic'}</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaUserFriends className="text-green-600 mr-3" />
            <div>
              <h3 className="text-lg font-medium">Followers</h3>
              <ul className="text-gray-700 list-disc pl-5">
                {magazine.followers?.length > 0 ? (
                  magazine.followers.map((follower) => (
                    <li key={follower._id}>{follower.name || follower._id}</li>
                  ))
                ) : (
                  <li>No followers available</li>
                )}
              </ul>
            </div>
          </div>

          <div className="flex items-center">
            <FaUserCircle className="text-purple-600 mr-3" />
            <div>
              <h3 className="text-lg font-medium">Created By</h3>
              <p className="text-gray-700">{magazine.creator?.name || magazine.creator?._id || 'Unknown Creator'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineDetails;
