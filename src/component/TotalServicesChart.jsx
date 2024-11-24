import React from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalServicesChart = () => {
  const data = {
    labels: ["Completed Services", "Ongoing", "Pending"],
    datasets: [
      {
        data: [16, 0, 84],
        backgroundColor: ["#60A5FA", "#FBBF24", "#F87171"], // Tailwind colors
        hoverBackgroundColor: ["#3B82F6", "#F59E0B", "#EF4444"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Custom legend below the chart
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000, // 1-second animation
    },
  };

  return (
    <div className='flex flex-col'>
      <span className='px-2 py-4 rounded-lg font-medium text-center mb-2  bg-red-700 text-white'>Service Till Date : 1232435</span>
      <div className="p-3  ">
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-lg max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4 text-center">TOTAL SERVICES</h2>
          <div className="relative w-full h-64 md:h-72 lg:h-80">
            <Pie data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold">Total Services: 100</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-blue-400 rounded-full mr-2"></span>
              <span className="text-sm font-medium">Completed Services: 16</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></span>
              <span className="text-sm font-medium">Ongoing: 0</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-400 rounded-full mr-2"></span>
              <span className="text-sm font-medium">Pending: 84</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TotalServicesChart