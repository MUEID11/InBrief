
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
          <div className="hero min-h-screen">
  <div className="hero-content text-center">
 
    <div className="max-w-md">
	<img className='' src="https://i.pinimg.com/originals/2c/13/af/2c13afddef72b60d26ee95cc023c34b5.gif" alt="" />
      {/* <h1 className="text-6xl font-bold">Error 404</h1> */}
      <p className="text-xl font-semibold md:text-2xl py-2">
	  Sorry, we couldn't find this page.
      </p>
	  <p className="mt-2 mb-8 dark:text-gray-600 text-xm">But dont worry, you can find plenty of other things on our homepage.</p>
	  <Link to='/'>  <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-rose-600 transition duration-300 ease-out border-2 border-rose-500 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-rose-500 transition-all duration-300 transform group-hover:translate-x-full ease">Back to Home</span>
<span className="relative invisible">Back to Home</span>
</button></Link>
    </div>
  </div>
</div>

          {/* <section className="flex items-center h-screen p-6 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-2 mx-auto my-3">
		<div className=" text-center">
		<img className='' src="https://i.pinimg.com/originals/2c/13/af/2c13afddef72b60d26ee95cc023c34b5.gif" alt="" />
			
			<h1 className="my-3 text-2xl md:text-6xl font-extrabold ">
				Error 404
			</h1>
			<p className="text-xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-600 text-xl">But dont worry, you can find plenty of other things on our homepage.</p>
			
          <Link to='/'>  <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Back to Home</span>
<span className="relative invisible">Back to Home</span>
</button></Link>
		</div>
	</div>
</section> */}
        </div>
    );
};

export default ErrorPage;