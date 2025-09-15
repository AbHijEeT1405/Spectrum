import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaStopwatch } from "react-icons/fa";

export default function Timer() {
  const [activeTab, setActiveTab] = useState("run"); // "run" | "settings"

  // Timer logic
  const initialTime = 25 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  const percentage = (timeLeft / initialTime) * 100;

  // Test settings state
  const [spectrometry, setSpectrometry] = useState(true);
  const [staining, setStaining] = useState(true);

  return (
    <div className="flex flex-col h-full">
      {/* Tabs */}
      <div className="flex border-b border-gray-700">
        <button
          onClick={() => setActiveTab("run")}
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === "run"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Run Test
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === "settings"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Test Settings
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        {activeTab === "run" && (
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 mb-6">
              <CircularProgressbar
                value={percentage}
                text={`${minutes}:${seconds}`}
                styles={buildStyles({
                  textColor: "#3b82f6",
                  pathColor: "#3b82f6",
                  trailColor: "#1f2937",
                })}
              />
            </div>

            <p className="text-gray-400 mb-6">
              25-minute test to detect microplastics. <br />
              Press 'Start Test' to begin.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setIsRunning(true)}
                disabled={isRunning}
                className={`px-6 py-2 rounded-lg font-medium ${
                  isRunning
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Start Test
              </button>

              <button
                onClick={() => {
                  setIsRunning(false);
                  setTimeLeft(initialTime);
                }}
                className="px-6 py-2 rounded-lg font-medium bg-gray-700 hover:bg-gray-600"
              >
                Reset
              </button>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="w-full max-w-md space-y-6">
            <h2 className="text-xl font-semibold">Process Configuration</h2>
            <p className="text-gray-400">
              Enable the processes required for the test.
            </p>

            {/* Toggle cards */}
            <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium">Spectrometry Process</h3>
                <p className="text-gray-400 text-sm">
                  Analyzes the light spectrum to identify material composition.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={spectrometry}
                  onChange={() => setSpectrometry((p) => !p)}
                />
                <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
              </label>
            </div>

            <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium">Staining Process</h3>
                <p className="text-gray-400 text-sm">
                  Applies a dye to enhance the visibility of microplastics.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={staining}
                  onChange={() => setStaining((p) => !p)}
                />
                <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
              </label>
            </div>

            {/* Estimated Time */}
            <div className="border border-blue-600 rounded-xl p-4 flex items-center gap-3">
              <FaStopwatch className="text-blue-500 text-xl" />
              <div>
                <p className="text-gray-400 text-sm">Estimated Test Time</p>
                <p className="text-white font-semibold text-lg">25 minutes</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
