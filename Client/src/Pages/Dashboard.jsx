import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "tailwindcss/tailwind.css";
import { FaNewspaper, FaEye, FaList } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [articlesCount, setArticlesCount] = useState(0);
  const [totalViews, setTotalViews] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [categoryDistribution, setCategoryDistribution] = useState([]);
  const [viewsData, setViewsData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [pendingArticleId, setPendingArticleId] = useState(null); 
  const [actionType, setActionType] = useState(""); 

  const fetchArticlesData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/articles`
      );
      if (response.status === 200) {
        const articlesData = response.data.data;
        setArticles(articlesData);
        setArticlesCount(articlesData.length);

        let totalViewsCount = 0;
        const uniqueCategories = new Set();

        articlesData.forEach((article) => {
          const category = article.category;
          if (category) {
            uniqueCategories.add(category);
          }
          totalViewsCount += article.views || 0;
        });

        setTotalViews(totalViewsCount);
        setCategoryCount(uniqueCategories.size);

        const categoryCountMap = {};
        articlesData.forEach((article) => {
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

        const views = articlesData.map((article, index) => ({
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

  const handleApproveArticle = async () => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/articles/updateStatus/${pendingArticleId}`,
        { status: "approved" }
      );
      if (response.status === 200) {
        toast.success("Article approved successfully!"); 
        fetchArticlesData(); // Fetch articles data again after approval
      } else {
        console.error("Failed to approve article");
      }
    } catch (error) {
      console.error("Error approving article:", error);
      toast.error("Failed to approve article."); 
    } finally {
      setModalVisible(false); 
      setPendingArticleId(null); 
    }
  };

  const handleRejectArticle = async () => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/articles/updateStatus/${pendingArticleId}`,
        { status: "rejected" }
      );
      if (response.status === 200) {
        toast.success("Article rejected successfully!"); 
        fetchArticlesData(); 
      } else {
        console.error("Failed to reject article");
      }
    } catch (error) {
      console.error("Error rejecting article:", error);
      toast.error("Failed to reject article."); 
    } finally {
      setModalVisible(false); 
      setPendingArticleId(null); 
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
      <ToastContainer /> {/* Add ToastContainer here */}
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
            <FaEye className="absolute top-4 left-4 text-blue-500 text-3xl" />
            <div className="ml-12">
              <h2 className="text-gray-900 text-xl font-semibold mb-2">
                Total Views
              </h2>
              <p className="text-3xl font-bold">{totalViews}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-6 shadow-md relative w-1/4">
            <FaList className="absolute top-4 left-4 text-blue-500 text-3xl" />
            <div className="ml-12">
              <h2 className="text-gray-900 text-xl font-semibold mb-2">
                Unique Categories
              </h2>
              <p className="text-3xl font-bold">{categoryCount}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold mb-4">Category Distribution</h3>
            <Pie data={pieData} />
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold mb-4">Views Over Time</h3>
            <Line data={lineData} />
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold mb-4">Articles Count by Category</h3>
            <Bar data={barData} />
          </div>
        </div>

        <div className="mt-6 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold mb-4">Pending Articles</h3>
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article._id}>
                  <td className="p-2 border-b">{article.title}</td>
                  <td className="p-2 border-b">{article.category}</td>
                  <td className="p-2 border-b">
                    <span
                      className={`font-bold rounded-full ${
                        article.status === "approved"
                          ? "text-green-400"
                          : article.status === "pending"
                          ? "text-orange-400"
                          : "text-red-600"
                      }`}
                    >
                      {article.status}
                    </span>
                  </td>
                  <td className="p-2 border-b">
                    {article.status === "approved" ? (
                      <span className="text-gray-500">N/A</span>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          className="bg-green-500 text-white p-2 rounded-full"
                          onClick={() => {
                            setModalVisible(true);
                            setPendingArticleId(article._id);
                            setActionType("approve");
                          }}
                        >
                          <FaCheck />
                        </button>
                        <button
                          className="bg-red-500 text-white p-2 rounded-full"
                          onClick={() => {
                            setModalVisible(true);
                            setPendingArticleId(article._id);
                            setActionType("reject");
                          }}
                        >
                          <FaTimes />
                        </button>
                        <a
                          href={`/articles/${article._id}`}
                          className="bg-blue-800 text-white p-2 rounded-full"
                        >
                          <FaInfoCircle />
                        </a>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {modalVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-lg font-bold mb-4">
                {actionType === "approve" ? "Approve Article" : "Reject Article"}
              </h2>
              <p>Are you sure you want to {actionType} this article?</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-gray-500 text-white p-2 rounded mr-2"
                  onClick={() => setModalVisible(false)}
                >
                  Cancel
                </button>
                <button
                  className={`${
                    actionType === "approve" ? "bg-green-500" : "bg-red-500"
                  } text-white p-2 rounded`}
                  onClick={
                    actionType === "approve" ? handleApproveArticle : handleRejectArticle
                  }
                >
                  {actionType === "approve" ? "Approve" : "Reject"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
