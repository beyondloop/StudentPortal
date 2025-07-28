import React from "react";
import { Plane, Clock4, CheckCircle } from "lucide-react";

const leaveStats = [
  {
    label: "Total Leaves",
    value: 20,
    icon: <Plane size={24} />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    label: "Used",
    value: 12,
    icon: <Clock4 size={24} />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    label: "Remaining",
    value: 8,
    icon: <CheckCircle size={24} />,
    color: "bg-green-100 text-green-600",
  },
];

const LeaveStatus = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Leave Status</h3>
      <div className="grid grid-cols-1 gap-3">
        {leaveStats.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between p-3 rounded-md ${item.color}`}
          >
            <div className="flex items-center gap-3">
              <div>{item.icon}</div>
              <div>
                <p className="text-sm">{item.label}</p>
              </div>
            </div>
            <span className="text-lg font-bold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveStatus;
