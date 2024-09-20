// import LatestNewsSection from '../Components/LatestNewsSection';
// import BusinessNewsSection from '../Components/BusinessNewsSection';
// import SportsNewsSection from '../Components/SportsNewsSection';
// import TopCreators from '../Components/TopCreator';
import Sponsors from "../Components/Sponsors";
import TopLatestNews from "../Components/TopLatestNews";
import LatestNewsSection from "../Components/LatestNewsSection";
import BusinessNewsSection from "../Components/BusinessNewsSection";
import SportsNewsSection from "../Components/SportsNewsSection";
import TopCreators from "../Components/TopCreators";
import Banner from "../Components/Banner";
import Newsletter from "../Components/Newsletter";
import MustRead from "../Components/MustRead";
import EditorPicks from "../Components/EditorPicks"
const Home = () => {
  return (
    <div>
      <Banner />
      {/* welcome message and the card under it */}
      {/* latest news */}
      <TopLatestNews />
      {/* bulletin news/sponsors */}
      <Sponsors />
      {/* must read */}
      <MustRead />
      {/* editor pick banner */}
      <EditorPicks  />
      {/* cards under editors pick */}
      <LatestNewsSection />
      {/* business & sports */}
      <div className="flex flex-col lg:flex-row justify-between mb-8">
        <div className="w-full lg:w-1/2 pr-4 mb-8 lg:mb-0">
          <BusinessNewsSection />
        </div>
        <div className="w-full lg:w-1/2 pl-4">
          <SportsNewsSection />
        </div>
      </div>
      {/* topcreators */}
      <TopCreators></TopCreators>
      {/* newslatter subscription */}
      <Newsletter />
      {/* something */}
    </div>
  );
};

export default Home;