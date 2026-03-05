export default function FilterBar({ setFilter, clearCompleted }) {

  return (
    <div className="flex justify-between items-center mt-4 text-sm text-gray-300">

      <div className="flex gap-2">

        <button
          onClick={() => setFilter("all")}
          className="px-3 py-1 bg-slate-700 rounded"
        >
          All
        </button>

        <button
          onClick={() => setFilter("active")}
          className="px-3 py-1 bg-slate-700 rounded"
        >
          Active
        </button>

        <button
          onClick={() => setFilter("completed")}
          className="px-3 py-1 bg-slate-700 rounded"
        >
          Completed
        </button>

      </div>

      <button
        onClick={clearCompleted}
        className="text-red-400 hover:text-red-500"
      >
        Clear Completed
      </button>

    </div>
  );
}