import React from "react";

const DayColumn = ({ day }) => {
  return (
    <div>
      <div className="mb-2">
        <span
          className={`text-sm font-semibold px-2 py-1 rounded ${
            day.color
          } text-white`}
        >
          {day.day}
        </span>
        <span className="ml-2 text-sm text-gray-500">{day.date}</span>
      </div>
      <div className="space-y-4">
        {day.classes.map((cls, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-3 shadow-sm border border-gray-100"
          >
            <h3 className="text-sm font-semibold text-gray-800">
              {cls.subject}
            </h3>
            <p className="text-xs text-gray-600">{cls.time}</p>
            <p className="text-xs text-gray-500">{cls.teacher}</p>
            <p className="text-xs text-gray-400">{cls.location}</p>
            <span
              className={`inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full text-white ${cls.tagColor}`}
            >
              {cls.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayColumn;
