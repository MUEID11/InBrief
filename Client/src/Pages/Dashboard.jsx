import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "tailwindcss/tailwind.css";
import { FaNewspaper, FaEye, FaList, FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

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
        fetchArticlesData(); 
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
    <div className="min-h-screen bg-gradient-to-r from-slate-100 via-slate-200 to-slate-200 p-4">
      <ToastContainer />
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-6 shadow-md rounded-lg relative">
            <FaNewspaper className="absolute top-4 left-4 text-blue-500 text-3xl" />
            <div className="ml-12">
              <h2 className="text-gray-900 text-xl font-semibold mb-2">Total Articles</h2>
              <p className="text-3xl font-bold">{articlesCount}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-6 shadow-md rounded-lg relative">
            <FaEye className="absolute top-4 left-4 text-blue-500 text-3xl" />
            <div className="ml-12">
              <h2 className="text-gray-900 text-xl font-semibold mb-2">Total Views</h2>
              <p className="text-3xl font-bold">{totalViews}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-300 to-slate-50 p-6 shadow-md rounded-lg relative">
            <FaList className="absolute top-4 left-4 text-blue-500 text-3xl" />
            <div className="ml-12">
              <h2 className="text-gray-900 text-xl font-semibold mb-2">Unique Categories</h2>
              <p className="text-3xl font-bold">{categoryCount}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
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

        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          <h3 className="text-lg font-bold mb-4 text-center">Articles Status</h3>
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left hidden sm:table-cell">Category</th>
                <th className="py-2 px-4 text-left hidden md:table-cell">Posted By</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article._id} className="border-b">
                  <td className="py-2 px-4">{article.title}</td>
                  <td className="py-2 px-4 hidden sm:table-cell">{article.category}</td>
                  <td className="py-2 px-4 hidden md:table-cell">{article.postedBy}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full ${
                        article.status === "pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : article.status === "approved"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {article.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 flex items-center space-x-2">
                    {article.status === "pending" ? (
                      <>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                          onClick={() => {
                            // Show article details logic here
                          }}
                        >
                          <FaInfoCircle />
                        </button>
                        <button
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                          onClick={() => {
                            setModalVisible(true); 
                            setPendingArticleId(article._id); 
                            setActionType("approve"); 
                          }}
                        >
                          <FaCheck />
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                          onClick={() => {
                            setModalVisible(true); 
                            setPendingArticleId(article._id); 
                            setActionType("reject"); 
                          }}
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <span>N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {modalVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Confirm Action</h2>
              <p className="mb-4">
                Are you sure you want to {actionType} this article?
              </p>
              <div className="flex justify-end">
                <button
                  className="bg-gray-500 text-white font-bold py-1 px-4 rounded mr-2"
                  onClick={() => setModalVisible(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white font-bold py-1 px-4 rounded"
                  onClick={
                    actionType === "approve"
                      ? handleApproveArticle
                      : handleRejectArticle
                  }
                >
                  Confirm
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
