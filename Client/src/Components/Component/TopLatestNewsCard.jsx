/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const TopLatestNewsCard = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {data.map((item) => (
          <article
            key={item.url}
            className="shadow-lg p-4 border border-red-600 border-r-4 border-b-4 flex flex-col transition-all duration-300 ease-in-out hover:border-gray-600 hover:scale-105"
          >
            <Link to={item.url}>
              <img
                src={item.image}
                alt={item.title}
                className="h-56 object-cover"
              />
              <div className="flex gap-1 items-center mt-2">
                <img
                  src={item.source.icon}
                  className="size-5 bg-red-700 rounded-full object-cover"
                  alt=""
                />
                <span className="text-sm">{item.source?.name}</span>
              </div>
              <h4 className="font-bold my-2">{item.title}</h4>
              <p className="text-sm text-gray-600 mb-1">
                {item.description.slice(0, 100)}...
              </p>

              <div className="flex gap-3 items-center justify-between mb-2">
                <p className="text-red-600 font-semibold">{item.category}</p>
                <span className="text-xs">{item.date}</span>
              </div>
            </Link>
            {/* Read More Button */}
            <button className="text-red-600 self-end font-medium">Read More</button>
          </article>
        ))}
      </div>

      {/* for mobile */}
      {/* <div className="sm:hidden ">
        {data.map((item) => (
          <article key={item.url} className="shadow-lg p-4">
            <Link to={item.url}>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-cover"
                  />
                </div>
                <div className="w-1/2">
                  <div className="flex gap-1 items-center mt-2 ">
                    <img
                      src={item.source.icon}
                      className="size-5 bg-red-700 rounded-full object-cover"
                      alt=""
                    />
                    <span className="text-sm">{item.source?.name}</span>
                  </div>
                  <h4 className="font-bold my-2">{item.title}</h4>
                  <p className="text-sm mb-1">
                    {item.description.slice(0, 100)}...
                  </p>

                  <div className="flex gap-3 items-center">
                    <p className="text-red-600 font-semibold">
                      {item.category}
                    </p>
                    <div className="h-1 w-1 rounded-full bg-gray-600 -mb-1"></div>
                    <span className="text-xs">{item.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div> */}
    </div>
  );
};

export default TopLatestNewsCard;
