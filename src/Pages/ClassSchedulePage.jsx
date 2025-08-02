import React from "react";
import Header from "../MyClass/Header";
import DayColumn from "../MyClass/DayColumn";
import scheduleData from "../MyClass/scheduleData";
import ScheduleTitle from "../MyClass/Scheduletitle";

const ClassSchedulePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScheduleTitle />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {scheduleData.map((day, index) => (
            <DayColumn key={index} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassSchedulePage;
