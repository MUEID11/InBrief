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
    <div>
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
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-1/2">
          <BusinessNewsSection />
        </div>
        <div className="w-full lg:w-1/2">
          <SportsNewsSection />
        </div>
      </div>
      {/* topcreators */}
      <TopCreators />
      {/* newslatter subscription */}
      <Newsletter />
      {/* something */}
    </div>
  );
};

export default Home;
