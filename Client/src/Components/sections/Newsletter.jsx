const Newsletter = () => {
  return (
    <section className="sm:m-0 m-2">
      <div className="border border-red-600 border-r-4 border-b-4 container mx-auto sm:p-10 px-4 sm:py-16 max-sm:py-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 ">
        <div className="w-full md:w-1/2 ">
          <p className="font-bold max-sm:text-sm text-gray-600 uppercase tracking-[0.3em]"> GET FIRST UPDATE</p>
          <h3 className="font-bold text-3xl max-sm:text-xl mt-2 font-inter ">
            Get the news infront line by <br />
            <span className="text-rose-600">subscribe</span>✍️ our latest updates
          </h3>
        </div>
        <div className="w-full text-center md:w-1/2 space-y-3 sm:space-y-0">
          <input
            type="text"
            className="text-lg bg-white text-black sm:w-72 pl-5 placeholder-neutral-500 py-3 focus:ring-rose-200 focus:ring focus:outline-none border-red-500 border border-r-4 border-b-4"
            placeholder="Enter Your Email"
          />
          <button className="text-lg bg-red-600 text-white sm:px-4 sm:py-3 px-2 py-2  rounded-lg ml-1 font-inter"> subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
