import React from "react";

const DiscussionList = ({ discussions, onSelectDiscussion }) => {
  return (
    <div>
      {discussions.map((discussion) => (
        <div key={discussion._id} onClick={() => onSelectDiscussion(discussion)} className="border p-2 mb-2 cursor-pointer">
          <h3 className="font-bold">{discussion.title}</h3>
          <p>{discussion.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DiscussionList;
