const DiscussionList = ({ discussions, onSelect }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-2xl font-bold mb-4">Join the Discussion</h2>
      {discussions.length === 0 ? (
        <p>No discussions available. Create one now!</p>
      ) : (
        discussions.map((discussion) => (
          <div
            key={discussion.id}
            onClick={() => onSelect(discussion)}
            className="p-4 mb-2 border cursor-pointer hover:bg-gray-100 rounded"
          >
             <h3 className="text-lg font-semibold">{discussion.title}</h3>
            <p>{discussion.content.substring(0, 100)}...</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DiscussionList;
