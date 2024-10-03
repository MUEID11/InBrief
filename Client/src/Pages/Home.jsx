import Banner from "../Components/sections/Banner";
import TopLatestNews from "../Components/sections/TopLatestNews"
import Sponsors from "../Components/sections/Sponsors";
import MustRead from "../Components/sections/MustRead";
import EditorPicks from "../Components/sections/EditorPicks";
import BusinessNewsSection from "../Components/sections/BusinessNewsSection"
import SportsNewsSection from "../Components/sections/SportsNewsSection"
import TopCreators from "../Components/sections/TopCreators";
import Newsletter from "../Components/sections/Newsletter"
import LatestNewsSection from "../Components/sections/LatestNewsSection";


const Home = () => {
  return (
    <div className="">
      <div className="ml-6">
      <Banner />
      {/* welcome message and the card under it */}
      {/* latest news */}
      <TopLatestNews />
      <LatestNewsSection />
      {/* bulletin news/sponsors */}
      <Sponsors />
      {/* must read */}
      <MustRead />
      {/* editor pick banner */}
      <EditorPicks />
      {/* cards under editors pick */}
      {/* business & sports */}
      <BusinessNewsSection />
      <SportsNewsSection />
      {/* topcreators */}
      <TopCreators />
      {/* newslatter subscription */}
      <Newsletter />
      {/* something */}
    </div>
    </div>
  );
};

export default Home;
