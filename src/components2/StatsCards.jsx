export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
      <div className="p-4 bg-white rounded-xl shadow text-center">
        <h2 className="text-lg font-semibold">Avg. Concentration</h2>
        <p className="text-2xl font-bold text-blue-600">4.2 ppm</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow text-center">
        <h2 className="text-lg font-semibold">Samples</h2>
        <p className="text-2xl font-bold text-blue-600">320</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow text-center">
        <h2 className="text-lg font-semibold">Regions</h2>
        <p className="text-2xl font-bold text-blue-600">12</p>
      </div>
    </div>
  );
}
