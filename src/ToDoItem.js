import React from 'react';

function ToDoItem({ task, onDelete, onComplete }) {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div 
        className="task-text"
        onClick={() => onComplete(task.id)}
      >
        {task.text}
      </div>
      <div className="task-actions">
        <button
          className="complete-btn"
          onClick={() => onComplete(task.id)}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;