import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user)
  return (
    
    <div className="container mx-auto sm:my-12 my-2">
      <div className="gird grid-cols-4 gap-8">
      <div className="col-span-1">
        <img src={user?.imageUrl} className="lg:size-64 size-48 rounded-sm " alt="" />
      </div>
      <div className="col-span-2">
        
      </div>
      </div>
    </div>
  );
};

export default Profile;
