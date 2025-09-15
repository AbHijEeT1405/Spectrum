import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFlask,
  FaCogs,
  FaUser,
  FaTable,
  FaClock,
  FaBars,
  FaAngleDoubleLeft,
} from "react-icons/fa";
import { GoGraph } from "react-icons/go";

export default function Sidebar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const links = [
    { to: "/", icon: <FaTable />, title: "Devices" },
    { to: "/test", icon: <FaFlask />, title: "Run Test" },
    { to: "/result", icon: <GoGraph />, title: "Test Results" },
    { to: "/settings", icon: <FaCogs />, title: "Settings" },
    { to: "/profile", icon: <FaUser />, title: "Profile" },
  ];

  return (
    <div
      className={`h-screen ${
        expanded ? "w-52" : "w-20"
      } bg-gray-900 border-r border-gray-700 flex flex-col py-6 transition-all duration-300`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="text-gray-400 hover:text-blue-500 px-4 mb-6"
      >
        {expanded ? <FaAngleDoubleLeft size={20} /> : <FaBars size={20} />}
      </button>

      {/* Links */}
      <div className="flex flex-col space-y-6">
        {links.map((link) => {
          const active = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center px-4 gap-3 cursor-pointer ${
                active ? "text-blue-500" : "text-gray-400 hover:text-blue-500"
              }`}
            >
              <span className="text-2xl">{link.icon}</span>
              {expanded && <span className="font-medium">{link.title}</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
