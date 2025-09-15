import { useState } from "react";

const sampleData = [
  { id: 1, region: "River A", concentration: 4.1, type: "PE" },
  { id: 2, region: "River B", concentration: 6.3, type: "PP" },
  { id: 3, region: "Lake C", concentration: 2.7, type: "PS" },
  { id: 4, region: "Reservoir D", concentration: 5.5, type: "PE" },
];

export default function DataTable() {
  const [search, setSearch] = useState("");

  const filtered = sampleData.filter((row) =>
    row.region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-xl shadow mt-6">
      <h2 className="text-lg font-semibold mb-3">Sample Data</h2>
      <input
        type="text"
        placeholder="Search region..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-3 w-full"
      />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Region</th>
            <th className="p-2 border">Concentration (ppm)</th>
            <th className="p-2 border">Type</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row) => (
            <tr key={row.id}>
              <td className="p-2 border">{row.region}</td>
              <td className="p-2 border">{row.concentration}</td>
              <td className="p-2 border">{row.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
