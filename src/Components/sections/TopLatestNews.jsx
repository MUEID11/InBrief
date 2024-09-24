import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import TopLatestNewsCard from "../Component/TopLatestNewsCard";

const fakeData = [
  {
    url: "https://metalinjection.net/news/brujeria-cancels-all-tour-dates-due-to-severe-medical-emergency",
    image:
      "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/07/Brujeria-2023.png",
    title:
      'Latest NewsBRUJERIA Cancels All Tour Dates Due To "Severe Medical Emergency"',
    description:
      "Brujeria has sadly had to cancel all their upcoming tour dates due to an unspecified severe medical emergency. Brujeria promises an update about their situation soon, but in the meantime we wish everyone in the band all the best.",
    date: "18th September 2024",
    source: {
      name: "Metal Injection",
      url: "https://metalinjection.net/",
      icon: "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png",
    },
    category: "music",
  },
  {
    url: "https://metalinjection.net/news/brujeria-cancels-all-tour-dates-due-to-severe-medical-emergency",
    image:
      "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/07/Brujeria-2023.png",
    title:
      'Latest NewsBRUJERIA Cancels All Tour Dates Due To "Severe Medical Emergency"',
    description:
      "Brujeria has sadly had to cancel all their upcoming tour dates due to an unspecified severe medical emergency. Brujeria promises an update about their situation soon, but in the meantime we wish everyone in the band all the best.",
    date: "18th September 2024",
    source: {
      name: "Metal Injection",
      url: "https://metalinjection.net/",
      icon: "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png",
    },
    category: "music",
  },
  {
    url: "https://metalinjection.net/news/brujeria-cancels-all-tour-dates-due-to-severe-medical-emergency",
    image:
      "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/07/Brujeria-2023.png",
    title:
      'Latest NewsBRUJERIA Cancels All Tour Dates Due To "Severe Medical Emergency"',
    description:
      "Brujeria has sadly had to cancel all their upcoming tour dates due to an unspecified severe medical emergency. Brujeria promises an update about their situation soon, but in the meantime we wish everyone in the band all the best.",
    date: "18th September 2024",
    source: {
      name: "Metal Injection",
      url: "https://metalinjection.net/",
      icon: "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png",
    },
    category: "music",
  },
  {
    url: "https://metalinjection.net/news/brujeria-cancels-all-tour-dates-due-to-severe-medical-emergency",
    image:
      "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/07/Brujeria-2023.png",
    title:
      'Latest NewsBRUJERIA Cancels All Tour Dates Due To "Severe Medical Emergency"',
    description:
      "Brujeria has sadly had to cancel all their upcoming tour dates due to an unspecified severe medical emergency. Brujeria promises an update about their situation soon, but in the meantime we wish everyone in the band all the best.",
    date: "18th September 2024",
    source: {
      name: "Metal Injection",
      url: "https://metalinjection.net/",
      icon: "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png",
    },
    category: "music",
  },
];

const TopLatestNews = () => {
  return (
    <section className="sm:mt-14 mt-6 m-2">
      <header className="flex items-center justify-between mb-3">
        <h3 className="text-2xl md:text-3xl font-inter font-semibold  ml-2 my-2">
          Top Latest News
        </h3>
        <Link
          to={"/toplatest"}
          className="flex items-center gap-1 font-bold text-red-500 hover:text-red-700 transition-colors duration-300"
        >
          See All <FaArrowRight />
        </Link>
      </header>

      <main>
        <TopLatestNewsCard data={fakeData} />
      </main>
    </section>
  );
};

export default TopLatestNews;
