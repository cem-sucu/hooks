import React, { useState } from "react";

const AddTodoForms = ({ addNewTodo }) => {
    const [addTodo, setAddTodo] = useState("");

    const handleTodo = (e) => {
        e.preventDefault();
        addNewTodo(addTodo);
        setAddTodo("");
    };

    return (
        <form action="" onSubmit={handleTodo}>
            <label htmlFor="">Ajouter Todo </label>
            <input
                type="text"
                value={addTodo}
                onChange={(e) => setAddTodo(e.target.value)}
            />
            <input type="submit" />
        </form>
    );
};

export default AddTodoForms;
