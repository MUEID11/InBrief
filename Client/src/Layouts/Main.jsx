import { Outlet } from "react-router-dom";
import Navbar from "../Components/Component/Navbar";
import Footer from "../Components/Component/Footer";
import Asidebar from "../Components/Component/Asidebar";

const Main = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <div
        className="min-h-[calc(100vh-74px)] flex"
      >
        <div> <Asidebar /></div>
        <div className="mb-8"><Outlet /></div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Main;
