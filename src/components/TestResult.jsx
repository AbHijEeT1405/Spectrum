import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TestResult() {
  const [activeTab, setActiveTab] = useState("absorbance");

  const absorbanceData = [
    { wavelength: 400, value: 0.6 },
    { wavelength: 450, value: 0.4 },
    { wavelength: 500, value: 1.0 },
    { wavelength: 550, value: 0.7 },
    { wavelength: 600, value: 0.8 },
  ];

  const transmissionData = [
    { wavelength: 400, value: 0.9 },
    { wavelength: 450, value: 0.8 },
    { wavelength: 500, value: 0.7 },
    { wavelength: 550, value: 0.6 },
    { wavelength: 600, value: 0.5 },
  ];

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      {/* Chart Section */}
      <div className="bg-gray-800 p-4 rounded-xl shadow-md">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={activeTab === "absorbance" ? absorbanceData : transmissionData}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="wavelength" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === "absorbance"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setActiveTab("absorbance")}
          >
            Absorbance
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === "transmission"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setActiveTab("transmission")}
          >
            Transmission
          </button>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-800 p-4 rounded-xl text-center">
          <h3 className="text-lg font-bold text-blue-400">1.25 ppm</h3>
          <p className="text-sm">Concentration</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl text-center">
          <h3 className="text-lg font-bold text-green-400">450 μm</h3>
          <p className="text-sm">Particle Size</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl text-center">
          <h3 className="text-lg font-bold text-yellow-400">98.2 %</h3>
          <p className="text-sm">Confidence</p>
        </div>
      </div>

      {/* Analysis Details */}
      <div className="bg-gray-800 p-6 rounded-xl mt-6">
        <h2 className="text-xl font-semibold mb-4">Analysis Details</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="text-gray-400">Device Model: </span>
            <span className="font-semibold">Spectrum-A486-XT</span>
          </li>
          <li>
            <span className="text-gray-400">Peak Wavelength: </span>
            <span className="font-semibold">590 nm</span>
          </li>
          <li>
            <span className="text-gray-400">Max Absorbance: </span>
            <span className="font-semibold">0.88 AU</span>
          </li>
          <li>
            <span className="text-gray-400">Test Duration: </span>
            <span className="font-semibold">25:00 minutes</span>
          </li>
          <li>
            <span className="text-gray-400">Timestamp: </span>
            <span className="font-semibold">2024-07-26 14:32:15</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
