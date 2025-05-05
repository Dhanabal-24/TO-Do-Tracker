// src/TaskPage.js
import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

function TaskPage() {
  const [newTask, setNewTask] = useState('');
  const { tasks, addTask, deleteTask, archiveTask, toggleCompletion } = useContext(TaskContext);

  const handleAdd = () => {
    if (newTask.trim() !== '') {
      addTask(newTask.trim());
      setNewTask('');
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
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((task, i) => (
          <li key={i} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(i)}
            />
            {task.text}
            <button onClick={() => deleteTask(i)}>Delete</button>
            <button onClick={() => archiveTask(i)}>Archive</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskPage;