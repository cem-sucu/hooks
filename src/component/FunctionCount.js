import React, { useState, useEffect } from "react";

function FunctionCount() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Vous avez cliqué ${count}`;
    });

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>cliquez</button>
        </div>
    );
}

export default FunctionCount;
