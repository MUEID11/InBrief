import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
    const { category } = useParams();  // Get category from URL params
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/articles?category=${category}`);
                
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }
                
                const data = await response.json();
                console.log(data);
                
                setResults(data.data);  // Assuming `data.data` contains the search results
            } catch (error) {
                setError(error.message);
            }
        };

        if (category) {
            fetchData();
        }
    }, [category]);

    if (error) {
        return <div>Error fetching data: {error}</div>;
    }

    return (
        <div>
            <h1>{category}</h1>
            {results.length > 0 ? (
                <div>
                    {results.map((item) => (
                        <div key={item._id} className="news-item">
                            <h2>{item.title}</h2>
                            <img src={item.image} alt={item.title} />
                            <p>{item.description}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No results found</div>
            )}
        </div>
    );
};

export default SearchResults;
