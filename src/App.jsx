import { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const timestamp = new Date()
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: timestamp,
      completedAt: null
    }
    setTodos([newTodo, ...todos])
  }

  const toggleComplete = (id) => {
    const timestamp = new Date()
    setTodos(todos.map(todo =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
            completedAt: !todo.completed ? timestamp : null
          }
        : todo
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
    <div className="min-h-screen p-6 bg-gray-100 flex justify-center items-start">
      <div className="w-full max-w-2xl bg-white p-6 rounded-xl">
        <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          📝 My To-Do List
        </h1>
        <Header onAdd={addTodo} />
        <ToDoList
          todos={todos}
          onToggle={toggleComplete}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  )
}

export default App

