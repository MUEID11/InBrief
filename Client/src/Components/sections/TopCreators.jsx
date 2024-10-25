/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopCreators = () => {
  const fakeData = [
    {
      image:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1726531200&semt=ais_hybrid",
      name: "Alex Young",
      channel: "BBC News",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/muslim-woman-hijab-job-interview-embracing-diversity-career-opportunities-concept-diversity-workplace-muslim-women-professionals-crosscultural-professionalism_918839-53445.jpg",
      name: "Nur Islam",
      channel: "CNN",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/portrait-one-young-happy-cheerful-600nw-1980856400.jpg",
      name: "Joe Alen",
      channel: "Sky News",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/close-headshot-portrait-smiling-young-260nw-1916406272.jpg",
      name: "Asley Star",
      channel: "Fox News",
    },
  ];

  const [creators, setCreators] = useState(fakeData);

  console.log(creators);

  return (
    <div className="container mx-auto my-14 p-2 max-sm:px-2">
      <div className="flex justify-between items-center mb-6 mt-4">
        <h2 className="text-2xl md:text-3xl font-inter font-semibold ">
          Top Creators
        </h2>
        <Link
          to={"/topcreator"}
          className="flex items-center gap-1 font-bold text-red-600 hover:text-red-700 transition-colors duration-300"
        >
          See All <FaArrowRight />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {creators.map((creator, index) => (
          <div key={index} className="flex gap-3 items-center ">
            <div>
              <img
                src={creator.image}
                className="rounded-full size-14 sm:size-20 object-cover"
              />
            </div>
            <div>
              <h3 className="sm:text-xl font-bold">{creator.name}</h3>
              <p className="text-red-600 font-semibold text-sm sm:text-base">
                {creator.channel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
