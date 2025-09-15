import { useState } from "react";
import { Pencil, LogOut, User } from "lucide-react";
import profileImg from "../assets/S.jpg";

export default function Profile() {
  const [username] = useState("User"); 
  const [profilePic, setProfilePic] = useState(profileImg);

  const handleEditPhoto = () => {
    alert("Change profile photo clicked!");
  };

  const handleEditProfile = () => {
    alert("Edit Profile clicked!");
  };

  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[35%] max-w-md p-6 bg-gray-800 rounded-xl shadow-md text-center">
        {/* Profile Picture */}
        <div className="relative flex justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-2 border-blue-500"
          />
          <button
            onClick={handleEditPhoto}
            className="absolute bottom-2 right-[35%] bg-blue-600 p-1 rounded-full shadow-md hover:bg-blue-700"
          >
            <Pencil size={14} className="text-white" />
          </button>
        </div>

        {/* Greeting */}
        <h2 className="mt-4 text-lg font-semibold text-white">
          Hello, <span className="text-blue-400">{username}</span>
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-3 mt-6">
          <button
            onClick={handleEditProfile}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
          >
            <User size={18} /> Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
