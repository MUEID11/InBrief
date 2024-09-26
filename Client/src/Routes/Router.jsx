import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import SignUp from "../Pages/Authentication/SignUp";
import SignIn from "../Pages/Authentication/SignIn";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import LatestNewsSection from "../Components/sections/LatestNewsSection";
import BusinessNewsSection from "../Components/sections/BusinessNewsSection";
import SportsNewsSection from "../Components/sections/SportsNewsSection";
import Profile from "../Pages/Profile";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "latest-news",
        element: <LatestNewsSection />,
      },
      {
        path: "business",
        element: <BusinessNewsSection />,
      },
      {
        path: "sports",
        element: <SportsNewsSection />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
