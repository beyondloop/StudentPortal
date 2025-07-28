// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Sidebar from "./components/Sidebar";
// import DashboardHeader from "./components/DashboardHeader";
// import StatCard from "./components/StatCard";
// import AttendanceChart from "./components/AttendanceChart";
// import PieChart from "./components/PieChart";
// import Agenda from "./components/Agenda";
// import MessageList from "./components/MessageList";
// import ActivityBoard from "./components/ActivityBoard";
// import NoticeBoard from "./components/NoticeBoard";
// import LiveCalendar from "./Components/LiveCalendar";
// import StudentProfile from "./SidebarComponents/StudentProfile";

// const App = () => {
//   return (
//     <div className="flex min-h-screen bg-purple-100">
//       <Sidebar />
//       <div className="flex-1 p-4 overflow-auto">
//         <DashboardHeader />
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
//           <StatCard
//             title="Students"
//             value="124,684"
//             percent="+18%"
//             color="blue"
//           />
//           <StatCard
//             title="Teachers"
//             value="12,379"
//             percent="-2%"
//             color="pink"
//           />
//           <StatCard
//             title="Staffs"
//             value="29,300"
//             percent="+2%"
//             color="yellow"
//           />
//           <StatCard title="Awards" value="95,800" percent="+9%" color="green" />
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
//           <PieChart />
//           <AttendanceChart />
//           <LiveCalendar />
//         </div>
//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
//           <Agenda />
//           <MessageList />
//           <ActivityBoard />
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
//           <NoticeBoard />
//         </div>
//       </div>
//       <Routes>
//         <Route path="/profile" element={<StudentProfile />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from "react";
import StudentDashboard from "./Pages/StudentDashboard";

function App() {
  return <StudentDashboard />;
}

export default App;
