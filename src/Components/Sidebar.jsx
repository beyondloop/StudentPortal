import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  User,
  BookOpen,
  Bell,
  MessageSquare,
  FileText,
  DollarSign,
  Users,
  Library,
  Settings,
  Bus,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navItems = [
   { label: "Dashboard", icon: <Home size={18} />, route: "/" },
  { label: "Profile", icon: <User size={18} /> },
  {
    label: "Academic",
    icon: <BookOpen size={18} />,
    children: [
      { name: "My Class", route: "/my-class" },
      { name: "Grade & Transcript" },
      { name: "Assignments" },
      { name: "Examination" },
      { name: "Attendance" },
    ],
  },
  {
    label: "Documents",
    icon: <FileText size={18} />,
    children: [
      { name: "Official Transcripts" },
      { name: "Certificates" },
      { name: "Holidays" },
    ],
  },
  {
    label: "Finance",
    icon: <DollarSign size={18} />,
    children: [{ name: "Fees" }, { name: "Payment History" }],
  },
  {
    label: "Student Life",
    icon: <Users size={18} />,
    children: [{ name: "Organization" }, { name: "Campus Events" }],
  },
  {
    label: "Transport",
    icon: <Bus size={18} />,
    children: [{ name: "Routes" }, { name: "Assign Vehicle" }],
  },
  { label: "Notifications", icon: <Bell size={18} /> },
  { label: "Library", icon: <Library size={18} /> },
  { label: "Messages", icon: <MessageSquare size={18} /> },
  { label: "Settings", icon: <Settings size={18} /> },
];

const Sidebar = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleNavClick = (route) => {
    if (route) {
      navigate(route);
      setIsSidebarOpen(false); // close sidebar on mobile after navigation
    }
  };

  return (
    <>
      {/* Mobile top bar with menu button */}
      <div className="md:hidden bg-white shadow px-4 py-3 flex items-center justify-between ">
        <div className="text-xl font-bold text-blue-600">PreSkool</div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white shadow-md px-4 py-6 fixed md:sticky top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-64`}
      >
        {/* Close button for mobile */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="hidden md:block text-2xl font-bold text-blue-600 mb-6">
          PreSkool
        </div>

        <nav className="space-y-3">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.children ? (
                <>
                  <div
                    className="flex items-center justify-between text-gray-700 hover:bg-blue-100 px-3 py-2 rounded cursor-pointer transition"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    {openDropdowns[item.label] ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </div>
                  {openDropdowns[item.label] && (
                    <div className="pl-9 space-y-1 mt-1">
                      {item.children.map((child, i) => (
                        <div
                          key={i}
                          className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                          onClick={() => {
                            if (child.route) handleNavClick(child.route);
                          }}
                        >
                          {child.name}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div
                  className="flex items-center gap-2 text-gray-700 hover:bg-blue-100 px-3 py-2 rounded cursor-pointer transition"
                  onClick={() => handleNavClick(item.route)}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Background overlay when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
