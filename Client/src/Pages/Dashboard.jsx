import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "tailwindcss/tailwind.css";
import { FaNewspaper, FaEye, FaList } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

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

  const navigate = useNavigate(); // Initialize useNavigate

  const fetchArticlesData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/articles`);
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

  const handleViewDetails = (articleId) => {
    // Navigate to the details page using the specified API endpoint
    navigate(`/articles/details/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 via-slate-200 to-slate-200">
      <ToastContainer />
      <header className="p-4">
        <div className="text-2xl text-black font-bold">Admin Dashboard</div>
      </header>

      <main className="p-4">
        <h3 className="text-xl font-semibold mt-8 mb-4">Pending Articles</h3>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-red-50 ">
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article._id}>
                <td className="py-2 px-4 border">{article.title}</td>
                <td className="py-2 px-4 border">{article.status}</td>
                <td className="py-2 px-4 border">
                  {article.status === "pending" ? (
                    <>
                      <button
                        onClick={() => {
                          setPendingArticleId(article._id);
                          setActionType("approve");
                          setModalVisible(true);
                        }}
                        className="bg-gradient-to-r from-green-600 to-green-800 text-white px-4 py-2 rounded mr-2"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => {
                          setPendingArticleId(article._id);
                          setActionType("reject");
                          setModalVisible(true);
                        }}
                        className="bg-gradient-to-r from-red-600 to-red-900 text-white px-4 py-2 rounded mr-2"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => handleViewDetails(article._id)}
                        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded"
                      >
                        View Details
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-500">N/A</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">
              {actionType === "approve"
                ? "Confirm Approval"
                : "Confirm Rejection"}
            </h2>
            <p>
              Are you sure you want to{" "}
              {actionType === "approve" ? "approve" : "reject"} this article?
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setModalVisible(false)}
                className="bg-gray-300 px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={
                  actionType === "approve"
                    ? handleApproveArticle
                    : handleRejectArticle
                }
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {actionType === "approve" ? "Approve" : "Reject"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
