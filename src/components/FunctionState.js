import React, { useState } from "react";

const FunctionState = () => {
    const [count, setCounter] = useState(7);

    const addOne = () => {
        setCounter(count + 2);
    };
    return (
        <div>
            <p>incremente : {count} </p>
            <button onClick={addOne}>incrémenté + 2</button>
        </div>
    );
};

export default FunctionState;
