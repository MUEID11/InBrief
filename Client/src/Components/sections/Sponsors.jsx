import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import bbc from "../../assets/sourceIcons/bbc_news.png";
import cnn from "../../assets/sourceIcons/cnn.png";
import espn from "../../assets/sourceIcons/espn.png";
import fox from "../../assets/sourceIcons/foxNews.png";
import aljazeera from "../../assets/sourceIcons/aljazeera.png";
import businessInsider from "../../assets/sourceIcons/businessInsider.webp";
import dailyStar from "../../assets/sourceIcons/the-daily-star.png";

const sponsorData = [
  {
    id: 1,
    name: "Metal Injection",
    logo: "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png",
    link: "https://metalinjection.com",
  },
  {
    id: 2,
    name: "BBC News",
    logo: bbc,
    link: "https://www.bbc.com/news",
  },
  {
    id: 3,
    name: "CNN",
    logo: cnn,
    link: "https://edition.cnn.com/",
  },
  {
    id: 4,
    name: "ESPN",
    logo: espn,
    link: "https://www.espn.com/",
  },
  {
    id: 5,
    name: "Fox News",
    logo: fox,
    link: "https://www.foxnews.com/",
  },
  {
    id: 6,
    name: "Sky News",
    logo: "https://news.sky.com/resources/sky-news-logo-dark.svg?v=1",
    link: "https://news.sky.com/",
  },
  {
    id: 7,
    name: "AlJazeera",
    logo: aljazeera,
    link: "https://www.aljazeera.com/",
  },
  {
    id: 8,
    name: "Metal Injection",
    logo: "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png",
    link: "https://metalinjection.com",
  },
  {
    id: 9,
    name: "BBC News",
    logo: bbc,
    link: "https://www.bbc.com/news",
  },
  {
    id: 10,
    name: "Business Insider",
    logo: businessInsider,
    link: "https://www.businessinsider.com/",
  },
  {
    id: 11,
    name: "The Daily Star",
    logo: dailyStar,
    link: "https://www.thedailystar.net/",
  },
];

const Sponsors = () => {
  return (
    <section className="container mx-auto sm:mt-14 mt-6 max-sm:px-1">
      <header className="mb-8">
        <h3 className="text-2xl md:text-3xl font-inter font-semibold">Sources</h3>
      </header>
      <main>
        <Marquee pauseOnHover={true}>
          {sponsorData.map((data) => (
            <div key={data.id} className="flex flex-col items-center justify-center mr-16">
              <Link to={data.link}>
                <div className="bg-gradient-to-b from-red-500 via-[#ea510e] to-[#ef7d00] border-5 border-red-500 rounded-full size-28 flex items-center justify-center p-[3px]">
                  <div className="bg-transparent h-full flex flex-col justify-center items-center rounded-full border-4 border-white p-2 overflow-hidden">
                    <img src={data.logo} className="w-full object-cover" alt="" />
                  </div>
                </div>
              </Link>
              <Link to={data.link}>
                <p className="sm:text-xl font-semibold text-orange-700 mt-3">{data.name}</p>
              </Link>
            </div>
          ))}
        </Marquee>
      </main>
    </section>
  );
};

export default Sponsors;
