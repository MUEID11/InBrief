const Newsletter = () => {
  return (
    <div className="bg-gray-200 container mx-auto rounded-lg p-10 mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="w-full text-center md:w-1/2 ">
        <p className="text-gray-600 font-semibold font-inter text-lg text-star">
          {" "}
          GET FIRST UPDATE
        </p>
        <h3 className="font-bold text-xl mt-2 font-inter ">
          Get the news infront line by <br />
          <span className="text-rose-600">subscribe</span>✍️ our latest updates
        </h3>
      </div>
      <div className="w-full text-center md:w-1/2 ">
        <input type="text" className="text-lg bg-white text-black p-2 rounded-lg " />
        <button className= "text-lg bg-red-600 text-white p-2 rounded-lg ml-1 font-inter">
          {" "}
          subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
