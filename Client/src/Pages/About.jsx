import { Link } from "react-router-dom";
import about1 from "../assets/about1.avif";
import about2 from "../assets/about2.avif";
import about3 from "../assets/aboutvector2.png";
import arrow from "../assets/arrow.svg";
import Marquee from "react-fast-marquee";
import bbc from "../assets/sourceIcons/bbc_news.png";
import cnn from "../assets/sourceIcons/cnn.png";
import espn from "../assets/sourceIcons/espn.png";
import fox from "../assets/sourceIcons/foxNews.png";
import aljazeera from "../assets/sourceIcons/aljazeera.png";
import businessInsider from "../assets/sourceIcons/businessInsider.webp";
import dailyStar from "../assets/sourceIcons/the-daily-star.png";

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
const teamInfo = [
  {
    id: 1,
    name: "Sumaiya Urmi",
    image:
      "https://res.cloudinary.com/dv8zsvl4z/image/upload/v1729838505/IMG_20231220_183830_1_1_crbw8a.jpg",
    link: "https://www.linkedin.com/in/sumaiya-urmi021",
  },
  {
    id: 2,
    name: "Meherun Nesa Meghla",
    image:
      "https://res.cloudinary.com/duiymk5mu/image/upload/v1729768028/1688748225552_oni8xh.jpg",
    link: "https://www.linkedin.com/in/meherun-nesa-meghla/",
  },
  {
    id: 3,
    name: "Mehedi Hasan",
    image:
      "https://res.cloudinary.com/ddaa3wb4w/image/upload/v1729840870/me_2_ki5lqw.jpg",
    link: "www.linkedin.com/in/mehedirangpur",
  },
  {
    id: 4,
    name: "MD. Ziad Arman Ujan",
    image:
      "https://res.cloudinary.com/duiymk5mu/image/upload/v1729767533/e70fc84c-3a1e-46c5-8d3d-bb14e836bf79_mmzr4t.jpg",
    link: "https://www.linkedin.com/in/md-ziad/?fbclid=IwY2xjawGG_U5leHRuA2FlbQIxMAABHQpXaS69gVXcWw-cVOP3a2P9mZbMoavcKbrWJzU7bm4W5FeaTOI2f_ULjg_aem_P2thxR4ZdtCMjVJdGw9BTg",
  },
  {
    id: 5,
    name: "Istiak Jisan",
    image:
      "https://res.cloudinary.com/dijckl5ab/image/upload/v1729767832/JPEG_20230407_135946_169083774722124815__1_-removebg-preview_bpoabs.png?fbclid=IwY2xjawGHCd5leHRuA2FlbQIxMAABHWEusYQpCBGgqr3yRpoCQDlgioqooGTJffsF7EoJyLRVG-IpbGB5acn6Fw_aem_wcdoY7GxGr9URwAlpYqBPA",
    link: "https://www.linkedin.com/in/istiakjisan/",
  },
];

