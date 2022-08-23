import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decremente":
            return state - 1;
        default:
            return state;
    }
};

function Count() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch("increment")}>+</button>
            <button onClick={() => dispatch("decremente")}>-</button>
        </div>
    );
}

export default Count;
