import { Outlet } from "react-router-dom";
import Navbar from "../Components/Component/Navbar";
import Footer from "../Components/Component/Footer";
import Asidebar from "../Components/Component/Asidebar";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="flex-grow sticky flex">
        {/* Sidebar */}
        <Asidebar />

        {/* Outlet for dynamic content */}
        <div className="flex-grow overflow-hidden mb-8">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
