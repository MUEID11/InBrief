import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const sponsorData = [
  {
    id: 1,
    name: 'Metal Injection',
    logo: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png',
    link: 'https://metalinjection.com',
  },
  {
    id: 2,
    name: 'Metal Injection',
    logo: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png',
    link: 'https://metalinjection.com',
  },
  {
    id: 3,
    name: 'Metal Injection',
    logo: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png',
    link: 'https://metalinjection.com',
  },
  {
    id: 4,
    name: 'Metal Injection',
    logo: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png',
    link: 'https://metalinjection.com',
  },
  {
    id: 5,
    name: 'Metal Injection',
    logo: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png',
    link: 'https://metalinjection.com',
  },
  {
    id: 6,
    name: 'Metal Injection',
    logo: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png',
    link: 'https://metalinjection.com',
  },
  {
    id: 7,
    name: 'Metal Injection',
    logo: 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/09/metalinjectionlogo-2020-3.png',
    link: 'https://metalinjection.com',
  },
];

const Sponsors = () => {
  return (
    <section className="mt-10">
      <header className="mb-8">
        <h3 className="text-3xl font-bold ml-2">SPONSORS</h3>
      </header>
      <main>
        <Marquee pauseOnHover={true}>
          {sponsorData.map((data) => (
            <div key={data.id} className="flex flex-col items-center justify-center mr-20">
              <Link to={data.link}>
                <div className="bg-gradient-to-b from-red-500 via-[#ea510e] to-[#ef7d00] border-5 border-red-500 rounded-full w-28 h-28 flex items-center justify-center p-[3px]">
                  <div className="bg-transparent h-full flex flex-col justify-center items-center rounded-full border-4 border-white p-2">
                    <img src={data.logo} alt="" />
                  </div>
                </div>
              </Link>
              <Link to={data.link}>
                <p className="text-xl font-semibold text-neutral-800 mt-3">{data.name}</p>
              </Link>
            </div>
          ))}
        </Marquee>
      </main>
    </section>
  );
};

export default Sponsors;
