import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);

    return (
        <div className="TodoApp">
            <TodoList
                list={todoList} 
            /> 
        </div>
    );
}

export default TodoApp;
