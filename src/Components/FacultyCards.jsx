import React from "react";
import { Mail, Phone } from "lucide-react";
import teacher1 from "../Image/profileimg.jpg"; // replace with your images
import teacher2 from "../Image/profileimg.jpg";
import teacher3 from "../Image/profileimg.jpg";

const facultyMembers = [
  {
    name: "Mrs. Angela",
    subject: "Mathematics",
    email: "angela.math@school.com",
    phone: "9876543210",
    image: teacher1,
  },
  {
    name: "Mr. David",
    subject: "Science",
    email: "david.sci@school.com",
    phone: "9988776655",
    image: teacher2,
  },
  {
    name: "Mrs. Stella",
    subject: "English",
    email: "stella.eng@school.com",
    phone: "9123456780",
    image: teacher3,
  },
];

const FacultyCards = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Class Teachers
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {facultyMembers.map((teacher, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 border rounded-lg hover:shadow transition"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-16 h-16 rounded-full object-cover border"
            />
            <div>
              <h4 className="font-semibold text-gray-800">{teacher.name}</h4>
              <p className="text-sm text-gray-600">{teacher.subject}</p>
              <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                <Mail size={14} />
                {teacher.email}
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <Phone size={14} />
                {teacher.phone}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyCards;
