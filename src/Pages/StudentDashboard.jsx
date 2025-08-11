import React from "react";

import Header from "../components/Header";
import StudentCard from "../Components/StudentCard";
import AttendanceChart from "../components/AttendanceChart";
import ScheduleCalendar from "../components/ScheduleCalendar";
import TodayClass from "../components/TodayClass";
import ActionButtons from "../Components/ActionButtons";
import PerformanceChart from "../components/PerformanceChart";
import HomeworkList from "../Components/HomeworkList";
import FacultyCards from "../components/FacultyCards";
import ExamResults from "../components/ExamResults";
import FeesReminder from "../Components/FeesReminder";
import NoticeBoard from "../components/NoticeBoard";
import SyllabusProgress from "../Components/SyllabusProgress";
import TodoList from "../Components/TodoList";
import LeaveStatus from "../Components/LeaveStatus.";
import Sidebar from "../Components/Sidebar";

const StudentDashboard = () => {
  return (
    <div>
        <main className="p-4 space-y-4 overflow-y-auto ">

          {/* Responsive layout: StudentCard + TodayClass stacked; others follow */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* StudentCard and TodayClass stacked together */}
            <div className="flex flex-col gap-2">
              <StudentCard />
              <TodayClass />
            </div>

            {/* Other items fill remaining columns */}
            <AttendanceChart />
            <ScheduleCalendar />
          </div>

          <ActionButtons />
          <PerformanceChart />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <HomeworkList />
            <FacultyCards />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <LeaveStatus />
            <ExamResults />
            <FeesReminder />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NoticeBoard />
            <SyllabusProgress />
            <TodoList />
          </div>
        </main>
      </div>
  );
};

export default StudentDashboard;
