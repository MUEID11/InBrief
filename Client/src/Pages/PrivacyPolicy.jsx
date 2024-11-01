import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      <p>
        At <strong>InBrief</strong>, we prioritize your privacy. This Privacy Policy outlines the types of data we collect,
        how we use it, and the steps we take to protect it. By using our services, you agree to the terms outlined here.
      </p>
      
      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p>We collect personal data to enhance your experience on InBrief. This data includes:</p>
        <ul className="list-disc ml-6">
          <li><strong>Account Information:</strong> When you register, we collect your name, email, and profile preferences.</li>
          <li><strong>Usage Data:</strong> Information such as your browsing behavior, interaction with articles, and search history.</li>
          <li><strong>Location Data:</strong> We may collect data on your location to provide region-specific news and recommendations.</li>
        </ul>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-4">2. Use of Collected Information</h2>
        <p>We use your data to improve our website experience, which includes:</p>
        <ul className="list-disc ml-6">
          <li>Personalizing content and recommendations based on your preferences.</li>
          <li>Enhancing search and filtering options.</li>
          <li>Improving website performance and security.</li>
          <li>Providing customer support and responding to inquiries.</li>
        </ul>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies to track your browsing behavior on InBrief. Cookies help us analyze usage, personalize content, and remember your preferences.
          You can disable cookies in your browser settings, though this may affect your experience.
        </p>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
        <p>
          InBrief uses third-party tools for analytics and advertising. These providers may collect data in compliance with their own privacy policies.
          We recommend reviewing the privacy policies of these third-party services to understand how they manage your data.
        </p>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-4">5. User Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data at any time. You can manage your data preferences by visiting your account settings
          or by contacting us directly at <a href="mailto:support@inbrief.com" className="text-blue-500 hover:underline">support@inbrief.com</a>.
        </p>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
        <p>
          We take security seriously and implement measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of
          transmission over the internet is completely secure, so we cannot guarantee absolute security.
        </p>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or services. We encourage you to review this policy periodically.
          Continued use of InBrief after changes are made constitutes acceptance of the updated policy.
        </p>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>If you have questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@inbrief.com" className="text-blue-500 hover:underline">support@inbrief.com</a>.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
