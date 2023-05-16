"use client";
import { useState } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";

export default function NewTask() {
  const [task, setTask] = useState();
  const { createTask } = useTasks();
  const router = useRouter();

  function handleChange(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createTask(task.title, task.description);
    router.push("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Write a title"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Write a description"
          onChange={handleChange}
        />
        <button>Save</button>
      </form>
    </>
  );
}
