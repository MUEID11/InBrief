import TopLatestNewsCard from './TopLatestNewsCard';

const fakeData = [
  {
    url: 'https://metalinjection.net/news/brujeria-cancels-all-tour-dates-due-to-severe-medical-emergency',
    image: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/07/Brujeria-2023.png',
    title: 'Latest NewsBRUJERIA Cancels All Tour Dates Due To "Severe Medical Emergency"',
    description:
      'Brujeria has sadly had to cancel all their upcoming tour dates due to an unspecified severe medical emergency. Brujeria promises an update about their situation soon, but in the meantime we wish everyone in the band all the best.',
    date: '18th September 2024',
    source: {
      name: 'Metal Injection',
      url: 'https://metalinjection.net/',
      icon: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png',
    },
    category: 'music',
  },
  {
    url: 'https://metalinjection.net/news/brujeria-cancels-all-tour-dates-due-to-severe-medical-emergency',
    image: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/07/Brujeria-2023.png',
    title: 'Latest NewsBRUJERIA Cancels All Tour Dates Due To "Severe Medical Emergency"',
    description:
      'Brujeria has sadly had to cancel all their upcoming tour dates due to an unspecified severe medical emergency. Brujeria promises an update about their situation soon, but in the meantime we wish everyone in the band all the best.',
    date: '18th September 2024',
    source: {
      name: 'Metal Injection',
      url: 'https://metalinjection.net/',
      icon: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png',
    },
    category: 'music',
  },
  {
    url: 'https://metalinjection.net/news/brujeria-cancels-all-tour-dates-due-to-severe-medical-emergency',
    image: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/07/Brujeria-2023.png',
    title: 'Latest NewsBRUJERIA Cancels All Tour Dates Due To "Severe Medical Emergency"',
    description:
      'Brujeria has sadly had to cancel all their upcoming tour dates due to an unspecified severe medical emergency. Brujeria promises an update about their situation soon, but in the meantime we wish everyone in the band all the best.',
    date: '18th September 2024',
    source: {
      name: 'Metal Injection',
      url: 'https://metalinjection.net/',
      icon: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png',
    },
    category: 'music',
  },
  {
    url: 'https://metalinjection.net/news/brujeria-cancels-all-tour-dates-due-to-severe-medical-emergency',
    image: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/07/Brujeria-2023.png',
    title: 'Latest NewsBRUJERIA Cancels All Tour Dates Due To "Severe Medical Emergency"',
    description:
      'Brujeria has sadly had to cancel all their upcoming tour dates due to an unspecified severe medical emergency. Brujeria promises an update about their situation soon, but in the meantime we wish everyone in the band all the best.',
    date: '18th September 2024',
    source: {
      name: 'Metal Injection',
      url: 'https://metalinjection.net/',
      icon: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png',
    },
    category: 'music',
  },
];

const TopLatestNews = () => {
  return (
    <section>
      <header className="flex items-center justify-between mb-3">
        <h3 className="text-3xl font-bold ml-2">Latest News</h3>
        <span className="text-red-600 font-semibold mr-2">See All -&gt;</span>
      </header>

      <main>
        <TopLatestNewsCard data={fakeData} />
      </main>
    </section>
  );
};

export default TopLatestNews;
