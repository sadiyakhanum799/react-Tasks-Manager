
function TasksActions({ taskId, deleteTask, toggleComplete }) {
  return (
    <div className="task-actions">
      <button onClick={() => toggleComplete(taskId)}>
        Toggle
      </button>

      <button onClick={() => deleteTask(taskId)}>
        Delete
      </button>
    </div>
  );
}

export default TasksActions;
