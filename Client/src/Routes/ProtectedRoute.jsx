import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import userThunk, { checkAuthState } from "../Features/thunks/userThunks";
import ProfileLoadingTest from "../Components/Component/ProfileLoadingTest";
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // useEffet(() => {
  //   dispatch(userThunk());
  // }, [dispatch]);
  // On mount, check if the user is authenticated
  console.log("use protection", user);
  if (user?.isLoading) {
    return (
      <div>
        <ProfileLoadingTest />
      </div>
    );
  }
  if (user?.user || token) {
    //token remove koretei hobe.....
    // localStorage.removeItem('token');
    return children;
  }

  return <Navigate to="/signin" />;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoute;
