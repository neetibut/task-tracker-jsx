/* eslint-disable react/prop-types */
import { useState } from "react";

function TaskItem({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEditClick = () => setIsEditing(true);

  const handleSaveClick = () => {
    onEdit(task.id, editText);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center p-2 bg-white border rounded-md shadow-sm mb-2">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 p-1 mr-2 border rounded"
        />
      ) : (
        <p>{task.text}</p>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveClick}
              className="text-green-500 hover:text-green-700"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEditClick}
              className="text-blue-500 hover:text-blue-700"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
