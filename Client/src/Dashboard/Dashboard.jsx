import React from "react";
// Import chart library (e.g., react-chartjs-2)
// import { Line } from "react-chartjs-2";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Minimal Dashboard</h1>
          <select className="p-2 bg-white border border-gray-300 rounded-lg">
            <option>Select period...</option>
            <option>Last 7 days</option>
            <option>Last month</option>
            <option>Last year</option>
          </select>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">New Accounts</h2>
            <p className="text-2xl font-bold text-green-500">+234%</p>
            <p className="text-sm text-gray-500">234 new accounts</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Total Expenses</h2>
            <p className="text-2xl font-bold text-red-500">-71%</p>
            <p className="text-sm text-gray-500">$71K spent</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Company Value</h2>
            <p className="text-2xl font-bold">$1.45M</p>
            <p className="text-sm text-gray-500">Current value</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">New Hires</h2>
            <p className="text-2xl font-bold text-green-500">+34</p>
            <p className="text-sm text-gray-500">34 hires</p>
          </div>
        </div>

        {/* Main Dashboard Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Traffic Sources (Chart Placeholder) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Traffic Sources</h2>
            {/* Replace with actual chart */}
            <div className="h-64 bg-gray-200 flex justify-center items-center">
              {/* Chart Component Placeholder */}
              {/* <Line data={chartData} options={chartOptions} /> */}
              <p>Chart Placeholder</p>
            </div>
          </div>
          {/* Income Progress */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Income</h2>
            <div className="relative h-64 flex justify-center items-center bg-gray-100 rounded-lg">
              {/* Circular Progress Placeholder */}
              <p className="text-2xl font-bold">75%</p>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Metric 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Income</h2>
            <p className="text-2xl font-bold">$5,456</p>
            <p className="text-sm text-green-500">+13%</p>
          </div>
          {/* Metric 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Expenses</h2>
            <p className="text-2xl font-bold text-red-500">$4,764</p>
            <p className="text-sm text-red-500">-8%</p>
          </div>
          {/* Metric 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Total Sales</h2>
            <p className="text-2xl font-bold">$31,564</p>
            <p className="text-sm text-green-500">+10%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
