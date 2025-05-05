import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

function TaskPage() {
  const [newTask, setNewTask] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');  // New state for category
  const { tasks, addTask, deleteTask, archiveTask, toggleCompletion } = useContext(TaskContext);

  const categories = ['Work', 'Personal', 'Shopping', 'Health']; // Define your categories here

  const handleAdd = () => {
    if (newTask.trim() !== '' && selectedCategory) {
      addTask(newTask.trim(), selectedCategory);  // Pass category when adding task
      setNewTask('');
      setSelectedCategory('');  // Reset category selection after adding
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Task Page</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task"
      />
      
      {/* Dropdown for category selection */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>

      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((task, i) => (
          <li key={i} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(i)}
            />
            {task.text} - <strong>{task.category}</strong> {/* Display task category */}
            <button onClick={() => deleteTask(i)}>Delete</button>
            <button onClick={() => archiveTask(i)}>Archive</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskPage;
