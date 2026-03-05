export default function TaskItem({ task, deleteTask, toggleTask }) {

  return (
    <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">

      <span
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer ${
          task.completed ? "line-through text-gray-400" : "text-white"
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-400 hover:text-red-500"
      >
        Delete
      </button>

    </div>
  );
}