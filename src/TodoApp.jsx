import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const saveTodo = value => {
    setTodos([...todos].concat({
      content: value,
      completed: false
    }));
  };

  const toggleTodo = idx => {
  };

  const deleteTodo = idx => {
    setTodos(todos.filter((v,i) => i !== idx));
  };

  return (
    <div className="TodoApp">
      <TodoForm saveTodo={saveTodo}/>
      <TodoList
        todos={todos} 
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      /> 
      <TodoFooter />
    </div>
  );
}

export default TodoApp;
