import { useState } from 'react'

function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onAddTodo(inputValue)
      setInputValue('')
    }
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={handleInputChange}
          maxLength={200}
        />
        <button 
          type="submit" 
          className="add-btn"
          disabled={!inputValue.trim()}
        >
          ➕ Add Task
        </button>
      </div>
    </form>
  )
}

export default AddTodo
