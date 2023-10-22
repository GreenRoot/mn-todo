import React from 'react';

const TodoItem = ({id, text, completed, removeTodo, toggleTodoCompleted}) => {
    return (
        <li>
            <input className={'checkbox'} type="checkbox" checked={completed} onChange={ () => toggleTodoCompleted(id)}/>
            <span className={'text'}>{text}</span>
            <span className={'delete'} onClick={() => {removeTodo(id)}}>&times;</span>
        </li>
    );
};

export default TodoItem;