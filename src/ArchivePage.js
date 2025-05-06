// src/ArchivePage.js
import React from "react";
import "./ArchivePage.css";
import { useTaskContext } from "./TaskContext";

const ArchivePage = () => {
  const { archivedTasks, unarchiveTask, deleteArchivedTask } = useTaskContext();

  return (
    <div className="archive-container">
      <h2 className="archive-title">Archived Tasks</h2>
      {archivedTasks.length === 0 ? (
        <p className="no-archives">No archived tasks</p>
      ) : (
        <ul className="archive-list">
          {archivedTasks.map((task, i) => (
            <li key={i} className="archive-item">
              <span className="task-text">{task.text}</span>
              <span className="task-category">({task.category})</span>
              <div className="archive-buttons">
                <button
                  className="unarchive-btn"
                  onClick={() => unarchiveTask(i)}
                >
                  Unarchive
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteArchivedTask(i)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArchivePage;
