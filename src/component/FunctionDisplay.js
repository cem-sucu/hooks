import React, { useEffect, useState } from "react";

function FunctionDisplay() {
    const [keyCode, setKeyCode] = useState("");

    const handleKeyCode = (e) => {
        setKeyCode(e.code);
    };

    useEffect(() => {
        document.addEventListener("keyup", handleKeyCode);
    }, []);
    return (
        <div>
            <hr />
            <h1>{keyCode}</h1>
            <hr />
        </div>
    );
}

export default FunctionDisplay;
