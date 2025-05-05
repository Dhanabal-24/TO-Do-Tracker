import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function TaskItem({ task, deleteTask, toggleArchive }) {
  return (
    <ListGroup.Item>
      <div>
        <strong>{task.name}</strong> - {task.dueDate}
        <Button variant="danger" onClick={() => deleteTask(task._id)} className="ml-2">Delete</Button>
        <Button 
          variant={task.archived ? "success" : "warning"} 
          onClick={() => toggleArchive(task)} 
          className="ml-2"
        >
          {task.archived ? "Unarchive" : "Archive"}
        </Button>
      </div>
    </ListGroup.Item>
  );
}

export default TaskItem;