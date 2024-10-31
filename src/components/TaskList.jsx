/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
