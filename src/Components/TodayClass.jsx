import React from "react";
import { BookOpen, Clock } from "lucide-react";

const todaysClasses = [
  {
    time: "09:00 AM - 09:45 AM",
    subject: "Mathematics",
    teacher: "Mrs. Angela",
    bg: "bg-blue-100 text-blue-700",
  },
  {
    time: "10:00 AM - 10:45 AM",
    subject: "Science",
    teacher: "Mr. David",
    bg: "bg-green-100 text-green-700",
  },
  {
    time: "11:00 AM - 11:45 AM",
    subject: "English",
    teacher: "Mrs. Stella",
    bg: "bg-yellow-100 text-yellow-700",
  },
  {
    time: "12:00 PM - 12:45 PM",
    subject: "History",
    teacher: "Mr. Kelvin",
    bg: "bg-purple-100 text-purple-700",
  },
];

const TodayClass = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 max-w-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Today’s Class
      </h3>
      <div className="space-y-3">
        {todaysClasses.map((cls, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-3 rounded-xl ${cls.bg}`}
          >
            <div className="flex items-center gap-3">
              <BookOpen size={20} />
              <div>
                <h4 className="font-semibold">{cls.subject}</h4>
                <p className="text-sm">{cls.teacher}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium">
              <Clock size={16} />
              {cls.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayClass;
