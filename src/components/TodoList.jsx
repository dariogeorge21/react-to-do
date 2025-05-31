import TodoItem from './TodoItem'

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return null
  }

  // Separate completed and pending todos
  const pendingTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => todo.completed)

  return (
    <div className="todo-list">
      {pendingTodos.length > 0 && (
        <div className="todo-section">
          <h3 className="section-title">📋 Pending Tasks ({pendingTodos.length})</h3>
          <div className="todos">
            {pendingTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggleTodo}
                onDelete={onDeleteTodo}
              />
            ))}
          </div>
        </div>
      )}

      {completedTodos.length > 0 && (
        <div className="todo-section">
          <h3 className="section-title">✅ Completed Tasks ({completedTodos.length})</h3>
          <div className="todos">
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggleTodo}
                onDelete={onDeleteTodo}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoList
