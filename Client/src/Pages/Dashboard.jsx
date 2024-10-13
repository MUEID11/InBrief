
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie, Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'tailwindcss/tailwind.css';
import { FaNewspaper, FaEye, FaList } from 'react-icons/fa';
const Dashboard = () => {
  const [articlesCount, setArticlesCount] = useState(0);
  const [totalViews, setTotalViews] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [categoryDistribution, setCategoryDistribution] = useState([]);
  const [viewsData, setViewsData] = useState([]);

  const fetchArticlesData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/articles`);
      if (response.status === 200) {
        const articles = response.data.data;
        setArticlesCount(articles.length);

        let totalViewsCount = 0;
        const uniqueCategories = new Set();

        articles.forEach(article => {
          const category = article.category;
          if (category) {
            uniqueCategories.add(category);
          }
          totalViewsCount += article.views || 0;
        });

        setTotalViews(totalViewsCount);
        setCategoryCount(uniqueCategories.size);

        const categoryCountMap = {};
        articles.forEach(article => {
          const category = article.category;
          if (category) {
            categoryCountMap[category] = (categoryCountMap[category] || 0) + 1;
          }
        });

        const distribution = Object.keys(categoryCountMap).map(key => ({
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
        console.error('Failed to fetch articles data');
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    fetchArticlesData();
  }, []);

  const pieData = {
    labels: categoryDistribution.map(item => item.category),
    datasets: [
      {
        data: categoryDistribution.map(item => item.count),
        backgroundColor: [
          'rgba(76, 81, 191, 0.8)',
          'rgba(56, 178, 172, 0.8)',
          'rgba(237, 137, 54, 0.8)',
          'rgba(229, 62, 62, 0.8)',
          'rgba(49, 151, 149, 0.8)',
        ],
        hoverBackgroundColor: [
          'rgba(76, 81, 191, 1)',
          'rgba(56, 178, 172, 1)',
          'rgba(237, 137, 54, 1)',
          'rgba(229, 62, 62, 1)',
          'rgba(49, 151, 149, 1)',
        ],
      },
    ],
  };

  const lineData = {
    labels: viewsData.map(item => item.day),
    datasets: [
      {
        label: 'Views per Day',
        data: viewsData.map(item => item.views),
        fill: false,
        backgroundColor: 'rgba(237, 137, 54, 0.8)',
        borderColor: 'rgba(237, 137, 54, 1)',
      },
    ],
  };

  const barData = {
    labels: categoryDistribution.map(item => item.category),
    datasets: [
      {
        label: 'Articles Count',
        data: categoryDistribution.map(item => item.count),
        backgroundColor: 'rgba(56, 178, 172, 0.8)',
        borderColor: 'rgba(56, 178, 172, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 via-slate-200 to-slate-200">
      <header className="bg-gradient-to-r from-slate-300 to-slate-500 text-gray-100 py-4 px-6 flex justify-between items-center relative">
        <div className="text-2xl text-black font-bold">Admin Dashboard</div>
        <div className='b'>
          <button className="border-amber-800 border-2 bg-blue-200 text-orange-900 px-4 py-2 rounded mr-2 hover:bg-gray-300 transition duration-300">Profile</button>
          <button className="border-amber-800 border-2 bg-gray-700 text-white  px-4 py-2 rounded hover:bg-gray-300 transition duration-300">Logout</button>
        </div>
      </header>

      <main className="p-8">
        <h1 className="text-3xl text-red-900 text-right font-bold mb-6">Admin Overview</h1>

        <div className="flex justify-between mb-6">
          <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-6 shadow-md relative w-1/4">
            <FaNewspaper className="absolute top-4 left-4 text-blue-500 text-3xl" />
            <div className="ml-12">
              <h2 className="text-gray-900 text-xl font-semibold mb-2">Total Articles</h2>
              <p className="text-3xl font-bold">{articlesCount}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-6 shadow-md relative w-1/4">
            <FaEye className="absolute top-4 left-4 text-green-500 text-3xl" />
            <div className="ml-12">
              <h2 className="text-gray-900 text-xl font-semibold mb-2">Total Views</h2>
              <p className="text-3xl font-bold">{totalViews}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-6 shadow-md relative w-1/4">
            <FaList className="absolute top-4 left-4 text-red-500 text-3xl" />
            <div className="ml-12">
              <h2 className="text-gray-900 text-xl font-semibold mb-2">Total Categories</h2>
              <p className="text-3xl font-bold">{categoryCount}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="bg-gradient-to-r from-slate-500 to-slate-200 text-white text-xl font-semibold mb-4 p-2 rounded-lg">News Categories Distribution</h2>
            <Pie data={pieData} />
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="bg-gradient-to-r from-slate-300 to-slate-500 text-white text-xl font-semibold mb-4 p-2 rounded-lg">Views Over Time</h2>
            <Line data={lineData} />
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="bg-gradient-to-r from-slate-300 to-slate-500 text-white text-xl font-semibold mb-4 p-2 rounded-lg">Articles Count by Category</h2>
            <Bar data={barData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
