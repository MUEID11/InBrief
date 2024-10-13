import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "tailwindcss/tailwind.css";
import { FaNewspaper, FaEye, FaList } from "react-icons/fa";
import { FaFirefoxBrowser, FaChrome, FaSafari } from "react-icons/fa";

const Dashboard = () => {
  const [articlesCount, setArticlesCount] = useState(0);
  const [totalViews, setTotalViews] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [categoryDistribution, setCategoryDistribution] = useState([]);
  const [viewsData, setViewsData] = useState([]);
  const [browserUsage, setBrowserUsage] = useState([
    {
      name: "Chrome",
      percentage: 65,
      color: "bg-gradient-to-r from-green-400 to-blue-500",
    },
    {
      name: "Firefox",
      percentage: 20,
      color: "bg-gradient-to-r from-orange-400 to-red-500",
    },
    {
      name: "Safari",
      percentage: 10,
      color: "bg-gradient-to-r from-blue-400 to-purple-500",
    },
    {
      name: "Others",
      percentage: 5,
      color: "bg-gradient-to-r from-gray-400 to-gray-600",
    },
  ]);
  const [browserState, setBrowserState] = useState({
    currentURL: window.location.href,
    userAgent: navigator.userAgent,
    onlineStatus: navigator.onLine ? "Online" : "Offline",
  });

  const fetchArticlesData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/articles`
      );
      if (response.status === 200) {
        const articles = response.data.data;
        setArticlesCount(articles.length);

        let totalViewsCount = 0;
        const uniqueCategories = new Set();

        articles.forEach((article) => {
          const category = article.category;
          if (category) {
            uniqueCategories.add(category);
          }
          totalViewsCount += article.views || 0;
        });

        setTotalViews(totalViewsCount);
        setCategoryCount(uniqueCategories.size);

        const categoryCountMap = {};
        articles.forEach((article) => {
          const category = article.category;
          if (category) {
            categoryCountMap[category] = (categoryCountMap[category] || 0) + 1;
          }
        });

        const distribution = Object.keys(categoryCountMap).map((key) => ({
          category: key,
          count: categoryCountMap[key],
        }));
        setCategoryDistribution(distribution);

        const views = articles.map((article, index) => ({
          day: `Day ${index + 1}`,
          views: article.views || 0,
        }));
        setViewsData(views);
      } else {
        console.error("Failed to fetch articles data");
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticlesData();
  }, []);

  const pieData = {
    labels: categoryDistribution.map((item) => item.category),
    datasets: [
      {
        data: categoryDistribution.map((item) => item.count),
        backgroundColor: [
          "rgba(76, 81, 191, 0.8)",
          "rgba(56, 178, 172, 0.8)",
          "rgba(237, 137, 54, 0.8)",
          "rgba(229, 62, 62, 0.8)",
          "rgba(49, 151, 149, 0.8)",
        ],
        hoverBackgroundColor: [
          "rgba(76, 81, 191, 1)",
          "rgba(56, 178, 172, 1)",
          "rgba(237, 137, 54, 1)",
          "rgba(229, 62, 62, 1)",
          "rgba(49, 151, 149, 1)",
        ],
      },
    ],
  };

  const lineData = {
    labels: viewsData.map((item) => item.day),
    datasets: [
      {
        label: "Views per Day",
        data: viewsData.map((item) => item.views),
        fill: false,
        backgroundColor: "rgba(237, 137, 54, 0.8)",
        borderColor: "rgba(237, 137, 54, 1)",
      },
    ],
  };

  const barData = {
    labels: categoryDistribution.map((item) => item.category),
    datasets: [
      {
        label: "Articles Count",
        data: categoryDistribution.map((item) => item.count),
        backgroundColor: "rgba(56, 178, 172, 0.8)",
        borderColor: "rgba(56, 178, 172, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 via-slate-200 to-slate-200">
      <header className="p-4">
        <div className="text-2xl text-black font-bold">Admin Dashboard</div>
      </header>

      <main className="p-4">
        <div className="flex justify-between mb-6">
          <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-6 shadow-md relative w-1/4">
            <FaNewspaper className="absolute top-4 left-4 text-blue-500 text-3xl" />
            <div className="ml-12">
              <h2 className="text-gray-900 text-xl font-semibold mb-2">
                Total Articles
              </h2>
              <p className="text-3xl font-bold">{articlesCount}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-6 shadow-md relative w-1/4">
            <FaEye className="absolute top-4 left-4 text-green-500 text-3xl" />
            <div className="ml-12">
              <h2 className="text-gray-900 text-xl font-semibold mb-2">
                Total Views
              </h2>
              <p className="text-3xl font-bold">{totalViews}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-6 shadow-md relative w-1/4">
            <FaList className="absolute top-4 left-4 text-red-500 text-3xl" />
            <div className="ml-12">
              <h2 className="text-gray-900 text-xl font-semibold mb-2">
                Total Categories
              </h2>
              <p className="text-3xl font-bold">{categoryCount}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="bg-gradient-to-r from-slate-500 to-slate-200 text-white text-xl font-semibold mb-4 p-2 rounded-lg">
              News Categories Distribution
            </h2>
            <Pie data={pieData} />
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="bg-gradient-to-r from-slate-300 to-slate-500 text-white text-xl font-semibold mb-4 p-2 rounded-lg">
              Views Over Time
            </h2>
            <Line data={lineData} />
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="bg-gradient-to-r from-slate-300 to-slate-500 text-white text-xl font-semibold mb-4 p-2 rounded-lg">
              Articles Count by Category
            </h2>
            <Bar data={barData} />
          </div>
        </div>

        {/* Browser Usage Section */}
        <div className="mt-6 bg-gradient-to-r from-slate-300 to-slate-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Browser Usage Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {browserUsage.map((browser, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-md ${browser.color}`}
              >
                <div className="flex items-center">
                  {browser.name === "Chrome" && (
                    <FaChrome className="text-3xl mr-2" />
                  )}
                  {browser.name === "Firefox" && (
                    <FaFirefoxBrowser className="text-3xl mr-2" />
                  )}
                  {browser.name === "Safari" && (
                    <FaSafari className="text-3xl mr-2" />
                  )}
                  {browser.name === "Others" && (
                    <FaList className="text-3xl mr-2" />
                  )}
                  <div>
                    <p className="text-lg font-semibold">{browser.name}</p>
                    <p className="text-md">{browser.percentage}% usage</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-6 bg-gradient-to-r from-slate-100 to-slate-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Browser State Information</h2>
          <p className="mb-2">Current URL: <strong>{browserState.currentURL}</strong></p>
          <p className="mb-2">User Agent: <strong>{browserState.userAgent}</strong></p>
          <p className="mb-2">Online Status: <strong>{browserState.onlineStatus}</strong></p>
        </div> */}
      </main>
    </div>
  );
};

export default Dashboard;
