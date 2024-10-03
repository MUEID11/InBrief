const Faq = () => {
  return (
    <div className="container mx-auto my-16">
      <section id="faq" className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-4xl font-bold sm:text-4xl text-center">Frequently Asked Questions</h2>
          <p className="mt-4 mb-8 dark:text-gray-600 text-center">Here are some frequently asked questions about our news aggregator platform</p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">What is a news aggregator, and how does it work?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                A news aggregator collects news from various sources across the web and presents it in a single place for your convenience. Our platform curates trending stories
                and allows you to customize your news feed according to your preferences.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">How do I customize my news feed?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                You can customize your news feed by selecting topics, sources, and regions of interest. Our platform will prioritize showing articles that match your preferences.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">Are the articles updated in real-time?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Yes, the articles are updated frequently throughout the day to ensure you receive the latest news. We aggregate content from trusted sources and deliver real-time
                updates.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">Can I search for specific news topics?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Yes, you can use our advanced search feature to find news articles on specific topics, events, or keywords.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">Is the platform free to use?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Our basic services are free to use, and we offer premium features for users who want more customization options and exclusive content.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
