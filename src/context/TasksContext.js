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
  const [tasks, setTasks] = useState([]);

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
    // set tasks state to a new array of task with out the task of the passed id
    setTasks([...tasks.filter((task) => task.id !== id)]);
  }

  function updateTask(id, updatedTask) {
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    ]);
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
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
