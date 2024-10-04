import { Link, useNavigate } from 'react-router-dom';
import logo from './../../assets/logo.png';
import whitelogo from './../../assets/whitelogo.png';
import { FcGoogle } from 'react-icons/fc';
// import { signUpUser } from "../../Features/Authenticate/authAction";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import userThunk from '../../Features/thunks/userThunks';

const SignUp = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userImage = e.target.files[0];
    const image = new FormData();
    if (!image) {
      return;
    }
    image.append('file', userImage);
    image.append('upload_preset', 'a4roznw9');
    const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: image,
    });
    const data = await response.json();
    const url = data.secure_url;
    console.log(url);
    if (!url) {
      setLoading(false);
      return alert('image upload failed');
    } else {
      setImageUrl(url);
      setLoading(false);
    }
  };
  console.log(loading);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract form values
    const formData = e.target;
    const name = formData.name.value;
    const email = formData.email.value;
    const password = formData.password.value;
    const confirmPassword = formData.confirmPassword.value;
    const age = formData.age.value;

    const user = { name, email, password, age, imageUrl };

    // Password confirmation check
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    } else {
      setError(null);
    }

    try {
      // Make POST request to create a user
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/createuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      // Handle the response data
      const data = await response.json(); //token on data
      localStorage.setItem('token', data);
      // Check if there is an error in the response
      if (!response.ok) {
        throw new Error(data.message || 'Failed to create user');
      }

      // Successful creation
      console.log('User created:', data);

      // Optionally, reset form
      formData.reset();
      dispatch(userThunk());
      navigate('/');
    } catch (error) {
      // Handle errors
      console.error('Error creating user:', error.message);
      setError(error.message);
    }
  };

  return (
    <section className="container mx-auto min-h-screen flex items-center justify-center mt-10 ">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white shadow-lg  lg:max-w-4xl">
        {/* Left side - Background Image */}
        <div
          className="hidden bg-cover bg-center  lg:block lg:w-1/2"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/crystal-globe-with-stock-information_1150-17697.jpg?t=st=1727352816~exp=1727356416~hmac=1e56c6cfd1a2536841945565514dfe9c61718395fcdc65d80526c757002ced81&w=740')",
          }}>
          <div className="flex flex-col items-center justify-center h-full">
            <div>
              <img className="w-auto h-7 sm:h-8" src={whitelogo} alt="Logo" />
            </div>
            <div className="mt-3">
              <p className="text-4xl text-center text-gray-800">Welcome back!</p>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 border-r-4  border-red-600">
          {/* Logo */}
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={logo} alt="Logo" />
          </div>

          {/* Google Sign-In Button */}
          <a href="#" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50 ">
            <div className="px-4 py-2">
              <FcGoogle className="text-2xl" />
            </div>
            <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
          </a>

          {/* Separator */}
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 uppercase hover:underline">
              or login with email
            </a>
            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="Name">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="Age">
                Age
              </label>
              <input
                id="age"
                name="age"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="LoggingEmailAddress">
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="LoggingImage">
                Image
              </label>
              <input
                id="LoggingImage"
                onChange={handleChange}
                name="image"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="file"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="loggingPassword">
                  Password
                </label>
              </div>
              <input
                id="loggingPassword"
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="loggingPasswordConfirm">
                  Confirm Password
                </label>
              </div>
              <input
                id="loggingPasswordConfirm"
                name="confirmPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            <div>{error && <span className="text-red-600 text-xs py-1">Your password doesn&#39;t match</span>}</div>

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
                disabled={loading}
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign Up Now
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <Link to="/signin" className="text-xs text-gray-500 uppercase hover:underline">
              or sign in
            </Link>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
