import { useState } from 'react'

const ToDoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(todo.text)

  const handleEdit = () => {
    onEdit(todo.id, newText)
    setIsEditing(false)
  }

  return (
    <div className="p-4 rounded-lg border shadow-sm bg-gray-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-start gap-3 flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mt-1 w-5 h-5 accent-blue-600"
        />
        <div className="flex flex-col">
          {isEditing ? (
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="border px-2 py-1 rounded text-sm"
            />
          ) : (
            <span className={`text-base ${todo.completed ? 'line-through text-gray-400' : ''}`}>
              {todo.text}
            </span>
          )}
          <div className="text-xs text-gray-500 mt-1">
            <p>🕓 Added: {todo.createdAt?.toLocaleString()}</p>
            {todo.completedAt && <p>✅ Completed: {todo.completedAt.toLocaleString()}</p>}
          </div>
        </div>
      </div>
      <div className="flex gap-2 self-end sm:self-auto">
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ToDoItem
