import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Math", marks: 85 },
  { name: "Science", marks: 92 },
  { name: "English", marks: 78 },
  { name: "History", marks: 88 },
  { name: "Art", marks: 95 },
];

const PerformanceChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Performance</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[60, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="marks"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
