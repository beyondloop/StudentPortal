import React from "react";
import {
  Home,
  User,
  BookOpen,
  Calendar,
  Bell,
  MessageSquare,
  FileText,
  ClipboardList,
  File,
  DollarSign,
  Users,
  Library,
  Settings,
  Bus,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: <Home size={18} />, path: "#" },
  { label: "Profile", icon: <User size={18} /> },
  {
    label: "Academic",
    icon: <BookOpen size={18} />,
    children: ["My Class", "Grade & Transcript", "Assignments", "Examination", "Attendance"],
  },
  {
    label: "Documents",
    icon: <FileText size={18} />,
    children: ["Official Transcripts", "Certificates", "Holiday Calendar"],
  },
  {
    label: "Finance",
    icon: <DollarSign size={18} />,
    children: ["Tuition and Fees", "Payment History"],
  },
  {
    label: "Student Life",
    icon: <Users size={18} />,
    children: ["Organization", "Campus Events"],
  },
  {
  label: "Transport",
  icon: <Bus size={18} />,
  children: ["Routes", "Assign Vehicle"],
},
  { label: "Notifications", icon: <Bell size={18} /> },
  { label: "Library", icon: <Library size={18} /> },
  { label: "Messages", icon: <MessageSquare size={18} /> },
  { label: "Settings", icon: <Settings size={18} /> },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md min-h-screen px-4 py-6 sticky top-0 z-30">
      <div className="text-2xl font-bold text-blue-600 mb-6">PreSkool</div>
      <nav className="space-y-3">
        {navItems.map((item, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 text-gray-700 hover:bg-blue-100 px-3 py-2 rounded cursor-pointer transition">
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            {item.children && (
              <div className="pl-6 space-y-1 mt-1">
                {item.children.map((child, i) => (
                  <div
                    key={i}
                    className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                  >
                    {child}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