const About = () => {
  return (
    <div className="max-sm:px-2 container mx-auto px-3">
      {/* HEADER SECTION OF THE PAGE */}
      <section className="text-center max-w-[800px] mx-auto my-10 text-stone-900">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-inter">
          ABOUT US
        </h1>
        <p className="text-stone-500 font-medium mt-3 text-lg max-sm:text-base leading-tight font-serif">
          InBrief is a personalized news platform that curates top stories from
          reliable sources, offering users a streamlined, customizable news
          experience
        </p>
      </section>

      {/* MIDDLE TWO IMAGES */}
      <section className="flex gap-4 h-96 w-full max-sm:flex-col">
        <div className="md:w-2/3 rounded-3xl overflow-hidden">
          <img
            src={about1}
            alt=""
            className="hover:scale-110 transition-all duration-500"
          />
        </div>
        <div className="md:flex-1 rounded-3xl overflow-hidden">
          <img
            src={about2}
            alt=""
            className="h-full w-full object-cover hover:scale-110 transition-all duration-500"
          />
        </div>
      </section>

      {/* OUR STORY / MISSION / VISION */}
      <section className="flex gap-20 max-sm:gap-5 mt-16 max-sm:flex-col">
        <div className="md:w-1/3 flex gap-6 max-sm:gap-2 items-start">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-inter font-semibold uppercase">
            Our Story
          </h2>

          <img
            src={arrow}
            className="w-[24px] md:w-[30px]  lg:w-[36px] max-sm:w-11 rotate-90 md:-mt-3"
            alt=""
          />
        </div>
        <div className="md:w-2/3 ">
          <p className="mb-12 max-sm:mb-8 font-semibold ">
            InBrief was born from a desire to make news consumption more
            streamlined and meaningful. In a world filled with overwhelming
            information, we saw the need for a platform that curates the most
            relevant and trustworthy news from various sources, all in one
            place. Our mission is to empower readers by offering personalized
            news feeds, allowing them to stay informed while filtering out the
            noise.
          </p>
          <p className="text-stone-600">
            What started as a small project among like-minded individuals
            passionate about technology and current affairs has evolved into a
            comprehensive platform with features like customizable news
            categories, trending topics, and community engagement. At InBrief,
            we believe in the power of information and the need for users to
            take control of what they consume. With a strong emphasis on
            simplicity, reliability, and user experience, we are redefining how
            people interact with the news.
            <br />
            Whether you’re looking for the latest global headlines, in-depth
            analysis, or niche topics, InBrief brings everything to your
            fingertips. Our journey is just beginning, and we are excited to
            continue innovating, always striving to deliver a better experience
            for our users.
            <br />
          </p>
        </div>
      </section>

      {/* OUR SPONSORS SLIDER */}
      <section className="mt-28">
        <header className="mb-14">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-inter font-semibold uppercase">
            Our Sponsors
          </h3>
        </header>
        <main>
          <Marquee pauseOnHover={true}>
            {sponsorData.map((data) => (
              <div
                key={data.id}
                className="flex flex-col items-center justify-center mr-12"
              >
                <Link to={data.link}>
                  <div className="bg-gradient-to-b from-red-600 via-[#ea510e] to-[#ef7d00] border-5 border-red-600 rounded-full size-28 flex items-center justify-center p-[3px]">
                    <div className="bg-transparent h-full flex flex-col justify-center items-center rounded-full border-4 border-white p-2">
                      <img src={data.logo} alt="" />
                    </div>
                  </div>
                </Link>
                <Link to={data.link}>
                  <p className="text-xl font-semibold text-neutral-600 mt-3">
                    {data.name}
                  </p>
                </Link>
              </div>
            ))}
          </Marquee>
        </main>
      </section>

      {/* Our team */}
      <section>
        <header className="mt-16 mb-5">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-inter text-center mb-3 font-semibold uppercase">
            Our Team
          </h3>
          <p className="text-center px-4">
            At InBrief, our success stems from the powerful collaboration of our
            five dedicated team members. Each individual brings unique strengths
            and talents, allowing us to tackle challenges creatively and
            efficiently. Our commitment to open communication and mutual support
            has fostered a positive environment where ideas flourish. Together,
            we strive to achieve our shared vision and make a meaningful impact
            in the world of news aggregation.
          </p>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 ">
          {teamInfo.map((data, index) => (
            <div key={data.id} className="flex justify-center">
              <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img
                  className="object-cover w-full h-56"
                  src={data.image}
                  alt="avatar"
                />
                <div className="py-5 text-center">
                  <Link
                    to={data.link}
                    className="text-lg font-medium text-black"
                  >
                    {data.name}
                  </Link>
                  <br />
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    Admin
                  </span>
                </div>
              </div>
            </div>
          ))}
        </main>
      </section>
      {/* Join With us  */}
      <section className="mt-28 flex max-sm:flex-col gap-10 items-center justify-center">
        <div className="w-1/2 max-sm:w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium uppercase">
            Join with Us
          </h2>
          <p className="mt-5 text-stone-600 max-w-[500px] font-medium">
            Join us at InBrief, where news isn't just gathered—it's tailored for
            you. We’re creating a platform that brings together the latest, most
            relevant stories from trusted sources, ensuring you stay informed
            and engaged. Be a part of our community and experience news that
            fits your world."
            <br />
            <br />
            Together, let's reshape how news is discovered, shared, and
            discussed in a way that connects us all.
          </p>
          <Link to="/signup">
            <button className="bg-red-600 text-white font-semibold py-3 px-10 rounded-lg transition-all duration-500 hover:bg-red-700 mt-6">
              Join Us Now
            </button>
          </Link>
        </div>

        {/* JOIN US CTA */}
        <div className="w-1/2 max-sm:w-full">
          <img src={about3} alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
