// src/TaskContext.js
import { createContext, useContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // All tasks (both completed and not completed)
  const [archivedTasks, setArchivedTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, { text: task, completed: false }]);
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const archiveTask = (index) => {
    const taskToArchive = tasks[index];
    setArchivedTasks((prev) => [...prev, taskToArchive]);
    deleteTask(index);
  };

  const unarchiveTask = (index) => {
    const taskToRestore = archivedTasks[index];
    setTasks((prev) => [...prev, taskToRestore]);
    setArchivedTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const deleteArchivedTask = (index) => {
    setArchivedTasks((prev) => prev.filter((_, i) => i !== index));
  };
  

  const toggleCompletion = (index) => {
    setTasks((prev) => {
      const updatedTasks = [...prev];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return updatedTasks;
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        archivedTasks,
        addTask,
        deleteTask,
        archiveTask,
        unarchiveTask,
        deleteArchivedTask, 
        toggleCompletion,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);