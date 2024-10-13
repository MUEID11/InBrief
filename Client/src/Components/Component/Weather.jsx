import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiSearch } from 'react-icons/bi';

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState('Dhaka');
  const [query, setQuery] = useState('Dhaka'); // For API call
  const [loading, setLoading] = useState(true);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API}`
      );
      console.log(response);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(query);
  }, [query]);

  // Handle key press for Enter key
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setQuery(search);
    }
  };

  return (
    <div className="flex justify-center items-center bg-primary-black shadow-lg">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 shadow-lg w-72">
        <div className="flex items-center bg-white/20 px-3 py-2 mb-5">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress} // Add key press event
            className="bg-transparent focus:outline-none text-white flex-grow placeholder-white/70 text-sm w-28"
          />
          <button
            onClick={() => setQuery(search)} // Update query on button click
            className="ml-2 text-white"
          >
            <BiSearch />
          </button>
        </div>

        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : weather ? (
          <div className="flex flex-col items-center text-center space-y-2">
            <h1 className="text-4xl font-bold text-white">
              {Math.round(weather.main.temp)}°C
            </h1>
            <p className="text-base text-white/70">{weather.name}</p>
            <p className="text-sm text-white/70">
              {weather.weather[0].description}
            </p>
          </div>
        ) : (
          <p className="text-white text-center">No data found</p>
        )}

        {weather && (
          <div className="flex justify-between mt-5 text-white/80 text-sm">
            <div className="flex items-center space-x-1.5">
              <span>Humidity:</span>
              <span>{weather.main.humidity}%</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span>Wind:</span>
              <span>{weather.wind.speed} km/h</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;