import { Outlet } from "react-router-dom";
import Navbar from "../Components/Component/Navbar";
import Footer from "../Components/Component/Footer";

const Main = () => {
  return (
    <div>
      {/* navbar */}

      <Navbar />
      <div>
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Main;
