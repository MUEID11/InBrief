import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { ArrowLeftIcon, UserIcon, ShieldCheckIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

const Privacy = () => {
  const [accepted, setAccepted] = useState(false);
  const [complianceChecked, setComplianceChecked] = useState(false);
  const [enhancementsChecked, setEnhancementsChecked] = useState(false);

  const handleAccept = () => {
    setAccepted(true); // Accept all
  };

  const handleComplianceCheck = () => {
    setComplianceChecked(!complianceChecked);
  };

  const handleEnhancementsCheck = () => {
    setEnhancementsChecked(!enhancementsChecked);
  };

  // Sample graph data and options
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'User Engagement',
        data: [65, 59, 80, 81, 56],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="relative">
      {/* Main Content */}
      <div
        className="p-8 bg-cover bg-fixed bg-gradient-to-br from-gray-100 to-blue-50"
        style={{ backgroundAttachment: 'fixed', backgroundPosition: 'center' }}
      >
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

          <section className="mb-8 bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <ShieldCheckIcon className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-xl font-semibold">Data Usage</h2>
            </div>
            <p className="ml-9 text-gray-700 mb-4">
              Information is used solely to improve INBRIEF services and provide a personalized experience. We do not share personal data with third parties without consent.
            </p>
            <div className="ml-9">
              <Line data={data} options={options} />
            </div>
          </section>

          <section className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-inner">
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
                <label className="flex items-center mt-2">
                  <input type="checkbox" checked={complianceChecked} onChange={handleComplianceCheck} className="mr-2" />
                  I acknowledge the legal compliance aspect.
                </label>
              </div>
              <div>
                <h3 className="text-lg font-medium">2. Service Enhancements</h3>
                <p className="text-gray-700">
                  Policy updates may reflect new features or changes to improve your experience on INBRIEF.
                </p>
                <label className="flex items-center mt-2">
                  <input type="checkbox" checked={enhancementsChecked} onChange={handleEnhancementsCheck} className="mr-2" />
                  I understand the service enhancement terms.
                </label>
              </div>
            </div>
          </section>

          <section className="mb-8 relative bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <UserIcon className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-xl font-semibold">Contact Us</h2>
            </div>
            <p className="ml-9 text-gray-700">
              Questions? Reach us at <a href="mailto:support@inbrief.com" className="text-blue-500 underline">support@inbrief.com</a>.
            </p>
          </section>

          <p className="text-center text-gray-500 mt-10">Last Updated: [Date]</p>
        </div>

        {/* Back Button */}
        <Link
          to="/" // Link to the homepage or a specific route
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
        >
          <ArrowLeftIcon className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default Privacy;
