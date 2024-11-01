import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">InBrief Terms & Conditions</h1>
        <p className="text-gray-600">Last Updated: 29 October 2024</p>
      </header>

      <div className="flex flex-col-reverse md:flex-row">
        <main className="md:w-3/4">
          <section id="acceptance" className="mb-6">
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using InBrief, you agree to comply with these
              Terms & Conditions. If you do not agree, please do not use our
              platform.
            </p>
          </section>

          <section id="user-accounts" className="mb-6">
            <h2 className="text-2xl font-semibold">2. User Accounts</h2>
            <p>
              <strong>Registration:</strong> You must create an account to
              access certain features.
            </p>
            <p>
              <strong>Account Security:</strong> Keep your account details
              confidential and notify us of any unauthorized access.
            </p>
          </section>

          <section id="content" className="mb-6">
            <h2 className="text-2xl font-semibold">
              3. Content and Use of Service
            </h2>
            <p>
              <strong>Customizable News Feed:</strong> Users can personalize
              their news feed based on selected topics and regions.
            </p>
            <p>
              <strong>User-Generated Content:</strong> You may leave comments or
              submit articles. Ensure that your submissions adhere to community
              guidelines.
            </p>
          </section>

          <section id="prohibited" className="mb-6">
            <h2 className="text-2xl font-semibold">4. Prohibited Conduct</h2>
            <p>Users agree not to:</p>
            <ul className="list-disc ml-6">
              <li>Upload or share inappropriate content.</li>
              <li>Interfere with the operation of the platform.</li>
              <li>Use automated systems to scrape data without permission.</li>
            </ul>
          </section>

          <section id="intellectual" className="mb-6">
            <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
            <p>
              <strong>Ownership:</strong> All content and designs are the
              property of InBrief and protected by copyright laws.
            </p>
            <p>
              <strong>Third-Party Content:</strong> Aggregated content from
              other sources remains under the ownership of its respective
              publishers.
            </p>
          </section>

          <section id="disclaimer" className="mb-6">
            <h2 className="text-2xl font-semibold">
              6. Disclaimer of Warranties
            </h2>
            <p>
              InBrief is provided “as-is” without warranties of any kind. We do
              not guarantee the accuracy or completeness of the information
              provided.
            </p>
          </section>

          <section id="liability" className="mb-6">
            <h2 className="text-2xl font-semibold">
              7. Limitation of Liability
            </h2>
            <p>
              InBrief and its affiliates are not liable for any direct or
              indirect damages resulting from your use of the platform or
              reliance on its content.
            </p>
          </section>

          <section id="privacy" className="mb-6">
            <h2 className="text-2xl font-semibold">8. Privacy and Data Use</h2>
            <p>
              Your use of InBrief is also governed by our {""}
              <a
                href="/privacy-policy"
                className="text-blue-500 hover:underline"
              >
                Privacy Policy
              </a>
              , which outlines how we collect and use your data.
            </p>
          </section>

          <section id="modifications" className="mb-6">
            <h2 className="text-2xl font-semibold">
              9. Modifications to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms & Conditions at any
              time. Changes will be posted on this page, and continued use of
              InBrief signifies acceptance of the new terms.
            </p>
          </section>

          <section id="governing" className="mb-6">
            <h2 className="text-2xl font-semibold">10. Governing Law</h2>
            <p>
              These Terms & Conditions are governed by the laws of Dhaka,
              Bangladesh . Any disputes will be handled in the appropriate
              courts in that jurisdiction.
            </p>
          </section>

          <section id="contact" className="mb-6">
            <h2 className="text-2xl font-semibold">11. Contact Information</h2>
            <p>
              For questions regarding these Terms & Conditions, please contact
              us at.
            </p>{" "}
            <Link to="/contact"> Contact Us</Link>
          </section>
        </main>
        <aside className="md:w-1/4 mb-6 md:mb-0 md:mr-6">
          <h2 className="text-2xl font-semibold">Table of Contents</h2>
          <ul className="list-disc ml-6">
            <li>
              <a href="#acceptance" className="text-blue-500 hover:underline">
                1. Acceptance of Terms
              </a>
            </li>
            <li>
              <a
                href="#user-accounts"
                className="text-blue-500 hover:underline"
              >
                2. User Accounts
              </a>
            </li>
            <li>
              <a href="#content" className="text-blue-500 hover:underline">
                3. Content and Use of Service
              </a>
            </li>
            <li>
              <a href="#prohibited" className="text-blue-500 hover:underline">
                4. Prohibited Conduct
              </a>
            </li>
            <li>
              <a href="#intellectual" className="text-blue-500 hover:underline">
                5. Intellectual Property
              </a>
            </li>
            <li>
              <a href="#disclaimer" className="text-blue-500 hover:underline">
                6. Disclaimer of Warranties
              </a>
            </li>
            <li>
              <a href="#liability" className="text-blue-500 hover:underline">
                7. Limitation of Liability
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-blue-500 hover:underline">
                8. Privacy and Data Use
              </a>
            </li>
            <li>
              <a
                href="#modifications"
                className="text-blue-500 hover:underline"
              >
                9. Modifications to Terms
              </a>
            </li>
            <li>
              <a href="#governing" className="text-blue-500 hover:underline">
                10. Governing Law
              </a>
            </li>
            <li>
              <a href="#contact" className="text-blue-500 hover:underline">
                11. Contact Information
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default TermsAndConditions;
