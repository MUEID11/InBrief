import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for route change

const SearchResults = () => {
    const { category } = useParams();  // Get category from URL params
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // useNavigate for navigation

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/articles?category=${category}`);                
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }
                
                const data = await response.json();
                setResults(data.data);  // Assuming `data.data` contains the search results
            } catch (error) {
                setError(error.message);
            }
        };

        if (category) {
            fetchData();
        }

        // Cleanup function to reset data when leaving the page or navigating away
        return () => {
            setResults([]);  // Clear results when leaving the page
        };
    }, [category]);

    // Function to handle leaving the page
    const handleBack = () => {
        setResults([]);  // Clear data when going back
        navigate('/');  // Navigate back to home page or another page
    };

    if (error) {
        return <div>Error fetching data: {error}</div>;
    }

    return (
        <div>
            <h1>Search Results for Category: {category}</h1>
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
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default SearchResults;
