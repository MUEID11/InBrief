import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../Components/Component/Forum/CommentSection";
import ForumCommentt from "../Components/Component/Forum/ForumCommentt";
import { useGetForumCommentQuery } from "../services/ForumComment/forumCommentApi";

const ForumDetails = () => {
  const [forum, setForum] = useState({});
  const { id } = useParams();
  // const [selectedDiscussion, setSelectedDiscussion] = useState(null);

  // Handle adding a comment to the selected discussion
  // const handleAddComment = (newComment) => {
  //   setSelectedDiscussion((prevDiscussion) => ({
  //     ...prevDiscussion,
  //     comments: [...prevDiscussion.comments, newComment],
  //   }));
  // };

  useEffect(() => {
    const fetchForum = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/forum/${id}`);
        const data = await response.json();
        setForum(data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchForum();
  }, []);
  // console.log("megh", forum);

  let { data: comments, isLoading: commentLoading, isError: commentError } = useGetForumCommentQuery(id) || {};
  console.log(comments);

  // total commentss count
  let totals = comments?.map((item) => item?.replies?.length);
  let ultimateTotal = totals?.reduce((acc, item) => acc + item, 0);
  ultimateTotal = ultimateTotal + comments?.length;

  return (
    <div className="flex justify-center items-center">
      <div className="rounded-sm p-4 max-w-2xl w-full relative ">
        <div className="flex items-center mb-4">
          <img src={forum?.userImage} alt={forum?.username} className="w-10 h-10 rounded-full border-[3px] border-solid border-green-600 mr-2" />
          <h1 className="font-semibold">{forum?.username}</h1>
        </div>
        <h2 className="text-xl font-bold mb-2">{forum.title}</h2>
        <img className="w-full h-72 object-cover mb-5 rounded-md" src={forum?.image} alt="" />
        <p className="text-neutral-800">{forum.content}</p>
        <button className="absolute top-7 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"></button>

        <h3 className="text-xl  md:text-2xl font-bold text-gray-800 pb-2 pt-10 ">Comments ({Number(ultimateTotal)})</h3>

        <CommentSection
          discussionId={forum?._id}
          // selectedDiscussion={selectedDiscussion}
          // onComment={handleAddComment}
        ></CommentSection>

        <div className="mt-4 py-4">
          <div>
            <hr />
            {comments?.map((comment) => {
              return <ForumCommentt key={comment?._id} comment={comment} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumDetails;
