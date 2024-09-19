import { Outlet } from "react-router-dom";



const Main = () => {
  return (
    <div >
      {/* navbar */}
      
      <div className="container mx-auto">
      <Outlet />
      </div>
      {/* footer */}
    </div>

  );
};

export default Main;