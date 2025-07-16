import { useState } from 'react'

const Header = ({ onAdd }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new task"
        className="flex-grow border px-4 py-2 rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  )
}

export default Header
