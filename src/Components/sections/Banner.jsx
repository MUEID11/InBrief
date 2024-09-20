const Banner = () => {
  return (
    <section className="w-full mx-auto md:my-8 my-4">
      <div
        className="w-full mx-auto p-2 sm:p-6 bg-red-100 rounded-2xl border bg-repeat bg-cover sm:mb-8 mb-4"
        // style={{
        //   backgroundImage: "url(https://i.ibb.co.com/hH3Gj9n/preview.jpg)",
        // }}
      >
        <div className="text-center p-4 bg-gray-50 rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold text-gray-800">
            Welcome to InsightFlow
          </h1>
          <p className="text-lg mt-2 text-gray-600">
            Crafting stories ✍️ that spark{" "}
            <span className="text-yellow-500 font-bold">inspiration</span> 💡,
            deliver <span className="text-blue-500 font-bold">knowledge</span>{" "}
            📘, and entertain with
            <span className="text-red-500 font-bold">creativity</span> 🎥.
          </p>
        </div>
      </div>

      {/* Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 m-2 sm:m-0">
        {/* Image Section */}
        <div className="rounded-xl">
          <div
            className="h-52 sm:h-72 bg-cover rounded-lg"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/jgvvgdJ/newspaper-background-concept.jpg)",
            }}
          ></div>
        </div>

        {/* News Section */}
        <div className="bg-white mt-4 mr-44 border-gray-200 rounded-lg w-full">
          <div className="px-4 py-3">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className="font-semibold text-red-700">Netflix</span>
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
              <span className="text-red-700">Movies</span>
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
