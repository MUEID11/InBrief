import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home';
import SignUp from '../Pages/Authentication/SignUp';
import SignIn from '../Pages/Authentication/SignIn';
import About from '../Pages/About';
import ErrorPage from '../Pages/ErrorPage';
import LatestNewsSection from '../Components/sections/LatestNewsSection';
import BusinessNewsSection from '../Components/sections/BusinessNewsSection';
import SportsNewsSection from '../Components/sections/SportsNewsSection';
import Profile from '../Pages/Profile';
import ProtectedRoute from './ProtectedRoute';
import SearchResults from '../Components/Component/searchResults';
import SubmitArticleForm from '../Components/Component/SubmitArticleForm';
import ArticleList from '../Components/Component/ArticleList';

import Bookmarks from '../Pages/Bookmarks';
import Stories from '../Pages/Stories';
import Contact from '../Pages/Contact';
import Dashboard from '../Pages/Dashboard';
import NewsDetails from '../Components/Component/NewsDetails';
import MyPosts from '../Dashboard/Users/MyPosts';
import MyFeed from '../Pages/MyFeed';
import ForumPage from '../Pages/ForumPage';
import TopLatestNews from '../Components/sections/TopLatestNews';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'my-feed',
        element: <MyFeed />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'stories',
        element: <Stories />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'latest-news',
        element: <TopLatestNews />,
      },
      {
        path: 'business',
        element: <BusinessNewsSection />,
      },
      {
        path: 'sports',
        element: <SportsNewsSection />,
      },
      {
        path: 'forum',
        element: <ForumPage />,
      },
      {
        path: 'forum',
        element: <ForumPage />,
      },
      {
        path: '/search/:category',
        element: <SearchResults />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'submit-article',
        element: (
          <ProtectedRoute>
            <SubmitArticleForm />
          </ProtectedRoute>
        ),
      },
      {
        path: 'article-list',
        element: <ArticleList />,
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/my-posts',
        element: (
          <ProtectedRoute>
            <MyPosts />
          </ProtectedRoute>
        ),
      },
      {
        path: '/articles/:id',
        element: <NewsDetails />,
      },
      {
        path: 'profile',
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
