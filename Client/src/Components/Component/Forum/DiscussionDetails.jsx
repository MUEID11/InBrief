const DiscussionDetails = ({ discussion }) => {
    return (
      <div className="p-4 border">
        <h2 className="text-xl font-bold">{discussion.title}</h2>
        <p>{discussion.content}</p>
      </div>
    );
  };
  
  export default DiscussionDetails;