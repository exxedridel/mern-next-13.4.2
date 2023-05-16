"use client";
import { useTasks } from "@/context/TasksContext";
import TaskCard from "@/components/TaskCard";

export default function Home() {
  const { tasks } = useTasks();
  console.log(tasks);

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
}
