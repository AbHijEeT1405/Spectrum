import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { wavelength: 400, absorbance: 0.6 },
  { wavelength: 450, absorbance: 0.8 },
  { wavelength: 500, absorbance: 1.1 },
  { wavelength: 550, absorbance: 0.7 },
  { wavelength: 600, absorbance: 0.9 },
];

export default function TestResult() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Test Result</h2>
      <div className="bg-gray-800 rounded-xl p-4 shadow">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="wavelength" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
            <Line type="monotone" dataKey="absorbance" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-blue-500">1.25 ppm</p>
          <p className="text-gray-400">Concentration</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-green-500">450 μm</p>
          <p className="text-gray-400">Particle Size</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-yellow-500">98.2%</p>
          <p className="text-gray-400">Confidence</p>
        </div>
      </div>
    </div>
  );
}
