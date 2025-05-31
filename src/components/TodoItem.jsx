function TodoItem({ todo, onToggle, onDelete }) {
  const handleToggle = () => {
    onToggle(todo.id)
  }

  const handleDelete = () => {
    onDelete(todo.id)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
            className="todo-checkbox"
          />
          <span className="checkmark"></span>
        </label>
        
        <div className="todo-text-container">
          <span className="todo-text">{todo.text}</span>
          <span className="todo-date">Created: {formatDate(todo.createdAt)}</span>
        </div>
      </div>
      
      <button 
        className="delete-btn"
        onClick={handleDelete}
        title="Delete task"
      >
        🗑️
      </button>
    </div>
  )
}

export default TodoItem
