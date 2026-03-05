import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-slate-800 rounded-xl shadow-xl p-6">

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          TaskFlow
        </h1>

        <TaskInput />

        <TaskList />

        <FilterBar />

      </div>
    </div>
  );
}