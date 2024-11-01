import { Link, useNavigate } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import userThunk, { signInByEmailAndPass } from "../../Features/thunks/userThunks";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import whitelogo from "./../../assets/whitelogo.png";
import SocialLogin from "../../Components/Component/SocialLogin";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await dispatch(signInByEmailAndPass({ email, password }));

      if (error) {
        const msg = error.split(":")[1];
        toast(msg, {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return;
      }

      navigate("/");
      toast("Welcome back!", {
        icon: "✔️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      toast(error?.message, {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      console.log(error.message);
    }
  };

  return (
    <section className="container mx-auto h-full flex items-center justify-center">
      <div className="flex w-full max-w-sm overflow-hidden bg-white shadow-lg sm:max-w-4xl">
        {/* Left side - Background Image */}
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1689421755395-c18b8cd24db3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}>
          {" "}
          <div className="flex flex-col items-center justify-center h-full">
            <div>
              <img className="w-auto h-7 sm:h-8" src={whitelogo} alt="Logo" />
            </div>
            <div className="mt-3">
              <p className="text-4xl text-center text-black font-semibold">Welcome back!</p>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 border-red-600 border-r-4">
          {/* Logo */}
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={Logo} alt="Logo" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600">Welcome back!</p>

          <SocialLogin />

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
            {/* <div className="mb-4 mt-2">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms">
                I agree to all the statements in
                <a href="#" className="text-blue-500 hover:underline">
                  Terms of service
                </a>
              </label>
            </div> */}

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
