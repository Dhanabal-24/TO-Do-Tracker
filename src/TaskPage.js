// src/TaskPage.js
import React, { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";
import "./TaskPage.css";

function TaskPage() {
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(["Work", "Personal", "Urgent"]);
  const { tasks, addTask, deleteTask, archiveTask, toggleCompletion } =
    useContext(TaskContext);

  const handleAdd = () => {
    if (newTask.trim() && category.trim()) {
      if (!categories.includes(category)) {
        setCategories((prev) => [...prev, category]);
      }
      addTask({ text: newTask.trim(), category, completed: false });
      setNewTask("");
      setCategory("");
    }
  };

  return (
    <div className="task-container">
      <h2>Task Page</h2>

      <div className="task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Or add new category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(i)}
            />
            <div
              className="task-info"
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              <span>{task.text}</span>
              <span className="task-category">[{task.category}]</span>
            </div>
            <div className="task-actions">
              <button className="delete" onClick={() => deleteTask(i)}>
                Delete
              </button>
              <button className="archive" onClick={() => archiveTask(i)}>
                Archive
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskPage;
