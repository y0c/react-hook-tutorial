import React from 'react';

const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo
}) => {
  return (
    <div className="TodoList">
      <ul>
        {
          todos.map((t, i) => (
            <li key={i}>
              <input 
                type='checkbox' 
                onClick={e => toggleTodo(i)}
                checked={t.completed ? 'checked' : ''} 
              />
              {t.content}
              <button onClick={e => deleteTodo(i)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList;
