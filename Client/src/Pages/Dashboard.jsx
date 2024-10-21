import React from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import UserDashboard from "./UserDashbord/UserDashboard";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
// console.log(user)

  return (
    <div>
      {user.role === "user" && <UserDashboard/> }
   
      {user.role === "admin" && <AdminDashboard/>}
    </div>
  );
};

export default Dashboard;
