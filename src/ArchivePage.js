// src/ArchivePage.js
import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

function ArchivePage() {
  const { archivedTasks, unarchiveTask, deleteArchivedTask } = useContext(TaskContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Archived Tasks</h2>
      {archivedTasks.length === 0 ? (
        <p>No archived tasks available.</p>
      ) : (
        <ul>
          {archivedTasks.map((task, i) => (
            <li key={i}>
              {task.text} {/* Render task.text */}
              <button onClick={() => unarchiveTask(i)}>Unarchive</button>
              <button onClick={() => deleteArchivedTask(i)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArchivePage;