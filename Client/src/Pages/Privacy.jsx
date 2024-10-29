import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, UserIcon, ShieldCheckIcon, LockClosedIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

const Privacy = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);  // Navigate back to the previous page
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <button
        onClick={handleBackClick}
        className="flex items-center text-blue-500 hover:text-blue-700 mb-6"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back
      </button>
      
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>

      <section className="mb-8">
        <div className="flex items-center mb-4">
          <UserIcon className="h-6 w-6 text-blue-600 mr-3" />
          <h2 className="text-xl font-semibold">Information Collection</h2>
        </div>
        <p className="ml-9 text-gray-700">
          We collect information to enhance your experience, including your name, email, and any interactions on INBRIEF, such as comments or shared articles.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-4">
          <ShieldCheckIcon className="h-6 w-6 text-green-600 mr-3" />
          <h2 className="text-xl font-semibold">Data Usage</h2>
        </div>
        <p className="ml-9 text-gray-700">
          Information is used solely to improve INBRIEF services and provide a personalized experience. We do not share personal data with third parties without consent.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-4">
          <LockClosedIcon className="h-6 w-6 text-red-600 mr-3" />
          <h2 className="text-xl font-semibold">Data Security</h2>
        </div>
        <p className="ml-9 text-gray-700">
          Security measures are in place to protect your information. However, no system is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-4">
          <InformationCircleIcon className="h-6 w-6 text-yellow-600 mr-3" />
          <h2 className="text-xl font-semibold">Policy Updates</h2>
        </div>
        <p className="ml-9 text-gray-700">
          Updates to our policy will be posted here, and we encourage you to review it periodically.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-4">
          <UserIcon className="h-6 w-6 text-purple-600 mr-3" />
          <h2 className="text-xl font-semibold">Contact Us</h2>
        </div>
        <p className="ml-9 text-gray-700">
          Questions? Reach us at <a href="mailto:support@inbrief.com" className="text-blue-500 underline">support@inbrief.com</a>.
        </p>
  

export default Privacy;
