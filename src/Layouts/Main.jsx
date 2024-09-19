import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";



const Main = () => {
  return (
    <div >
      {/* navbar */}
      <Navbar />
      <div className="container mx-auto">
      <Outlet />
      </div>
      {/* footer */}
    </div>

  );
};

export default Main;