import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Components/Component/Navbar";
import Footer from "../Components/Component/Footer";
import Asidebar from "../Components/Component/Asidebar";
import { useDispatch } from "react-redux";
import { checkAuthState } from "../Features/thunks/userThunks";
import { useEffect } from "react";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthState()); // Monitor auth state changes
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRestoration />
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
