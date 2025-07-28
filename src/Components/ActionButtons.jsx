import React from "react";
import {
  CalendarDays,
  FileText,
  CreditCard,
  ClipboardList,
} from "lucide-react";

const actions = [
  {
    title: "Calendar",
    icon: <CalendarDays size={28} />,
    bg: "bg-blue-100 text-blue-600",
  },
  {
    title: "Exam Result",
    icon: <FileText size={28} />,
    bg: "bg-green-100 text-green-600",
  },
  {
    title: "Pay Fees",
    icon: <CreditCard size={28} />,
    bg: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Attendance",
    icon: <ClipboardList size={28} />,
    bg: "bg-purple-100 text-purple-600",
  },
];

const ActionButtons = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition ${item.bg}`}
        >
          <div className="mb-2">{item.icon}</div>
          <div className="text-sm font-medium">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ActionButtons;
