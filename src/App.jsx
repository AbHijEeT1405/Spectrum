import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DeviceList from "./components/DeviceList";
import TestResult from "./components/TestResult";
import Timer from "./components/RunTest";
import Settings from "./components/Settings";
import Profile from "./components/Profile";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-black text-white">
        {/* Sidebar Navigation */}
        <Sidebar />

        {/* Main Section */}
        <div className="flex-1 flex flex-col">
          <Navbar />

          <div className="p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<DeviceList />} />
              <Route path="/result" element={<TestResult />} />
              <Route path="/test" element={<Timer />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
