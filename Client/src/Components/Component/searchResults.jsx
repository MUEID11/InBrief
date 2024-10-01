import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SearchResults = () => {
  const { category } = useParams(); // Get category from URL params
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/articles/search?category=${category}`
        );
        console.log(response);

        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);

        setResults(data); // Assuming `data.data` contains the search results
      } catch (error) {
        setError(error.message);
      }
    };

    // if (category) {
    fetchData();
    // }
  }, [category]);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }
  {
    /* <div key={item._id} className="news-item">
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title} />
              <p>{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div> */
  }
  return (
    <div className="container mx-auto">
      <h1>{category}</h1>
      {results?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {results.map((item) => (
            <article
              key={item?.url}
              className="shadow-lg p-4 border border-red-600 border-r-4 border-b-4 flex flex-col transition-all duration-300 ease-in-out hover:border-gray-600 hover:scale-105"
            >
              <Link to={item?.url}>
                {/* <img src={item?.image} alt={item?.title} className="h-56 object-cover" /> */}
                <img
                  src="https://via.placeholder.com/300x200"
                  className="h-56 object-cover"
                />
                <div className="flex gap-1 items-center mt-2">
                  {/* <img src={item?.source?.icon} className="size-5 bg-red-700 rounded-full object-cover" alt="" /> */}
                  <div className="size-3 bg-red-700 rounded-full"></div>
                  <span className="text-sm">{item?.source?.name}</span>
                </div>
                <h4 className="font-bold my-2">{item?.title}</h4>
                <p className="text-sm text-gray-600 mb-1">
                  {item?.description.slice(0, 100)}...
                </p>

                <div className="flex gap-3 items-center justify-between mb-2">
                  <p className="text-red-600 font-semibold">{item?.category}</p>
                  <span className="text-xs">{item?.date}</span>
                </div>
              </Link>
              {/* Read More Button */}
              <button className="text-red-600 self-end font-medium">
                Read More
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default SearchResults;
