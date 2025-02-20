# To-Do List App

## Approach
I built this React To-Do List app using functional components and hooks. The architecture separates concerns through three main components:
- **App Component**: Manages global state and task operations
- **ToDoItem Component**: Handles individual task display and actions
- **AddTaskForm Component**: Manages user input for new tasks

Used React's useState for state management and useEffect for localStorage persistence, ensuring data survives page refreshes.