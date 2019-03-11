import React from 'react';

const TodoList = ({
    todoList
}) => {
    return (
        <div className="TodoList">
            <ul>
                {
                    todoList.map(t => (
                        <li>
                            {t.content}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;
