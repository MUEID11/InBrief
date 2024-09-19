import Navbar from "./Navbar";


const Banner = () => {
    return (
        <section className="w-full mx-auto p-">
    {/* Navbnar*/}
    <Navbar></Navbar>


    {/* Bulletin */}
    <div className="w-full mt-2 mx-auto p-4 bg-gray-200 rounded-2xl border bg-repeat bg-cover" style={{backgroundImage: 'url(https://i.ibb.co.com/hH3Gj9n/preview.jpg)'}}>
      <div className="text-sm font-extralight text-center mb-4">📋Welcome to the Bulletin</div>
      <div className="space-y-4">
        <div className="flex items-center justify-center font-extrabold text-red-700">
          <span className=" text-">Special Announcement:</span>
          <span className="text-2xl ml-2">💡</span>
        </div>
        <div className="flex items-center justify-center text-blue-500">
          <span className="text-2xl">📚</span>
          <span className=" text-md font-bold">knowledge books.</span> <div className="text-rose-600">
          <span className="text-2xl">🎬</span>
          <span className="ml- text-md">Entertainment</span>
        </div>
        </div>
       
      </div>
    </div>

    {/* Banner */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {/* Image Section */}
      <div className="rounded-xl">
        <div className="h-52 sm:h-72 bg-cover ml-2 md:ml-8 mr-2 md:mr-4 mt-4 rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co.com/jgvvgdJ/newspaper-background-concept.jpg)' }}>
        </div>
      </div>

      {/* News Section */}
      <div className="bg-white mt-4 mr-44 border-gray-200 rounded-lg ">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span className="font-semibold text-red-700">Netflix</span>
            <span>12 minutes ago</span>
          </div>
          <h2 className="mt-2 text-xl sm:text-2xl font-bold text-gray-900">News HEADLINES</h2>
          <h2 className="mt-2 text-xl sm:text-2xl font-bold text-gray-900">Awami League is coming again</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero id lorem commodo, vel vehicula dui suscipit.</p>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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