import React, { useState } from "react";
import {FaEye, FaBan, FaUserCheck } from "react-icons/fa";
import options from "../assets/Icons/options.png"
import { useNavigate } from "react-router-dom";

export const OptionsDropdown = () => {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((prev) => !prev);

  const navigate = useNavigate("");
  const viewDetails = () => {
    navigate("/userpage");
  };

  return (
    <div className="relative w-full">

      <button onClick={toggleMenu} className="w-full flex justify-center">
        <img src={options} alt="options"/>
      </button>

  
      {showMenu && (
        <ul className="absolute right-0 top-8 bg-white border border-gray-300 rounded-lg shadow-lg w-48 z-50">
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
           onClick={viewDetails}
          >
            <FaEye className="mr-2 text-main" />
            View Details
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <FaBan className="mr-2 text-main" />
            Blacklist User
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <FaUserCheck className="mr-2 text-main" />
            Activate User
          </li>
        </ul>
      )}
    </div>
  );
};
