import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/logo.png";
import whitelogo from "./../../assets/whitelogo.png";
// import { signUpUser } from "../../Features/Authenticate/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import userThunk, {
  createUserByEmailAndPass,
} from "../../Features/thunks/userThunks";
import toast from "react-hot-toast";
import SocialLogin from "../../Components/Component/SocialLogin";

const SignUp = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { error: stateError } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userImage = e.target.files[0];
    const image = new FormData();
    if (!image) {
      return;
    }
    image.append("file", userImage);
    image.append("upload_preset", "a4roznw9");
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUD_NAME
      }/image/upload`,
      {
        method: "POST",
        body: image,
      }
    );
    const data = await response.json();
    const url = data.secure_url;
    console.log(url);
    if (!url) {
      setLoading(false);
      return alert("image upload failed");
    } else {
      setImageUrl(url);
      setLoading(false);
    }
  };
  console.log(loading);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //checked terms and conditions
    // Check if terms checkbox is checked
    if (!isChecked) {
      return toast.error("You must agree to the terms of service", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }

    // Extract form values
    const formData = e.target;
    const name = formData.name.value;
    const email = formData.email.value;
    const password = formData.password.value;
    const confirmPassword = formData.confirmPassword.value;
    const age = formData.age.value;

    const user = { name, email, password, age, imageUrl, role: "user" };
    console.log(user);
    // Password confirmation check
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    } else {
      setError(null);
    }

    try {
      // Make POST request to create a user
      // const response = await fetch(`${import.meta.env.VITE_API_URL}/users/createuser`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(user),
      // });
      await dispatch(createUserByEmailAndPass(user));

      // Handle the response data
      // const data = await response.json(); //token on data
      // localStorage.setItem("token", data);
      // Check if there is an error in the response
      // if (!response.ok) {
      //   throw new Error(data.message || "Failed to create user");
      // }

      // Successful creation
      // console.log("User created:", data);
      if (stateError) {
        const msg = stateError.split(":")[1];
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
      // Optionally, reset form
      formData.reset();
      // dispatch(userThunk());
      navigate("/");
      toast("Welcome to InBrief 📰", {
        icon: "✔️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      // Handle errors
      console.error("Error creating user:", error.message);
      setError(error.message);
    }
  };

  return (
    <section className="container mx-auto min-h-screen flex items-center justify-center ">
      <div className="flex w-full  mx-auto overflow-hidden bg-white shadow-lg  lg:max-w-4xl">
        {/* Left side - Background Image */}
        <div
          className="hidden bg-cover bg-center  lg:block lg:w-1/2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1689421755395-c18b8cd24db3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div>
              <img className="w-auto h-7 sm:h-8" src={whitelogo} alt="Logo" />
            </div>
            <div className="mt-3">
              <p className="text-4xl text-center text-black font-semibold">
                Welcome!
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 border-r-4  border-red-600">
          {/* Logo */}
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={logo} alt="Logo" />
          </div>

          <SocialLogin />

          {/* Separator */}
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b lg:w-1/4"></span>
            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase hover:underline"
            >
              or login with email
            </a>
            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="Name"
              >
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
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="Age"
              >
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
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="LoggingEmailAddress"
              >
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
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="LoggingImage"
              >
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
                <label
                  className="block mb-2 text-sm font-medium text-gray-600"
                  htmlFor="loggingPassword"
                >
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
                <label
                  className="block mb-2 text-sm font-medium text-gray-600"
                  htmlFor="loggingPasswordConfirm"
                >
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
            <div>
              {error && (
                <span className="text-red-600 text-xs py-1">
                  Your password doesn&#39;t match
                </span>
              )}
            </div>

            <div className="mb-4 mt-2">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label htmlFor="terms">
                I agree to all the statements in
                <Link to={"/terms"} className="hover:underline text-blue-600">
                  Terms &amp; Conditions
                </Link>
              </label>
            </div>

            {/* Sign In Button */}
            <div className="mt-6">
              <button
                disabled={loading}
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign Up Now
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <Link
              to="/signin"
              className="text-xs text-gray-500 uppercase hover:underline"
            >
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
