import React from "react";
import { Bell } from "lucide-react";

const notices = [
  {
    title: "PTM Meeting Scheduled",
    date: "22 July 2025",
    description: "Parent-Teacher Meeting will be held at 10 AM in the school auditorium.",
  },
  {
    title: "Mid-Term Exam Notice",
    date: "18 July 2025",
    description: "Mid-term exams will start from 1st August. Check timetable in Exam section.",
  },
  {
    title: "Holiday on Independence Day",
    date: "15 July 2025",
    description: "School will remain closed on 15th August for Independence Day.",
  },
  {
    title: "Library Book Return Deadline",
    date: "12 July 2025",
    description: "Students are advised to return all borrowed books before 25th July.",
  },
];

const NoticeBoard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm w-full max-h-80 overflow-y-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Bell size={20} /> Notice Board
      </h3>
      <ul className="space-y-3">
        {notices.map((notice, index) => (
          <li key={index} className="border-b pb-2">
            <h4 className="font-semibold text-blue-700">{notice.title}</h4>
            <p className="text-sm text-gray-600">{notice.description}</p>
            <span className="text-xs text-gray-400">{notice.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeBoard;
