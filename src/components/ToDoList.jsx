import ToDoItem from './ToDoItem'

const ToDoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <div className="space-y-3">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default ToDoList

