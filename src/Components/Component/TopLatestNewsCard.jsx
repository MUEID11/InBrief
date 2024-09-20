/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const TopLatestNewsCard = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-sm:hidden">
        {data.map((item) => (
          <article key={item.url} className="shadow-lg p-4 rounded-3xl">
            <Link to={item.url}>
              <img src={item.image} alt={item.title} className="rounded-2xl h-56 object-cover" />
              <div className="flex gap-1 items-center mt-2">
                <img src={item.source.icon} className="h-5 w-5 bg-red-700 rounded-full object-cover" alt="" />
                <span className="text-sm">{item.source?.name}</span>
              </div>
              <h4 className="font-bold my-2">{item.title}</h4>
              <p className="text-sm mb-1">{item.description.slice(0, 100)}...</p>

              <div className="flex gap-3 items-center">
                <p className="text-red-500 font-semibold">{item.category}</p>
                <span className="text-xs">{item.date}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* for mobile */}
      <div className="sm:hidden">
        {data.map((item) => (
          <article key={item.url} className="shadow-lg p-4 rounded-3xl">
            <Link to={item.url}>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <img src={item.image} alt={item.title} className="rounded-2xl h-full object-cover" />
                </div>
                <div className="w-1/2">
                  <div className="flex gap-1 items-center mt-2 ">
                    <img src={item.source.icon} className="size-5 bg-red-700 rounded-full object-cover" alt="" />
                    <span className="text-sm">{item.source?.name}</span>
                  </div>
                  <h4 className="font-bold my-2">{item.title}</h4>
                  <p className="text-sm mb-1">{item.description.slice(0, 100)}...</p>

                  <div className="flex gap-3 items-center">
                    <p className="text-red-500 font-semibold">{item.category}</p>
                    <div className="h-1 w-1 rounded-full bg-gray-600 -mb-1"></div>
                    <span className="text-xs">{item.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TopLatestNewsCard;
