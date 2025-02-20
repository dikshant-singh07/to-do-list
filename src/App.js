import React, { useState, useEffect } from 'react';
import './App.css';
import ToDoItem from './ToDoItem';
import AddTaskForm from './AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  // load tasks
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // save tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // adding  new task
  const addTask = (text) => {
    if (text.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text,
        completed: false
      };
      setTasks([...tasks, newTask]);
    }
  };

  // delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // task completion status
  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <AddTaskForm onAddTask={addTask} />
      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-list">No tasks yet. Add a task to get started!</p>
        ) : (
          tasks.map(task => (
            <ToDoItem
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onComplete={toggleComplete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;