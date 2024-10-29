import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, UserIcon, ShieldCheckIcon, LockClosedIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

const Privacy = () => {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  const handleBackClick = () => {
    navigate(-1);  // Navigate back to the previous page
  };

  const handleAccept = () => {
    setAccepted(true); // Accept policy to view content
  };

  return (
    <div className="relative">
      {/* Accept Modal */}
      {!accepted && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center max-w-sm w-full">
            <h2 className="text-2xl font-semibold mb-4">Privacy Agreement</h2>
            <p className="text-gray-700 mb-6">
              By clicking "Accept All," you agree to our Privacy Policy and data handling practices on INBRIEF.
            </p>
            <button
              onClick={handleAccept}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      )}

      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="fixed top-4 left-4 flex items-center text-blue-500 hover:text-blue-700 z-10"
      >
        <ArrowLeftIcon className="h-6 w-6 mr-2" />
        Back
      </button>

      {/* Privacy Content */}
      <div className={`p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg ${!accepted && 'blur-md pointer-events-none'}`}>
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
          <div className="ml-12 mt-4 space-y-2">
            <div>
              <h3 className="text-lg font-medium">1. Legal Compliance</h3>
              <p className="text-gray-700">
                Changes may be made to comply with new legal requirements and ensure your data is handled responsibly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">2. Service Enhancements</h3>
              <p className="text-gray-700">
                Policy updates may reflect new features or changes to improve your experience on INBRIEF.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Section with Parallax Effect */}
        <section
          className="mb-8 relative bg-fixed bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: 'url("/path/to/your-parallax-image.jpg")',
            padding: '40px',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="bg-white bg-opacity-80 p-8 rounded-md">
            <div className="flex items-center mb-4">
              <UserIcon className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-xl font-semibold">Contact Us</h2>
            </div>
            <p className="ml-9 text-gray-700">
              Questions? Reach us at <a href="mailto:support@inbrief.com" className="text-blue-500 underline">support@inbrief.com</a>.
            </p>
          </div>
        </section>

        <p className="text-center text-gray-500 mt-10">Last Updated: [Date]</p>
      </div>
    </div>
  );
};

export default Privacy;
