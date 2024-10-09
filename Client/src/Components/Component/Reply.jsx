
const Reply = ({ reply }) => {
    return (
        <div className="bg-white p-3 pl-16 rounded  flex items-start">
          <img
            src="https://plus.unsplash.com/premium_photo-1669343628944-d0e2d053a5e8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="User Profile"
            className="w-6 h-6 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold text-[15px]">{reply.username}</p>
            <p className=" text-[14px]">{reply.reply}</p>
          </div>
        </div>
      );
};

export default Reply;