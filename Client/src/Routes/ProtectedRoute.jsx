import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import userThunk from "../Features/thunks/userThunks";
import ProfileLoadingTest from "../Components/Component/ProfileLoadingTest";
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(userThunk());
  }, [dispatch]);
  console.log("use protection", user);
  if (user?.isLoading) {
    return (
      <div>
        <ProfileLoadingTest />
      </div>
    );
  }
  if (!token || user?.error) {
    //token remove koretei hobe.....
    // localStorage.removeItem('token');
    return <Navigate to="/signin" />;
  }

  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoute;
