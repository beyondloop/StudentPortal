import React from "react";
import { BookOpen } from "lucide-react";

const ScheduleTitle = () => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <BookOpen size={20} />
        Quick Class Schedule
      </h2>
      <p className="text-sm text-gray-500">📅 Schedule</p>
    </div>
  );
};

export default ScheduleTitle;
