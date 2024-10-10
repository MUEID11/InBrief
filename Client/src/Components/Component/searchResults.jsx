import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const SearchResults = () => {
  const { category } = useParams(); // Get category from URL params
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/articles/search?category=${category}`);
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

    if (category) {
      setError(null);
      setResults([]);
      fetchData();
    }
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
    <div className="container mx-auto px-7 pt-3">
      <h1 className='lg:text-4xl text-2xl font-semibold text-center py-4'>{category}</h1>
      {results && results?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {results.map((item) => (
            <NewsCard key={item._id} article={item} />
          ))}
        </div>
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default SearchResults;
