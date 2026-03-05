import TaskItem from "./TaskItem";

export default function TaskList() {
  return (
    <div className="space-y-3">
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
}