export default function TaskItem() {
  return (
    <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
      <span className="text-white">Sample Task</span>

      <button className="text-red-400 hover:text-red-500">
        Delete
      </button>
    </div>
  );
}