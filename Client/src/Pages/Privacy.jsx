import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, UserIcon, ShieldCheckIcon, LockClosedIcon, CogIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

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
      
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

      <section className="mb-8">
        <div className="flex items-center mb-4">
          <UserIcon className="h-6 w-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold">1. Information Collection</h2>
        </div>
        <p className="ml-9 text-gray-700">
          At INBRIEF, we collect basic personal information to enhance your experience. This may include your name, email, and any contributions (e.g., comments or articles) you make on our platform.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-4">
          <CogIcon className="h-6 w-6 text-green-600 mr-3" />
          <h2 className="text-2xl font-semibold">2. Use of Information</h2>
        </div>
        <p className="ml-9 text-gray-700">
          Your information is used to improve and personalize the services on INBRIEF. Rest assured, we do not share your personal data with third parties without consent.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-4">
          <ShieldCheckIcon className="h-6 w-6 text-red-600 mr-3" />
          <h2 className="text-2xl font-semibold">3. Data Security</h2>
        </div>
        <p className="ml-9 text-gray-700">
          We prioritize your data's safety, employing modern encryption and security measures. Although we work hard to protect your data, please be aware that no system is entirely secure.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-4">
          <LockClosedIcon className="h-6 w-6 text-yellow-600 mr-3" />
          <h2 className="text-2xl font-semibold">4. Cookies and Tracking</h2>
        </div>
        <p className="ml-9 text-gray-700">
          INBRIEF uses cookies to track preferences and enhance the user experience. You can disable cookies in your browser, though some site functions may be impacted.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-4">
          <InformationCircleIcon className="h-6 w-6 text-purple-600 mr-3" />
          <h2 className="text-2xl font-semibold">5. Changes to the Privacy Policy</h2>
        </div>
        <p className="ml-9 text-gray-700">
          INBRIEF may update this Privacy Policy to reflect changes in law or our practices. Changes will be posted here, and we recommend you review this page periodically.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-4">
          <UserIcon className="h-6 w-6 text-teal-600 mr-3" />
          <h2 className="text-2xl font-semibold">6. Contact Us</h2>
        </div>
        <p className="ml-9 text-gray-700">
          For any questions regarding our Privacy Policy, feel free to reach out at <a href="mailto:support@inbrief.com" className="text-blue-500 underline">support@inbrief.com</a>.
        </p>
      </section>

      <p className="text-center text-gray-500 mt-10">Last Updated: [Date]</p>
    </div>
  );
};

export default Privacy;
