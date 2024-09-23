const Newsletter = () => {
  return (
    <section className="sm:m-0 m-2">
      <div className="bg-red-200 container mx-auto rounded-lg sm:p-10 px-4 sm:py-16 max-sm:py-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 ">
        <div className="w-full md:w-1/2 ">
          <p className="font-bold max-sm:text-sm text-gray-600 uppercase tracking-[0.3em]"> GET FIRST UPDATE</p>
          <h3 className="font-bold text-3xl max-sm:text-xl mt-2 font-inter ">
            Get the news infront line by <br />
            <span className="text-rose-600">subscribe</span>✍️ our latest updates
          </h3>
        </div>
        <div className="w-full text-center md:w-1/2 ">
          <input
            type="text"
            className="text-lg bg-white text-black sm:w-72 pl-5 placeholder-neutral-500 py-3 rounded-lg focus:ring-rose-300 focus:ring focus:outline-none"
            placeholder="Enter Your Email"
          />
          <button className="text-lg bg-red-600 text-white px-4 py-3 rounded-lg ml-1 font-inter"> subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
