import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log(props);
    return (
        <div className = {props.todo.completed ? "complete" : 'list'}
            style = {props.todo.completed ? { textDecoration: 'line-through' } : null}
            onClick = {() => props.handleToggleComplete(props.todo.id)}
            >
            {props.todo.task}
            </div>
    );
};

export default Todo;
