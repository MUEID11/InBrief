import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="container mx-auto my-12 max-w-lg p-4 shadow-md bg-gray-50 text-gray-800 border border-r-4 border-b-4 border-red-600">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <a
            rel="noopener noreferrer"
            href="#"
            className="mb-0 capitalize text-gray-800"
          >
            User ID: {user?._id}
          </a>
        </div>
        <a rel="noopener noreferrer" href="#">
          See All
        </a>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={user?.imageUrl}
            alt=""
            className="block object-cover object-center w-full h-72 bg-gray-500"
          />
          <div className="flex items-center text-xs">
            <span>6 min ago</span>
          </div>
        </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold text-red-600">{user?.name}</h3>
          </a>
          <p className="leading-snug text-gray-600">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
