import { useState, useEffect } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Add a new todo
  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      }
      setTodos([...todos, newTodo])
    }
  }

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // Calculate stats
  const totalTasks = todos.length
  const completedTasks = todos.filter(todo => todo.completed).length
  const pendingTasks = totalTasks - completedTasks

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>📝 My To-Do List</h1>
          <div className="stats">
            <span className="stat">Total: {totalTasks}</span>
            <span className="stat">Completed: {completedTasks}</span>
            <span className="stat">Pending: {pendingTasks}</span>
          </div>
        </header>

        <AddTodo onAddTodo={addTodo} />

        <TodoList
          todos={todos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
        />

        {completedTasks > 0 && (
          <div className="actions">
            <button
              className="clear-completed-btn"
              onClick={clearCompleted}
            >
              Clear Completed ({completedTasks})
            </button>
          </div>
        )}

        {todos.length === 0 && (
          <div className="empty-state">
            <p>🎉 No tasks yet! Add one above to get started.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
