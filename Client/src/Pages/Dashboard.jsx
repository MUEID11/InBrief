import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "tailwindcss/tailwind.css";
import { FaNewspaper, FaEye, FaList } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [articlesCount, setArticlesCount] = useState(0);
  const [totalViews, setTotalViews] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [categoryDistribution, setCategoryDistribution] = useState([]);
  const [viewsData, setViewsData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [pendingArticleId, setPendingArticleId] = useState(null); // Store the article ID for actions
  const [actionType, setActionType] = useState(""); // Store the action type (approve/reject)

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
        toast.success("Article approved successfully!"); // Use toast for success message
        fetchArticlesData(); // Refresh articles data after approval
      } else {
        console.error("Failed to approve article");
      }
    } catch (error) {
      console.error("Error approving article:", error);
      toast.error("Failed to approve article."); // Use toast for error message
    } finally {
      setModalVisible(false); // Close modal after action
      setPendingArticleId(null); // Reset pendingArticleId
    }
  };

  const handleRejectArticle = async () => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/articles/updateStatus/${pendingArticleId}`,
        { status: "rejected" }
      );
      if (response.status === 200) {
        toast.success("Article rejected successfully!"); // Use toast for success message
        fetchArticlesData(); // Refresh articles data after rejection
      } else {
        console.error("Failed to reject article");
      }
    } catch (error) {
      console.error("Error rejecting article:", error);
      toast.error("Failed to reject article."); // Use toast for error message
    } finally {
      setModalVisible(false); // Close modal after action
      setPendingArticleId(null); // Reset pendingArticleId
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

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-4 shadow-md">
            <h3 className="text-lg font-semibold">Category Distribution</h3>
            <Pie data={pieData} />
          </div>

          <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-4 shadow-md">
            <h3 className="text-lg font-semibold">Views per Day</h3>
            <Line data={lineData} />
          </div>

          <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-4 shadow-md">
            <h3 className="text-lg font-semibold">Articles Count per Category</h3>
            <Bar data={barData} />
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold">Articles Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="p-2 border-b">Title</th>
                  <th className="p-2 border-b">Category</th>
                  <th className="p-2 border-b">Status</th>
                  <th className="p-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article._id}>
                    <td className="p-2 border-b">{article.title}</td>
                    <td className="p-2 border-b">{article.category}</td>
                    <td className="p-2 border-b">{article.status}</td>
                    <td className="p-2 border-b flex space-x-2">
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded text-sm"
                        onClick={() => {
                          setModalVisible(true);
                          setPendingArticleId(article._id);
                          setActionType("approve");
                        }}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                        onClick={() => {
                          setModalVisible(true);
                          setPendingArticleId(article._id);
                          setActionType("reject");
                        }}
                      >
                        Reject
                      </button>
                      <a
                        href={`/articles/${article._id}`}
                        className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                      >
                        View Details
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {modalVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold mb-4">
              Are you sure you want to {actionType} this article?
            </h4>
            <div className="flex space-x-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={
                  actionType === "approve"
                    ? handleApproveArticle
                    : handleRejectArticle
                }
              >
                Yes, {actionType}
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setModalVisible(false);
                  setPendingArticleId(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
