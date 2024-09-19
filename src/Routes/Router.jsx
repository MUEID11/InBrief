/* eslint-disable no-unused-vars */

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home';
import LatestNewsSection from '../Components/LatestNewsSection';
import BusinessNewsSection from '../Components/BusinessNewsSection';
import SportsNewsSection from '../Components/SportsNewsSection';
import SignUp from '../Pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // {
      //   path: "/latest-news",
      //   element: <LatestNewsSection />
      // },
      // {
      //   path: "/business",
      //   element: <BusinessNewsSection />
      // },
      // {
      //   path: "/sports",
      //   element: <SportsNewsSection />
      // },
      {
        path: 'signup',
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
