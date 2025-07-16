import { useState } from 'react'

const ToDoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(todo.text)

  const handleEdit = () => {
    onEdit(todo.id, newText)
    setIsEditing(false)
  }

  return (
    <div className="flex justify-between items-center p-3 border rounded bg-gray-50">
      <div className="flex items-center gap-2 flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border px-2 rounded flex-grow"
          />
        ) : (
          <span className={todo.completed ? "line-through text-gray-400" : ""}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleEdit} className="text-green-600">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-600">Edit</button>
        )}
        <button onClick={() => onDelete(todo.id)} className="text-red-600">Delete</button>
      </div>
    </div>
  )
}

export default ToDoItem
