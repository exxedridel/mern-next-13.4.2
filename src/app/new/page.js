"use client";
import { useEffect, useState } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Page({ params }) {
  // removed task empty state, now called from useLocalstorage hook
  const { tasks, createTask, updateTask } = useTasks();
  const router = useRouter();
  const { register, handleSubmit, setValue, formState: {errors} } = useForm();

  // removed handleChange() not used in the useForm way

  // new code for handleSubmit() use from the useForm way
  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data.title, data.description);
    }
    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        /* removed to receive the arguments from useForm way*/
        // setTask({
        //   title: taskFound.title,
        //   description: taskFound.description,
        // }); 
        /* like this*/
        setValue('title', taskFound.title)
        setValue('description', taskFound.description)
      }
    }
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Write a title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span>
            This field is required
          </span>
        )}

        <textarea
          placeholder="Write a description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span>
            This field is required
          </span>
        )}

        <button>Save</button>
      </form>
    </>
  );
}
