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
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1726531200&semt=ais_hybrid",
      name: "Joe Alen",
      channel: "CNN",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1726531200&semt=ais_hybrid",
      name: "Alexa Timber",
      channel: "Formula 1",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1726531200&semt=ais_hybrid",
      name: "Asley Star",
      channel: "Goal",
    },
  ];

  const [creators, setCreators] = useState(fakeData);

  console.log(creators);

  return (
    <div className="container mx-auto my-4 p-2">
      <div className="flex justify-between items-center">
        <h2 className="font-bold sm:text-3xl text-2xl font-inter mb-4">
          Top Creator
        </h2>
        <Link
          to={"/topcreator"}
          className="flex items-center gap-1 font-bold text-red-500 hover:text-red-700 transition-colors duration-300"
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
                className="rounded-full size-14 sm:size-20"
              />
            </div>
            <div>
              <h3 className="sm:text-xl font-semibold">{creator.name}</h3>
              <p className="text-red-600 font-bold">{creator.channel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
