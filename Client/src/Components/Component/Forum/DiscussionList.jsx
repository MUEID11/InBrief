const DiscussionList = ({ discussions, onSelect }) => {
    return (
      <div className="p-4">
        {discussions.map((discussion) => (
          <div
            key={discussion.id}
            onClick={() => onSelect(discussion)}
            className="p-4 mb-2 border cursor-pointer hover:bg-gray-100"
          >
            <h3 className="text-lg font-semibold">{discussion.title}</h3>
            <p>{discussion.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default DiscussionList;
  