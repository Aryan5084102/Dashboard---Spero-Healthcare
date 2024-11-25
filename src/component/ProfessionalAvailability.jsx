import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProfessionalAvailability = () => {
  const data = {
    labels: ["Assign", "Unassign"],
    datasets: [
      {
        data: [58, 227],
        backgroundColor: ["#60A5FA", "#F87171"], // Tailwind colors
        hoverBackgroundColor: ["#3B82F6", "#EF4444"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };


  return (
    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-md">
    {/* Progress and Pending Section */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 w-full">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg px-6 py-4 w-full sm:w-auto">
        <p className="text-lg font-bold">0</p>
        <p className="text-green-400">In Progress</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg px-6 py-4 w-full sm:w-auto">
        <p className="text-lg font-bold">6789</p>
        <p className="text-red-400">Pending</p>
      </div>
    </div>

    {/* Doughnut Chart Section */}
    <div className="flex flex-col items-center w-full">
      <h2 className="text-lg font-bold mb-4">Professionals Availability</h2>
      <div className="relative w-48 h-48 sm:w-64 sm:h-64">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-700">Total Professionals</span>
        </div>
      </div>
    </div>

    {/* Legend Section */}
    <div className="flex flex-col sm:flex-row justify-center mt-4 gap-4 w-full">
      <div className="flex items-center bg-white px-4 py-2 shadow-lg rounded-md">
        <span className="w-4 h-4 bg-blue-400 rounded-full mr-2"></span>
        <span className="font-medium">Assign: 58</span>
      </div>
      <div className="flex items-center bg-white px-4 py-2 shadow-lg rounded-md">
        <span className="w-4 h-4 bg-red-400 rounded-full mr-2"></span>
        <span className="font-medium">Unassign: 227</span>
      </div>
    </div>
  </div>
  )
}

export default ProfessionalAvailability