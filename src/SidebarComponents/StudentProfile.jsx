// src/pages/StudentProfile.jsx
import React, { useState } from "react";
import profileimg from "../Image/profileimg.jpg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StudentProfile = () => {
  const [profile, setProfile] = useState({
    name: "Athan Wong",
    email: "athanwong@gmail.com",
    phone: "",
    class: "10th Grade",
    section: "A",
    age: "15",
    address: "Austin, TX - United States",
    gender: "Female",
  });

  const wordUsageData = [
    { date: "10 Mar", value: 550 },
    { date: "11 Mar", value: 630 },
    { date: "12 Mar", value: 670 },
    { date: "13 Mar", value: 400 },
    { date: "14 Mar", value: 390 },
    { date: "15 Mar", value: 560 },
    { date: "16 Mar", value: 710 },
    { date: "17 Mar", value: 480 },
    { date: "18 Mar", value: 760 },
    { date: "19 Mar", value: 850 },
  ];

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Saved!");
  };

  return (
    <main className="px-4 py-6 space-y-6 bg-black min-h-screen border-3 border-red-700"
    
      style={{ width: "calc(100vw - 16rem)" }}>

      <h2 className="text-2xl font-bold mb-2">Profile Page</h2>

      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-shrink-0">
          <img
            src={profileimg}
            alt="Student"
            className="rounded-lg w-48 h-auto object-cover"
          />
        </div>

        <div className="flex-1 w-full">
          <div className="mb-4">
            <div className="text-sm text-gray-500">🇺🇸 United States</div>
            <h3 className="text-xl font-bold">{profile.name}</h3>
            <p className="text-sm text-gray-600">
              Class: {profile.class} - Section {profile.section}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <h4 className="font-semibold text-sm mb-1">Subscription</h4>
            <p className="text-sm text-gray-600">
              Your account was created on May 10, 2023.
              <br />
              You are currently on the Standard Student Plan.
            </p>
            <button className="mt-2 text-blue-600 hover:underline text-sm">
              Edit Subscription
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info + Chart */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Contact Form */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
          <form className="space-y-3" onSubmit={handleSubmit}>
            {[
              ["name", "Name"],
              ["email", "Email"],
              ["phone", "Phone"],
              ["class", "Class"],
              ["section", "Section"],
              ["age", "Age"],
              ["address", "Address"],
            ].map(([field, label]) => (
              <div key={field}>
                <label className="text-sm font-medium">{label}</label>
                <input
                  type={field === "age" ? "number" : "text"}
                  name={field}
                  value={profile[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            ))}
            <div>
              <label className="text-sm font-medium">Gender</label>
              <select
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Save Profile
            </button>
          </form>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h4 className="text-lg font-semibold mb-4">Word Usage</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={wordUsageData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip
                formatter={(value) => [`Word Used: ${value}`, ""]}
                labelFormatter={(label) => `${label} 2022`}
              />
              <Bar dataKey="value" fill="#6366F1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-gray-600">
            <p>Data is as per UTC. Usage means content processed/generated.</p>
            <p className="mt-1 font-semibold">
              Word used this month: <span className="text-black">20,000</span> /
              50,000 Words
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentProfile;
