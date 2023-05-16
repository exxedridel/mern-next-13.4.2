"use client";
import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTask must be used within a provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "my first task",
      description: "some task1 description",
    },
    {
      id: 2,
      title: "my second task",
      description: "some task2 description",
    },
    {
      id: 3,
      title: "my third task",
      description: "some task3 description",
    },
  ]);

  function createTask(title, description) {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        title,
        description,
      },
    ]);
  }

  function deleteTask(id) {
    // set tasks state to a new array of task with out the taks of the passed id
    setTasks([...tasks.filter((task) => task.id !== id)]);
  }

  return (
    <TaskContext.Provider
      value={{
        // tasks: tasks
        // name of value: value
        tasks,
        // createTask: createTask
        // name of value: function
        // or just (for short)
        createTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
