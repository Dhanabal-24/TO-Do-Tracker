import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleArchive }) {
  return (
    <ListGroup>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} deleteTask={deleteTask} toggleArchive={toggleArchive} />
      ))}
    </ListGroup>
  );
}

export default TaskList;