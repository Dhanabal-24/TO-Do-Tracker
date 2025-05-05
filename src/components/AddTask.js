import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: taskName,
      dueDate: dueDate,
      archived: false,
    };
    addTask(newTask);
    setTaskName('');
    setDueDate('');
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="taskName">
        <Form.Label>Task Name</Form.Label>
        <Form.Control 
          type="text" 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
        />
      </Form.Group>
      
      <Form.Group controlId="dueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control 
          type="date" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
        />
      </Form.Group>
      
      <Button variant="primary" type="submit">Add Task</Button>
    </Form>
  );
}

export default AddTask;