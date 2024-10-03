import { useEffect, useState } from "react";
import { getAllTask } from "../api/Task.api";
import { TaskCard } from "./TaskCard";

export function TasList() {
  const [tasks, setTask] = useState([]);
  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTask();
      setTask(res.data);
    }
    loadTasks();
  }, []);
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
