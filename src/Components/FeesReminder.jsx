import React from "react";
import { CreditCard } from "lucide-react";

const feeReminders = [
  {
    title: "Tuition Fee",
    amount: "₹12,000",
    dueDate: "31 July 2025",
    status: "Pending",
    color: "bg-red-100 text-red-700",
  },
  {
    title: "Library Fee",
    amount: "₹1,500",
    dueDate: "10 August 2025",
    status: "Upcoming",
    color: "bg-yellow-100 text-yellow-700",
  },
];

const FeesReminder = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <CreditCard size={20} /> Fees Reminder
      </h3>
      <div className="space-y-3">
        {feeReminders.map((fee, index) => (
          <div
            key={index}
            className={`p-3 rounded-md flex justify-between items-center ${fee.color}`}
          >
            <div>
              <h4 className="font-semibold">{fee.title}</h4>
              <p className="text-sm">Due: {fee.dueDate}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold">{fee.amount}</p>
              <span className="text-xs">{fee.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeesReminder;
