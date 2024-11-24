import React from 'react';

const Filter = ({ onFilterChange }) => {
  const filterOptions = ["Today", "This Month", "Last Month"];

  return (
    <div className="flex items-center justify-between mb-3 mx-2 bg-blue-400 p-4 rounded-md">
      {/* Filter Buttons */}
      <div className="flex space-x-4">
        {filterOptions.map((filter, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-blue-200 focus:ring-2 focus:ring-blue-300"
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Dropdown */}
      <div>
        <select
          className="w-64 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="all">Select Hospital</option>
          <option value="hospitalA">Hospital A</option>
          <option value="hospitalB">Hospital B</option>
          <option value="hospitalC">Hospital C</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
