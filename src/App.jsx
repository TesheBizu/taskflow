import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {

  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function clearCompleted() {
    setTasks(tasks.filter(task => !task.completed));
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-slate-800 rounded-xl shadow-xl p-6">

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          TaskFlow
        </h1>

        <TaskInput addTask={addTask} />

        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />

        <FilterBar
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />

      </div>
    </div>
  );
}