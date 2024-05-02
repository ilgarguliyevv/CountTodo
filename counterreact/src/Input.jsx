import React, { useReducer } from 'react'


const reducer = (state, action) => {
    switch (action.type) {
        case "SET-TODO":
            return {
                ...state,
                name: action.value,
            };
        case "ADD-TODO":
            const newTodo = {
                id: state.todos.length + 1,
                name: state.name,
            };
            return {
                ...state,

                todos: [...state.todos, newTodo],
                name: "",
            };
        case "DELETE-TODO":
            const updatedTodos = state.todos.filter(todo => todo.id !== action.id);
            return {
                ...state,
                todos: updatedTodos,
            };

        case "EDIT-TODO":
            const updatedTodo = state.todos.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, name: action.newName };
                }
                return todo;
            });
            return {
                ...state,
                todos: updatedTodo,
            };

    }
};

function Input() {
    const [state, dispatch] = useReducer(reducer, {
        todos: [],
        name: "",
    });

    const onchange = (e) => {
        dispatch({
            type: "SET-TODO",
            value: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD-TODO",
            name: state.name,
        });
    };

    return (
        <div className="container">
            <div className="addTask">
                <form onSubmit={handleSubmit}>
                    <input id='input' type="text" placeholder='Add your task' onChange={onchange} />
                    <button id='add' className='btn' type='submit'>Add Task</button>
                </form>
            </div>
            <div className="taskList">
                <ul>
                    {state.todos.map((todo) => {
                        return <li key={todo.id}>
                            <span>{todo.name}</span>
                            <div className="action">
                                <button onClick={() => dispatch({ type: "DELETE-TODO", id: todo.id })}>Delete Task</button>
                                <button onClick={() => {
                                    const newName = prompt("Enter the new task name:");
                                    if (newName) {
                                        dispatch({ type: "EDIT-TODO", id: todo.id, newName });
                                    }
                                }}>Edit Task</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Input;