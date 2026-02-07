import { useTaskContext } from '../context/TasksContext';
import TasksActions from './TasksActions';

function TasksItem({ task }) {
  const { deleteTask, editTask, toggleComplete } = useTaskContext();

  return (
    <div className="task-item">
      <h3
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.title}
      </h3>

      <p>{task.description}</p>
      <p><strong>Priority:</strong> {task.priority}</p>

      <TasksActions
        taskId={task.id}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default TasksItem;
