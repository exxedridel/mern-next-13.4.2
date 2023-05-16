"use client";
import { useEffect, useState } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const { tasks, createTask, updateTask } = useTasks();
  const router = useRouter();

  function handleChange(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (params.id) {
      console.log(params.id);
      updateTask(params.id, task);
    } else {
      createTask(task.title, task.description);
    }

    router.push("/");
  }

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setTask({
          title: taskFound.title,
          description: taskFound.description,
        });
      }
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Write a title"
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          name="description"
          placeholder="Write a description"
          onChange={handleChange}
          value={task.description}
        />
        <button>Save</button>
      </form>
    </>
  );
}
