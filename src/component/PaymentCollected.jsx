import React from 'react'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const PaymentCollected = () => {
  const data = {
    labels: Array.from({ length: 12 }, (_, i) => i + 1), // Example data points
    datasets: [
      {
        data: [2, 4, 6, 8, 10, 12, 14, 12, 10, 8, 6, 4], // Symmetrical dummy data
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 4,
        hoverBackgroundColor: "rgba(255, 255, 255, 0.8)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false, // Hides x-axis
      },
      y: {
        display: false, // Hides y-axis
      },
    },
    animation: {
      duration: 1000, // 1-second animation
    },
  };
    return (
        <div className="relative bg-blue-400 text-white rounded-lg shadow-lg p-4 w-full max-w-md mx-auto flex flex-col items-center">
            <h2 className="text-lg font-semibold">PAYMENT COLLECTED</h2>
            <p className="text-3xl font-bold my-2">2500</p>
            <div className="w-full h-20">
                <Bar data={data} options={options} />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white opacity-75">
                <div className="w-3 h-3 border border-white rounded-full"></div>
                <div className="w-3 h-3 border border-white rounded-full"></div>
            </div>
        </div>
    )
}

export default PaymentCollected