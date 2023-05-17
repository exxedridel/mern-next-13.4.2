"use client";
import { useTasks } from "@/context/TasksContext";
import TaskCard from "@/components/TaskCard";

export default function Home() {
  const { tasks } = useTasks();

  return (
    <div className="flex justify-center">
      <div className="w-7/12">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
