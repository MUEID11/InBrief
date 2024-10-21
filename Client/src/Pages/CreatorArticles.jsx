import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../Components/Component/NewsCard";

const CreatorArticles = () => {
  const { email } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/articles/user/${email}`
      );
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };
  console.log(articles);
  return (
    <div>
      <div>
        <p className="text-2xl py-4 "> Articles Posted By this user</p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-8">
          {articles.length > 0 ? (
            articles.map((article) => (
              <NewsCard key={article._id} article={article} />
            ))
          ) : (
            <p className="text-xl text-red-600">
              No Articles posted by this user yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorArticles;
