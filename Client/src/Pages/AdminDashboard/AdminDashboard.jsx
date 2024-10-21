import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "tailwindcss/tailwind.css";
import { FaNewspaper, FaEye, FaList } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const AdminDashboard = () => {
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
                  // Inside the <td> for actions
  <td className="py-2 px-4 border">
    {article.status === "pending" ? (
      <>
        <button
          onClick={() => {
            setPendingArticleId(article._id);
            setActionType("approve");
            setModalVisible(true);
          }}
          className="bg-gradient-to-r from-green-600 to-green-800 text-white px-4 py-2 rounded mr-2 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Approve
        </button>
        <button
          onClick={() => {
            setPendingArticleId(article._id);
            setActionType("reject");
            setModalVisible(true);
          }}
          className="bg-gradient-to-r from-red-600 to-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Reject
        </button>
      </>
    ) : (
      <span className="text-gray-500">N/A</span>
    )}
  </td>
  
                    ) : (
                      <span className="text-gray-500">N/A</span> // Show N/A for actions if not pending
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

export default AdminDashboard;