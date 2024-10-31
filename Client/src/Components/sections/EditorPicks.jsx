import { useEffect, useState } from "react";
import editorimage from "../../assets/editorPick.jpg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const EditorPicks = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.thenewsapi.com/v1/news/top?api_token=cRmpyn5euxvcffLIe0LNikgEOy3UHDuqKGaYP4iW&locale=us&limit=3");
      const data = await res.json();
      console.log(data);
      setNews(data.data);
    };

    getData();
  }, []);

  console.log(news);

  return (
    <Parallax
      blur={{ min: -10, max: 10 }}
      bgImage={editorimage}
      bgImageAlt="The Editor's Pick"
      strength={-200}
      className="my-16 rounded-sm"
      style={{ backgroundSize: "cover", backgroundPosition: "center" }} // Ensuring the image covers and is centered
    >
      <div className="bg-black/40 rounded-sm">
        <div className="pt-24 space-y-7 text-white mb-8 overflow-auto px-6">
          <h1 className="text-lg sm:text-3xl font-bold  ">Editor&apos;s Picks</h1>
          <p className="text-sm">
            Discover the most insightful and trending articles selected by our editorial team. From breaking news to deep-dive features, these picks are curated to keep you
            informed, engaged, and inspired. Stay ahead with stories that matter, chosen just for you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 px-2">
          {news?.length > 0 &&
            news?.map((n) => (
              <div
                key={n.uuid}
                className="shadow-lg p-5 border bg-slate-500/30 backdrop-blur-sm hover:backdrop-blur-none border-b-2 flex flex-col transition-all duration-300 ease-in-out hover:border-gray-600 hover:bg-gray-200 rounded-sm text-white group hover:text-neutral-900">
                <Link to={n?.url} className="">
                  {/* Link wrapping Image */}

                  <img src={n.image_url} alt={n.title} className="h-56 object-cover w-full" loading="lazy" />

                  {/* Info Section */}
                  <div className="mt-4 flex flex-col">
                    {/* Source Section */}
                    <div className="flex gap-2 items-center">
                      <div className="size-2 bg-red-600 rounded-full"></div>
                      <span className="text-sm text-gray-100 group-hover:text-neutral-600">{n?.source}</span>
                    </div>

                    {/* Headline */}
                    <p target="_blank" rel="noopener noreferrer">
                      <h3 className="font-bold text-lg mt-2">{n?.title}</h3>
                    </p>
                    {/* Date, Category, Region */}
                    <div className="flex justify-between items-center mb-2 mt-1">
                      <div className="flex gap-3 items-center">
                        <p className="text-black-primary text-sm font-semibold">{n?.locale}</p>
                        <span className="text-xs text-neutral-300 group-hover:text-neutral-600">{new Date(n?.published_at).toLocaleDateString()}</span>
                      </div>
                      <p className="text-blue-500 font-semibold bg-blue-100 py-1 px-3 rounded-sm text-xs capitalize">{n?.categories[0]}</p>
                    </div>
                    {/* Description */}
                    <p className="text-sm mb-4 text-gray-300 group-hover:text-gray-700 font-semibold flex-grow">{n?.description}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Parallax>
  );
};

export default EditorPicks;
