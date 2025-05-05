// src/Dashboard.js
import React from 'react';
import { useTaskContext } from './TaskContext';

const Dashboard = () => {
  const { tasks } = useTaskContext();

  const completed = tasks.filter(task => task.completed).length;
  const incomplete = tasks.filter(task => !task.completed).length;
  const total = tasks.length;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      <p>Total Tasks: {total}</p>
      <p>Completed Tasks: {completed}</p>
      <p>Incomplete Tasks: {incomplete}</p>
    </div>
  );
};

export default Dashboard;
