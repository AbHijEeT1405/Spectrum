export default function DeviceList() {
  const devices = [
    { id: 1, name: "Spectrum-A486-XT", paired: true },
    { id: 2, name: "Spectrum-B912-UV", paired: false },
    { id: 3, name: "Spectrum-C775-RZ", paired: false },
    { id: 4, name: "Spectrum-F340-LP", paired: false },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Available Devices</h2>
      <div className="grid gap-4">
        {devices.map((d) => (
          <div
            key={d.id}
            className="bg-gray-800 rounded-xl p-4 flex justify-between items-center shadow"
          >
            <span className="font-medium">{d.name}</span>
            {d.paired ? (
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm bg-red-600 rounded-lg">Forget</button>
                <button className="px-3 py-1 text-sm bg-green-600 rounded-lg">Run Test</button>
              </div>
            ) : (
              <button className="px-3 py-1 text-sm bg-blue-600 rounded-lg">Pair</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
