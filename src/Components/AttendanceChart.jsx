import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { CalendarDays, ChevronDown } from "lucide-react";

const attendanceData = [
  { name: "Present", value: 25, color: "#22C55E" }, // Green
  { name: "Late", value: 1, color: "#3B82F6" },     // Blue
  { name: "Half Day", value: 0, color: "#E5E7EB" }, // Gray
  { name: "Absent", value: 2, color: "#EF4444" },   // Red
];

const totalWorkingDays = 28;

const AttendanceChart = () => {
  const [selectedRange, setSelectedRange] = useState("This Week");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const ranges = ["This Week", "Last Week", "Last Month"];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const selectRange = (range) => {
    setSelectedRange(range);
    setDropdownOpen(false);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm w-full max-w-md space-y-4 relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Attendance</h3>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center text-sm gap-1 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md border text-gray-700"
          >
            <CalendarDays size={16} />
            {selectedRange}
            <ChevronDown size={16} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 z-10 mt-1 w-36 bg-white border rounded-md shadow-lg">
              {ranges.map((range) => (
                <button
                  key={range}
                  onClick={() => selectRange(range)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                    selectedRange === range ? "bg-gray-100 font-semibold" : ""
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Working Days */}
      <p className="text-sm text-gray-600 flex items-center gap-2">
        📅 No of total working days <span className="font-bold text-gray-800">{totalWorkingDays} Days</span>
      </p>

      {/* Summary Count Row */}
      <div className="grid grid-cols-3 text-center border rounded-lg overflow-hidden text-sm">
        <div className="p-2">
          <p className="font-semibold text-gray-800">Present</p>
          <p className="text-blue-500">25</p>
        </div>
        <div className="p-2 border-l">
          <p className="font-semibold text-gray-800">Absent</p>
          <p className="text-red-500">2</p>
        </div>
        <div className="p-2 border-l">
          <p className="font-semibold text-gray-800">Halfday</p>
          <p className="text-gray-500">0</p>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="w-full h-52">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={attendanceData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={1}
              cornerRadius={0}
            >
              {attendanceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-center flex-wrap gap-4 text-sm">
        {attendanceData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Last 7 Days */}
      <div className="bg-gray-50 rounded-lg p-3 mt-2">
        <div className="flex justify-between items-center mb-2 text-sm text-gray-600 font-medium">
          <span>Last 7 Days</span>
          <span>14 May 2024 - 21 May 2024</span>
        </div>
        <div className="flex gap-2">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => {
            const status = ["green", "green", "green", "green", "red", "gray", "gray"][idx];
            const bg = {
              green: "bg-green-500 text-white",
              red: "bg-red-500 text-white",
              gray: "bg-gray-200 text-gray-500",
            }[status];
            return (
              <span
                key={day + idx}
                className={`w-8 h-8 flex items-center justify-center text-sm font-semibold rounded ${bg}`}
              >
                {day}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AttendanceChart;
