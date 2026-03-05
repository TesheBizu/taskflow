export default function FilterBar() {
  return (
    <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
      <div className="flex gap-2">
        <button className="px-3 py-1 bg-slate-700 rounded">All</button>
        <button className="px-3 py-1 bg-slate-700 rounded">Active</button>
        <button className="px-3 py-1 bg-slate-700 rounded">Completed</button>
      </div>

      <button className="text-red-400 hover:text-red-500">
        Clear Completed
      </button>
    </div>
  );
}