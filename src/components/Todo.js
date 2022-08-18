import React, { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 1, todo: "acheter du lait" },
        { id: 2, todo: "acheter du pain" },
        { id: 3, todo: "acheter du chocolat" },
    ]);

    const myTodos = todos.map((todo) => {
        return <li key={todo.id}>{todo.todo}</li>;
    });
    return (
        <div>
            <h1>{todos.length} To-Do</h1>
            <ul>{myTodos}</ul>
        </div>
    );
};

export default Todo;
