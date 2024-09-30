
import { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get('/articles');
      setArticles(response.data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Latest Articles</h2>
      {/* {articles.map((article) => (
        <div key={article._id}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))} */}
    </div>
  );
};

export default ArticleList;
