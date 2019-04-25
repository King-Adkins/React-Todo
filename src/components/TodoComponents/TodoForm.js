import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <div className = "inputContainer">
                <input
                onChange = {props.handleTodoChange}
                type = 'text'
                name = 'todo'
                value = {props.value}
                placeholder = '...todo'
                />
            </div>

            <div className = "buttonContainer">
                <button onClick = {props.handleAddTodo}>Add ToDo</button>
                <button onClick = {props.handleClearTodos}>Clear Completed</button>
            </div>
        </form>
    );
};

export default TodoForm;