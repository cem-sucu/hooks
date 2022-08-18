import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodoForms from "./AddTodoForms";

const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 1, todo: "acheter du lait" },
        { id: 2, todo: "acheter du pain" },
        { id: 3, todo: "acheter du chocolat" },
    ]);

    const [warning, setWarning] = useState(false);

    const myTodos = todos.map((todo) => {
        return <li key={todo.id}>{todo.todo}</li>;
    });

    const addNewTodo = (newTodo) => {
        if (newTodo !== "") {
            warning && setWarning(false);
            setTodos([
                ...todos,
                {
                    id: uuidv4(),
                    todo: newTodo,
                },
            ]);
        } else {
            setWarning(true);
        }
    };

    const warningmsg = warning && (
        <div style={{ color: "white", backgroundColor: "red", fontSize: 30 }}>
            Veuillez indiquer un élément !
        </div>
    );
    return (
        <div>
            {warningmsg}
            <h1>{todos.length} To-Do</h1>
            <ul>{myTodos}</ul>
            <AddTodoForms addNewTodo={addNewTodo} />
        </div>
    );
};

export default Todo;
