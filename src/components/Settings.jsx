export default function Settings() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <div className="bg-gray-800 rounded-xl p-6 shadow space-y-4">
        <div>
          <label className="block text-gray-400 mb-1">Theme</label>
          <select className="w-full bg-gray-700 rounded-lg p-2">
            <option>Dark</option>
            <option>Light</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Notifications</label>
          <input type="checkbox" className="accent-blue-600" defaultChecked />
        </div>
      </div>
    </div>
  );
}
