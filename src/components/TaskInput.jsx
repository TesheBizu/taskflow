import { useState } from "react";

export default function TaskInput({ addTask }) {

  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    addTask(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        Add
      </button>

    </form>
  );
}