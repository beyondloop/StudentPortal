import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import StudentDashboard from "./Pages/StudentDashboard";
import ClassSchedulePage from "./Pages/ClassSchedulePage";
import Header from "./components/Header";

export default function App() {
  return (
  
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-4 space-y-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<StudentDashboard />} />
              <Route path="/my-class" element={<ClassSchedulePage />} />
            </Routes>
          </main>
        </div>
      </div>
  );
}
