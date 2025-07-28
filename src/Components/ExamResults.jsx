import React from "react";
import { FileText } from "lucide-react";

const examResults = [
  {
    subject: "Mathematics",
    marks: "92 / 100",
    grade: "A+",
    status: "Pass",
    color: "text-green-600",
  },
  {
    subject: "Science",
    marks: "74 / 100",
    grade: "B",
    status: "Pass",
    color: "text-green-600",
  },
  {
    subject: "English",
    marks: "48 / 100",
    grade: "C",
    status: "Pass",
    color: "text-yellow-600",
  },
  {
    subject: "History",
    marks: "35 / 100",
    grade: "D",
    status: "Fail",
    color: "text-red-600",
  },
];

const ExamResults = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <FileText size={20} /> Recent Exam Results
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-600 border-b">
            <tr>
              <th className="py-2 pr-4">Subject</th>
              <th className="py-2 pr-4">Marks</th>
              <th className="py-2 pr-4">Grade</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {examResults.map((result, index) => (
              <tr key={index} className="border-b last:border-none">
                <td className="py-2 pr-4">{result.subject}</td>
                <td className="py-2 pr-4">{result.marks}</td>
                <td className="py-2 pr-4">{result.grade}</td>
                <td className={`py-2 font-semibold ${result.color}`}>{result.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamResults;
