import React, { useState } from 'react';

const TodoForm = ({ saveTodo }) => {
  const [ value, setValue ] = useState('');

  const handleChange = e => setValue(e.currentTarget.value);
  const handleSubmit = e => {
    setValue('');
    saveTodo(value);
    e.preventDefault();
  };

  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange}/>
        <button>Save</button>
      </form>
    </div>
  );
}

export default TodoForm;
