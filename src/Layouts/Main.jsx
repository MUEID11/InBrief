import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const Main = () => {
  return (
    <div >
      {/* navbar */}
      <Navbar />
      <div className="container mx-auto">
      <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>

  );
};

export default Main;