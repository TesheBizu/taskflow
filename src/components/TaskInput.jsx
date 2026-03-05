export default function TaskInput() {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        Add
      </button>
    </div>
  );
}