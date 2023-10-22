import React from 'react';
import {useDispatch} from "react-redux";
import { removeTodo, toggleTodoCompleted } from "../store/todoSlice";

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch()
    return (
        <li>
            <input
                className={'checkbox'}
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleTodoCompleted({ id }))}
            />
            <span className={'text'}>{text}</span>
            <span className={'delete'} onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
        </li>
    );
};

export default TodoItem;