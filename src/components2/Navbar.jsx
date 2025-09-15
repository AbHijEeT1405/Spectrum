export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center rounded-xl shadow">
      <h1 className="text-xl font-bold">🌊 Microplastics Dashboard</h1>
      <button className="px-4 py-2 bg-white text-blue-600 font-medium rounded-lg shadow">
        Upload Data
      </button>
    </nav>
  );
}
