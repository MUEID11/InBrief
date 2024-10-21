import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import SignUp from "../Pages/Authentication/SignUp";
import SignIn from "../Pages/Authentication/SignIn";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import BusinessNewsSection from "../Components/sections/BusinessNewsSection";
import SportsNewsSection from "../Components/sections/SportsNewsSection";
import Profile from "../Pages/Profile";
import ProtectedRoute from "./ProtectedRoute";
import SearchResults from "../Components/Component/searchResults";
import SubmitArticleForm from "../Components/Component/SubmitArticleForm";
import ArticleList from "../Components/Component/ArticleList";
import Bookmarks from "../Pages/Bookmarks";
import Stories from "../Pages/Stories";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";
import MyFeed from "../Pages/MyFeed";
import ForumPage from "../Pages/ForumPage";
import TopLatestNews from "../Components/sections/TopLatestNews";
import NewsDetails from "../Pages/NewsDetails";
import ForumDetails from "../Pages/ForumDetails";
import Blogs from "../Pages/Blogs";
import UserDashboard from "../Pages/UserDashbord/UserDashboard";
import MyPosts from "../Pages/UserDashbord/MyPosts";
import MyVotesArticle from "../Pages/UserDashbord/MyVotesArticle";
import MyBookmarkes from "../Pages/UserDashbord/MyBookmarkes";
import FeaturedBooks from "../Pages/FeaturedBooks";
import BookDetails from "../Pages/BookDetails";
import CreatorArticles from "../Pages/CreatorArticles";

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
        path: "my-feed",
        element: (
          <ProtectedRoute>
            <MyFeed />
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "stories",
        element: <Stories />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "latest-news",
        element: <TopLatestNews />,
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
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "forum",
        element: <ForumPage />,
      },
      {
        path: "forum/forum-details/:id",
        element: <ForumDetails />,
      },

      {
        path: "/search/:category",
        element: <SearchResults />,
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
        path: "submit-article",
        element: (
          <ProtectedRoute>
            <SubmitArticleForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "article-list",
        element: <ArticleList />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/user",
        element: (
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/user/my-posts",
        element: (
          <ProtectedRoute>
            <MyPosts />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/user/my-votedArticles",
        element: (
          <ProtectedRoute>
            <MyVotesArticle />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/user/my-bookmarks",
        element: (
          <ProtectedRoute>
            <MyBookmarkes />
          </ProtectedRoute>
        ),
      },
      {
        path: "/articles/:id",
        element: (
          <ProtectedRoute>
            <NewsDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/articles/creator/:email",
        element: (
          <ProtectedRoute>
          <CreatorArticles/>
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "featured-books",
        element: <FeaturedBooks />,
      },
      {
        path: "books/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/books.json"),
      },
    ],
  },
]);

export default router;
