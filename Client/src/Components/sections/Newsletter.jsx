import React, { useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/newsletters`,
        { email }
      );

      if (response.data.success) {
        setModalMessage("Thank you for subscribing!");
        const templateParams = {
          to_name: email, 
          from_name: "The InBrief Team",
          message: "Thank you for subscribing to our newsletter! We're excited to keep you updated with the latest news."
        };

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_USER_ID
        );

        setEmail("");
      } else if (response.data.message === "Email is already subscribed") {
        setModalMessage("This Email is already subscribed!");
      } else {
        setModalMessage("Failed to subscribe!");
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      setModalMessage("There was an error processing your subscription.");
    }

    setModalOpen(true); // Show the modal after setting the message
  };

  return (
    <section className="sm:m-0 m-2 mb-12">
      <div className="border border-gray-200 border-r-4 border-b-4 container mx-auto sm:p-10 px-4 sm:py-16 max-sm:py-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 ">
        <div className="w-full md:w-1/2 text-center">
          <p className="font-bold max-sm:text-sm text-gray-600 uppercase tracking-[0.3em]">
            GET FIRST UPDATE
          </p>
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mt-2 font-inter ">
            Get the news in front line by <br />
            <span className="text-red-600">subscribing</span>✍️ to our latest updates
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className="flex w-full max-w-sm">
            <input
              type="email"
              className="flex-1 border border-gray-200 rounded-l-sm py-2 px-4 shadow-sm focus:ring-2 focus:ring-secondary-black focus:outline-none text-gray-700 placeholder-gray-400 placeholder-shown:font-light"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-primary-black to-secondary-black text-white px-2 py-3 text-lg rounded-sm focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Modal code directly inside return */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded shadow-lg max-w-xs w-full text-center">
            <p>{modalMessage}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Newsletter;
