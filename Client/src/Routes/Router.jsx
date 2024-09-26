import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home';
// import LatestNewsSection from '../Components/LatestNewsSection';
// import BusinessNewsSection from '../Components/BusinessNewsSection';
// import SportsNewsSection from '../Components/SportsNewsSection';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import About from '../Pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
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
      {
        path: 'signin',
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
