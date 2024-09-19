// import LatestNewsSection from '../Components/LatestNewsSection';
// import BusinessNewsSection from '../Components/BusinessNewsSection';
// import SportsNewsSection from '../Components/SportsNewsSection';
// import TopCreators from '../Components/TopCreator';
import Sponsors from '../Components/Sponsors';
import TopLatestNews from '../Components/TopLatestNews';
import LatestNewsSection from '../Components/LatestNewsSection';
import BusinessNewsSection from '../Components/BusinessNewsSection';
import SportsNewsSection from '../Components/SportsNewsSection';
import TopCreators from '../Components/TopCreators';
const Home = () => {
  return (
    <div>
      hellow from home CodeWarrirors .....
      {/* welcome message and the card under it */}
      {/* latest news */}
      <TopLatestNews />
      {/* bulletin news/sponsors */}
      <Sponsors />
      {/* must read */}
      {/* editor pick banner */}
      {/* cards under editors pick */}
      {/* <LatestNewsSection></LatestNewsSection> */}
      <LatestNewsSection />
      {/* business & sports */}
      <TopCreators></TopCreators>
      <div className="flex flex-col lg:flex-row justify-between mb-8">
        <div className="w-full lg:w-1/2 pr-4 mb-8 lg:mb-0">
          <BusinessNewsSection />
        </div>
        <div className="w-full lg:w-1/2 pl-4">
          <SportsNewsSection />
        </div>
      </div>
      {/* top creators */}
      {/* <TopCreators></TopCreators> */}
      {/* newslatter subscription */}
      {/* something */}
    </div>
  );
};

export default Home;
