import React from "react";
import { Pencil } from "lucide-react";
import studentImg from "../Image/profileimg.jpg"; // Replace with actual image path

const studentInfo = {
  name: "Angelo Riana",
  class: "1st Quarterly",
  status: "Pass",
  roll: "36545",
  image: studentImg,
};

const StudentCard = () => {
  return (
    <div className="relative bg-[#1C2241] text-white rounded-xl shadow-md px-5 py-4 overflow-hidden">
      {/* Background shapes (mocked) */}
      <div className="absolute top-0 right-0 w-20 h-20">
        <div className="absolute top-2 right-2 w-4 h-4 border-2 border-blue-400 rotate-45"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-6 left-6 w-3 h-3 border-l-4 border-t-4 border-cyan-300 rotate-45"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        {/* Top Section */}
        <div className="flex items-start gap-4">
          <img
            src={studentInfo.image}
            alt={studentInfo.name}
            className="w-16 h-16 rounded-md object-cover border-2 border-white"
          />
          <div className="flex flex-col">
            <span className="text-xs font-semibold bg-white text-blue-700 px-2 py-0.5 rounded-md w-fit">
              #ST1234546
            </span>
            <h2 className="text-lg font-bold mt-1">{studentInfo.name}</h2>
            <div className="text-sm text-gray-300 mt-0.5">
              Class : III, C <span className="mx-2 text-white">|</span> Roll No : {studentInfo.roll}
            </div>
          </div>
        </div>

        <hr className="border-gray-500" />

        {/* Bottom Section */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">{studentInfo.class}</span>
            <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              {studentInfo.status}
            </span>
          </div>
          <button className="flex items-center gap-1 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">
            <Pencil size={14} />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
