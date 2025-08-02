
import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./Pages/StudentDashboard";
import ClassSchedulePage from "./Pages/ClassSchedulePage";

const App = () => {
  return (
      <div className="flex">
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/my-class" element={<ClassSchedulePage />} />

          </Routes>
        </div>
      </div>
  );
};

export default App;

