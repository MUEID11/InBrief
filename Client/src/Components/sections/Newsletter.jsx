const Newsletter = () => {
  return (
    <section className="sm:m-0 m-2 mb-12">
      <div className="border border-gray-200 border-r-4 border-b-4 container mx-auto sm:p-10 px-4 sm:py-16 max-sm:py-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 ">
        <div className="w-full md:w-1/2 text-center">
          <p className="font-bold max-sm:text-sm text-gray-600 uppercase tracking-[0.3em]">
            {" "}
            GET FIRST UPDATE
          </p>
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mt-2 font-inter ">
            Get the news infront line by <br />
            <span className="text-red-600">subscribe</span>✍️ our latest updates
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <form className="flex w-full max-w-sm">
            <input
              type="email"
              className="flex-1 border border-gray-200 rounded-l-sm py-2 px-4 shadow-sm focus:ring-2 focus:ring-secondary-black focus:outline-none text-gray-700 placeholder-gray-400 placeholder-shown:font-light"
              placeholder="Enter Your Email"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-primary-black to-secondary-black text-white px-2 py-3 text-lg rounded-sm focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
