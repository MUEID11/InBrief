import { Link, useNavigate } from 'react-router-dom';
import Logo from './../../assets/logo.png';
import { FcGoogle } from 'react-icons/fc';
import userThunk from '../../Features/thunks/userThunks';
import { useDispatch } from 'react-redux';
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/signin`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
      const data = await response.json();
      const token = localStorage.setItem('token', data);
      if (data) {
        dispatch(userThunk());
        navigate('/');
      }
      console.log('data', data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="contianer mx-auto h-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white shadow-lg lg:max-w-4xl">
        {/* Left side - Background Image */}
        <div
          className="hidden bg-cover bg-center  lg:block lg:w-1/2"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/crystal-globe-with-stock-information_1150-17697.jpg?t=st=1727352816~exp=1727356416~hmac=1e56c6cfd1a2536841945565514dfe9c61718395fcdc65d80526c757002ced81&w=740')",
          }}></div>

        {/* Right side - Login Form */}
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 border-red-600 border-r-4">
          {/* Logo */}
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={Logo} alt="Logo" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600">Welcome back!</p>

          {/* Google Sign-In Button */}
          <a href="#" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg :border-gray-700  hover:bg-gray-50">
            <div className="px-4 py-2">
              <FcGoogle className="text-2xl" />
            </div>
            <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
          </a>

          {/* Separator */}
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 uppercase  hover:underline">
              or login with email
            </a>
            <span className="w-1/5 border-b  lg:w-1/4"></span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSignIn}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 " htmlFor="LoggingEmailAddress">
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 :focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 " htmlFor="loggingPassword">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500 hover:underline">
                  Forget Password?
                </a>
              </div>
              <input
                id="loggingPassword"
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 :focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            <div className="mb-4 mt-2">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms">
                I agree to all the statements in
                <a href="#" className="text-blue-500 hover:underline">
                  Terms of service
                </a>
              </label>
            </div>

            {/* Sign In Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-800 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In Now
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>
            <Link to="/signup" className="text-xs text-gray-500 uppercase hover:underline">
              or sign up
            </Link>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
