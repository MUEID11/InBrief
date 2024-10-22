import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../Components/Component/NewsCard";

const CreatorArticles = () => {
  const { name, email } = useParams();
  const [articles, setArticles] = useState([]);
  console.log(name, email);
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
    <div className="container max-auto p-2">
      <div>
        {articles.length > 0 &&
          articles[0]?.createdBy?.imageUrl &&
          articles[0]?.createdBy?.name &&
          articles[0]?.createdBy?.email && (
            <div className="flex  py-4 px-2">
              <img
                src={articles[0]?.createdBy?.imageUrl}
                alt={name}
                className="w-20 h-20 rounded-full"
              />
              <div>
                <p className="text-xl ml-4 font-semibold">
                  {articles[0]?.createdBy?.name}
                </p>
                <p className=" ml-4 ">{articles[0]?.createdBy?.email}</p>
              </div>{" "}
            </div>
          )}
      </div>

      <div>
        <p className="text-2xl py-4 ">
          {" "}
          Articles Posted By {articles[0]?.createdBy?.name}
        </p>

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
