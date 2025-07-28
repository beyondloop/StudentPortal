import React, { useState } from "react";
import Calendar from "react-calendar";
import { CalendarDays, Clock4, Calendar as CalendarIcon, MapPin } from "lucide-react";
import "react-calendar/dist/Calendar.css";

const ScheduleCalendar = () => {
  const [date, setDate] = useState(new Date());

  const events = [
    {
      title: "1st Quarterly",
      subject: "Mathematics",
      time: "01:30 - 02:15 PM",
      date: "2024-05-06",
      room: "15",
      daysLeft: 19,
    },
    {
      title: "2nd Quarterly",
      subject: "Physics",
      time: "01:30 - 02:15 PM",
      date: "2024-05-07",
      room: "15",
      daysLeft: 20,
    },
  ];

  const getTileClassName = ({ date, view }) => {
    if (view === "month") {
      const dateStr = date.toISOString().split("T")[0];
      const isEvent = events.some((e) => e.date === dateStr);
      return isEvent ? "bg-blue-100 text-blue-800 font-semibold rounded-full" : "";
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <CalendarDays size={20} /> Schedules
        </h3>
        <button className="text-sm text-blue-500 hover:underline">+ Add New</button>
      </div>

      {/* Calendar */}
      <div className="w-full">
        <Calendar
          onChange={setDate}
          value={date}
          tileClassName={getTileClassName}
          className="!w-full custom-calendar border-0"
        />
      </div>

      {/* Exam List */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Exams</h4>
        <div className="space-y-3">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="w-full border rounded-xl p-4 bg-gray-50 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h5 className="font-semibold text-sm text-gray-800">{event.title}</h5>
                <span className="text-xs text-red-500 bg-red-100 px-2 py-1 rounded-full flex items-center gap-1">
                  <Clock4 size={14} />
                  {event.daysLeft} Days More
                </span>
              </div>
              <div className="text-sm text-gray-700">{event.subject}</div>
              <div className="text-xs text-gray-600 mt-2 flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <Clock4 size={14} />
                  {event.time}
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon size={14} />
                  {new Date(event.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1 text-blue-600">
                  <MapPin size={14} />
                  Room No : {event.room}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleCalendar;
