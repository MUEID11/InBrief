import { Link } from 'react-router-dom';
import about1 from '../assets/about1.avif';
import about2 from '../assets/about2.avif';
import about3 from '../assets/aboutvector2.png';
import arrow from '../assets/arrow.svg';
import Marquee from 'react-fast-marquee';

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

const About = () => {
  return (
    <div className="max-sm:px-2">
      {/* HEADER SECTION OF THE PAGE */}
      <section className="text-center max-w-[800px] mx-auto my-10 text-stone-900">
        <h1 className="font-bold text-5xl max-sm:text-4xl">ABOUT US</h1>
        <p className="text-stone-500 font-medium mt-3 text-lg max-sm:text-base leading-tight">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique nostrum non consequuntur, autem accusamus quaerat unde iste deleniti possimus atque.
        </p>
      </section>

      {/* MIDDLE TWO IMAGES */}
      <section className="flex gap-4 h-96 w-full max-sm:flex-col">
        <div className="md:w-2/3 rounded-3xl overflow-hidden">
          <img src={about1} alt="" className="hover:scale-110 transition-all duration-500" />
        </div>
        <div className="md:flex-1 rounded-3xl overflow-hidden">
          <img src={about2} alt="" className="h-full w-full object-cover hover:scale-110 transition-all duration-500" />
        </div>
      </section>

      {/* OUR STORY / MISSION / VISION */}
      <section className="flex gap-20 max-sm:gap-5 mt-16 max-sm:flex-col">
        <div className="md:w-1/3 flex gap-9 max-sm:gap-2 items-start">
          <h2 className="font-bold text-5xl max-sm:text-4xl uppercase">Our Story</h2>

          <img src={arrow} className="w-20 max-sm:w-11 rotate-90 md:-mt-3" alt="" />
        </div>
        <div className="md:w-2/3 ">
          <p className="mb-12 max-sm:mb-8 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda quisquam in eveniet. Vitae, recusandae quibusdam omnis voluptas aspernatur beatae amet
            adipisci cum molestias dignissimos. Suscipit nam esse labore sed obcaecati animi rerum, reiciendis, hic officia repellendus quae voluptatem. Quibusdam.
          </p>
          <p className="text-stone-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quisquam nam corrupti quae expedita accusantium in, modi repellat soluta? Eius beatae fugiat unde omnis
            blanditiis, accusamus necessitatibus aspernatur tempora saepe maiores, dolorem aperiam nihil! Impedit suscipit odit, fugiat laboriosam facere alias voluptatum, esse
            laborum voluptatem eum animi sunt nostrum atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Odio commodi alias beatae assumenda aliquid praesentium numquam incidunt quibusdam? Praesentium eius, sint iure pariatur nulla id. At magni quidem facere voluptates.
            Similique dicta nam unde aspernatur fugit odit consequuntur quaerat! Fuga vel mollitia reiciendis at asperiores ut minus, aliquam ullam ipsa?
            <br />
            <br />
            Odio commodi alias beatae assumenda aliquid praesentium numquam incidunt quibusdam? Praesentium eius, sint iure pariatur nulla id. At magni quidem facere voluptates.
            Similique dicta nam unde aspernatur fugit odit consequuntur quaerat! Fuga vel mollitia reiciendis at asperiores ut minus, aliquam ullam ipsa?
          </p>
        </div>
      </section>

      {/* OUR SPONSORS SLIDER */}
      <section className="mt-28">
        <header className="mb-14">
          <h3 className="font-bold text-5xl max-sm:text-4xl uppercase">Our Sponsors</h3>
        </header>
        <main>
          <Marquee pauseOnHover={true}>
            {sponsorData.map((data) => (
              <div key={data.id} className="flex flex-col items-center justify-center mr-12">
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

      <section className="mt-28 flex max-sm:flex-col gap-10 items-center justify-center">
        <div className="w-1/2 max-sm:w-full">
          <h2 className="font-bold text-5xl max-sm:text-4xl uppercase">Join with Us</h2>
          <p className="mt-5 text-stone-600 max-w-[500px] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda quisquam in eveniet. Vitae, recusandae quibusdam omnis voluptas aspernatur beatae amet
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda quisquam in eveniet.
            <br />
            <br />
            adipisci cum molestias dignissimos. Suscipit nam esse labore sed obcaecati animi rerum, reiciendis, hic officia repellendus quae voluptatem
          </p>
          <Link to="/signup">
            <button className="bg-red-600 text-white font-semibold py-3 px-10 rounded-lg transition-all duration-500 hover:bg-red-700 mt-6">Join Us Now</button>
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
