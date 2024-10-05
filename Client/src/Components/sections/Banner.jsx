const Banner = () => {
  return (
    <section className="container w-full mx-auto md:mb-8 my-6">
      <div className="px-2 sm:px-0">
        <div
          className="w-full mx-auto p-2 sm:p-12 border bg-repeat bg-cover sm:mb-8 mb-4 border-red-600 border-b-4 border-l-4 flex flex-col transition-all duration-200 ease-in-out hover:border-slate-600 rounded-sm"
          // style={{
          //   backgroundImage: "url(https://i.ibb.co.com/hH3Gj9n/preview.jpg)",
          // }}
        >
          <div className="text-center p-4">
            <h1 className="font-bold max-sm:text-sm text-gray-600 uppercase tracking-[0.3em]">
              Welcome to InBrief
            </h1>
            <p className="text-3xl max-sm:text-xl mt-2 text-gray-800 max-w-[620px] mx-auto font-bold leading-10">
              Crafting stories ✍️ that spark{" "}
              <span className="text-red-600">inspiration</span> 💡,{" "}
              <span className="text-red-600">knowledge</span> 📘, and
              <span className="text-red-600"> entertainment</span> 🎥.
            </p>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-sm:mt-5 m-2 sm:m-0">
        {/* Image Section */}
        <div className="">
          <div
            className="h-52 sm:h-72 bg-cover rounded-sm"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/jgvvgdJ/newspaper-background-concept.jpg)",
            }}
          ></div>
        </div>

        {/* News Section */}
        <div className=" mt-4 max-sm:mt-0 mr-44 border-gray-200 rounded-lg w-full">
          <div className="px-4 py-3">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className="font-semibold text-red-600">Netflix</span>
              <span>12 minutes ago</span>
            </div>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-gray-900">
              News HEADLINES
            </h2>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-gray-900">
              Awami League is coming again
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero id lorem commodo, vel vehicula dui suscipit.
            </p>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <span className="font-semibold text-red-600">Movies</span>
              <span>· 4 min read</span>
            </div>
          </div>
        </div>
      </div>
      {/* ---banner */}
    </section>
  );
};

export default Banner;
