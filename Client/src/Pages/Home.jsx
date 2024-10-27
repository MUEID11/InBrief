import Banner from "../Components/sections/Banner";
import TopLatestNews from "../Components/sections/TopLatestNews";
import Sponsors from "../Components/sections/Sponsors";
import MustRead from "../Components/sections/MustRead";
import EditorPicks from "../Components/sections/EditorPicks";
import BusinessNewsSection from "../Components/sections/BusinessNewsSection";
import SportsNewsSection from "../Components/sections/SportsNewsSection";
import TopCreators from "../Components/sections/TopCreators";
import Newsletter from "../Components/sections/Newsletter";
import Faq from "../Components/sections/Faq";
// import LatestNewsSection from '../Components/sections/LatestNewsSection';
// import { useState } from 'react';

const Home = () => {
  // const [width, setWidth] = useState(window.innerWidth);
  // console.log(width);
  return (
    <div className="">
      <div className="sm:px-4">
        <Banner />
        {/* welcome message and the card under it */}
        {/* latest news */}
        <TopLatestNews isHomeSection={true} />
        {/* <LatestNewsSection /> */}
        {/* bulletin news/sponsors */}
        <Sponsors />
        {/* must read */}
        <MustRead />
        {/* editor pick banner */}
        <EditorPicks />
        {/* cards under editors pick */}
        {/* business & sports */}
        <BusinessNewsSection isHomeSection={true} />
        <SportsNewsSection isHomeSection={true} />
        {/* topcreators */}
        <TopCreators />
        {/* newslatter subscription */}
        {/* <Newsletter /> */}
        {/* Faq */}
        <Faq />
      </div>
    </div>
  );
};

export default Home;
