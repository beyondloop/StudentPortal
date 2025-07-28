import React from "react";
import { ClipboardList, FileText } from "lucide-react";

const homeworkItems = [
  {
    subject: "Mathematics",
    title: "Algebra Practice Worksheet",
    dueDate: "25 July 2025",
    status: "Pending",
    color: "bg-blue-100 text-blue-700",
  },
  {
    subject: "English",
    title: "Essay on Climate Change",
    dueDate: "26 July 2025",
    status: "Completed",
    color: "bg-green-100 text-green-700",
  },
  {
    subject: "Science",
    title: "Lab Report Submission",
    dueDate: "28 July 2025",
    status: "Pending",
    color: "bg-yellow-100 text-yellow-700",
  },
];

const HomeworkList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <ClipboardList size={20} />
        Homework List
      </h3>
      <div className="space-y-3">
        {homeworkItems.map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg flex justify-between items-start ${item.color}`}
          >
            <div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm">Subject: {item.subject}</p>
              <p className="text-xs text-gray-600">Due: {item.dueDate}</p>
            </div>
            <span className="text-xs px-2 py-1 bg-white rounded-full shadow text-gray-700">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeworkList;
