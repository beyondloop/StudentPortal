import React, { useState } from "react";
import { Bell, MessageSquare, Settings, ChevronDown, Calendar } from "lucide-react";
import profileImg from "../Image/profileimg.jpg"; // Replace with your actual image path

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2024 / 2025");

  const years = [
    "2023 / 2024",
    "2022 / 2023",
    "2021 / 2022",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow p-4 flex items-center justify-between">
      {/* Left Side: Title or Search */}
      <div className="flex items-center gap-4 w-1/2">
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-full border border-blue-400 bg-blue-50 text-blue-800 placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 
              1.415-1.414l-3.85-3.85zm-5.242.656a5 5 0 1 1 
              0-10 5 5 0 0 1 0 10z" />
          </svg>
        </div>
      </div>

      {/* Right Side: Icons */}
      <div className="flex items-center gap-6 relative">
        {/* Academic Year Dropdown */}
        <div className="hidden md:block relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 text-sm text-blue-700 px-3 py-1.5 rounded-md border border-gray-400 shadow-md"
          >
            <Calendar size={16} className="text-blue-600" />
            <span className="font-medium">
              Academic Year : <span className="text-blue-800">{selectedYear}</span>
            </span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md z-50">
              {years.map((year) => (
                <div
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer"
                >
                  Academic Year : {year}
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="relative text-gray-600 hover:text-blue-600">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <button className="text-gray-600 hover:text-blue-600">
          <MessageSquare size={20} />
        </button>

        <button className="text-gray-600 hover:text-blue-600">
          <Settings size={20} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={profileImg}
            alt="Profile"
            className="w-8 h-8 rounded-full border"
          />
          <ChevronDown size={18} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
