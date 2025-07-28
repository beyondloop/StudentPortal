import React from "react";
import { BookOpen } from "lucide-react";

const syllabusData = [
  {
    subject: "Mathematics",
    progress: 85,
    color: "bg-blue-500",
  },
  {
    subject: "Science",
    progress: 65,
    color: "bg-green-500",
  },
  {
    subject: "English",
    progress: 90,
    color: "bg-purple-500",
  },
  {
    subject: "Social Studies",
    progress: 50,
    color: "bg-yellow-500",
  },
];

const SyllabusProgress = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <BookOpen size={20} /> Syllabus Progress
      </h3>
      <div className="space-y-4">
        {syllabusData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{item.subject}</span>
              <span className="text-sm text-gray-500">{item.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${item.color}`}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusProgress;
