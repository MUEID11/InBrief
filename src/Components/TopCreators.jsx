import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const TopCreators = () => {
  const fakeData = [
    {
      image:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1726531200&semt=ais_hybrid",
      name: "Alex Young",
      chanel: "BBC News",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1726531200&semt=ais_hybrid",
      name: "Joe Alen",
      chanel: "CNN",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1726531200&semt=ais_hybrid",
      name: "Alexa Timber",
      chanel: "Formula 1",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1726531200&semt=ais_hybrid",
      name: "Asley Star",
      chanel: "Goal",
    },
  ];

  const [creators, setCreators] = useState(fakeData);

  console.log(creators);

  return (
    <div className="container mx-auto my-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-3xl font-inter">Top Creator</h2>
        <button className="text-red-600 text-lg font-semibold flex items-center gap-2">
          {" "}
          See all <FaArrowRight className="text-lg" />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
        {creators.map((creator, index) => (
          <div key={index} className="flex gap-3 items-center ">
            <div>
              <img
                src={creator.image}
                className="rounded-full w-[80px] h-[80px]"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{creator.name}</h3>
              <p className="text-red-600 text-lg font-medium">{creator.chanel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
