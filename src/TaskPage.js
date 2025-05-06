import React, { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";
import "./TaskPage.css";

function TaskPage() {
  const { tasks, addTask, deleteTask, archiveTask, toggleCompletion } =
    useContext(TaskContext);
  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState(["Work", "Personal", "Others"]);

  const handleAddCategory = () => {
    const trimmed = newCategory.trim();
    if (trimmed && !categories.includes(trimmed)) {
      setCategories((prev) => [...prev, trimmed]);
      setSelectedCategory(trimmed);
    }
    setNewCategory("");
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "" && selectedCategory !== "") {
      addTask({
        text: newTask.trim(),
        category: selectedCategory,
        completed: false,
      });
      setNewTask("");
    }
  };

  return (
    <div className="task-page-container">
      <h2 className="task-page-title">Task Page</h2>

      <div className="task-input-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Or add new category"
        />
        <button onClick={handleAddCategory}>Add Category</button>
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, i) => (
          <li key={i} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(i)}
            />
            <span className={task.completed ? "completed" : ""}>
              {task.text} — <strong>{task.category}</strong>
            </span>
            <button onClick={() => deleteTask(i)}>Delete</button>
            <button onClick={() => archiveTask(i)}>Archive</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskPage;
