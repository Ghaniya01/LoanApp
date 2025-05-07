import React, { useState } from "react";
import filter from "../Assets/Icons/filter.png"

export const FilterModal = () => {
  const [showFilter, setShowFilter] = useState(false);

  
  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <div>
     
      <button
        onClick={toggleFilter} className="px-2"
      >
        <img src={filter}/>
      </button>

      
      {showFilter && (
        <div className="absolute top-10 left-15 bg-white p-6 border rounded-lg shadow-lg w-72 z-50">
          <label className="block text-sm font-medium mb-1">Organization</label>
          <select className="w-full border rounded-lg p-2 mb-3 h-[40px]">
            <option>Select</option>
          </select>

          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 mb-3 h-[40px]"
            placeholder="Username"
          />

          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 mb-3 h-[40px]"
            placeholder="Email"
          />

          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 mb-3 h-[40px]"
            placeholder="Date"
          />

          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 mb-3 h-[40px]"
            placeholder="Phone Number"
          />

          <label className="block text-sm font-medium mb-1">Status</label>
          <select className="w-full border rounded-lg p-2 mb-4 h-[40px]">
            <option>Select</option>
          </select>

       
          <div className="flex justify-between mt-4">
            <button
              onClick={toggleFilter}
              className="border-2 text-gray-700 px-4 py-2 rounded-lg w-[98px] h-[40px]"
            >
              Reset
            </button>
            <button className="bg-brandcolor text-white px-4 py-2 rounded-lg hover:bg-main w-[98px] h-[40px]">
              Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
