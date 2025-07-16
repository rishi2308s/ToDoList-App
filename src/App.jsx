import { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false }
    setTodos([newTodo, ...todos])
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  return (
    <div className="bg-white p-6 rounded shadow-md w-full">
      <h1 className="text-2xl font-bold mb-4 text-center">My To-Do List</h1>
      <Header onAdd={addTodo} />
      <ToDoList
        todos={todos}
        onToggle={toggleComplete}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  )
}

export default App
