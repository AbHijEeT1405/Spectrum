export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-700 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-500">SPECTRUM Dashboard</h1>
      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium">
        Upload Data
      </button>
    </nav>
  );
}
