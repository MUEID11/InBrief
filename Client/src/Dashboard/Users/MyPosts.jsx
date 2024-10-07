import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const MyPosts = () => {
  const { user } = useSelector((state) => state.user);
console.log(user)
  const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     getData();
//   }, [user, setArticles]);

//   const getData = async () => {
//     const { data } = await axios(
//       `${import.meta.env.VITE_API_URL}/articles/${user?.email}`
//     );
//     setArticles(data);
//   };

  return <div></div>;
};

export default MyPosts;
