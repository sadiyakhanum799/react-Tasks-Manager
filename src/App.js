import React from 'react';
import { TasksProvider } from './context/TasksContext';
import TasksList from './components/taskslist';
import TasksForm from './components/tasksForm';
import './App.css';

function App() {
  return (
    <TasksProvider>
      <div className="App">
        <h1>Tasks Manager</h1>

        <TasksForm />
        <TasksList />
        
      </div>
    </TasksProvider>
  );
}

export default App;
