import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserWithGoogle } from "../../Features/thunks/userThunks";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleSignIn = async () => {
    try {
      const user = await dispatch(createUserWithGoogle());
      const userData = { name: user?.payload?.displayName, email: user?.payload?.email, imageUrl: user?.payload?.photoURL, role: "user" };
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      // Handle the response data
      const data = await response.json(); //token on data
      localStorage.setItem("token", data);
      // Check if there is an error in the response
      if (!response.ok) {
        throw new Error(data.message || "Failed to create user");
      }

      // Successful creation
      console.log("User created->origin-google:", data);
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
      console.log(error);
    }
  };
  return (
    <>
      {/* Google Sign-In Button */}
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg :border-gray-700  hover:bg-gray-50 w-full">
        <div className="px-4 py-2">
          <FcGoogle className="text-2xl" />
        </div>
        <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
      </button>
    </>
  );
};

export default SocialLogin;
