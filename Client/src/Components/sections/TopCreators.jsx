import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";

const TopCreators = () => {
  const teamInfo = [
    {
      id: 1,
      name: "Sumaiya Urmi",
      image: "https://res.cloudinary.com/duiymk5mu/image/upload/v1729949701/6f6eee42-bb74-4f06-ba94-9d72fb5d1d6a_lvm550.jpg",
      link: "https://www.linkedin.com/in/sumaiya-urmi021",
    },
    {
      id: 2,
      name: "Meherun Nesa Meghla",
      image: "https://res.cloudinary.com/duiymk5mu/image/upload/v1729951283/462534405_471498485266793_3279693328074206836_n_iunusw.jpg",
      link: "https://www.linkedin.com/in/meherun-nesa-meghla/",
    },
    {
      id: 3,
      name: "Mehedi Hasan",
      image: "https://res.cloudinary.com/ddaa3wb4w/image/upload/v1729840870/me_2_ki5lqw.jpg",
      link: "www.linkedin.com/in/mehedirangpur",
    },
    {
      id: 4,
      name: "MD. Ziad Arman Ujan",
      image: "https://res.cloudinary.com/duiymk5mu/image/upload/v1729767533/e70fc84c-3a1e-46c5-8d3d-bb14e836bf79_mmzr4t.jpg",
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
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="container mx-auto my-14 p-2 max-sm:px-2">
      <section className="">
        <header className="mt-16 mb-8">
          <h3 className="text-2xl md:text-3xl font-inter font-semibold">Our Team</h3>
          <p className="text-start font-normal text-neutral-600 mt-3">
            At InBrief, our success stems from the powerful collaboration of our five dedicated team members. Each individual brings unique strengths and talents, allowing us to
            tackle challenges creatively and efficiently. Our commitment to open communication and mutual support has fostered a positive environment where ideas flourish.
            Together, we strive to achieve our shared vision and make a meaningful impact in the world of news aggregation.
          </p>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 ">
          {teamInfo.map((data, index) => (
            <Link to={data.link} data-aos="fade-right" data-aos-duration="2000" data-aos-delay={`${index * 250}`} key={data.id} className="flex justify-center">
              <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover w-full h-56" src={data.image} alt="avatar" />
                <div className="py-5 text-center">
                  <Link to={data.link} className="text-lg font-medium text-black">
                    {data.name}
                  </Link>
                  <br />
                  <span className="text-sm text-gray-700 dark:text-gray-200">Admin</span>
                </div>
              </div>
            </Link>
          ))}
        </main>
      </section>
    </div>
  );
};

export default TopCreators;
