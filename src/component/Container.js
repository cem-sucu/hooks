import React, { useState } from "react";
import ClassDisplayKey from "./ClassDisplayKey";
import FunctionDisplay from "./FunctionDisplay";

function Container() {
    const [show, setShow] = useState(true);

    const btnDisplay = show ? " cacher " : " afficher ";

    return (
        <div>
            <button onClick={() => setShow(!show)}>{btnDisplay}</button>
            {show && <ClassDisplayKey />}
            {show && <FunctionDisplay />}
        </div>
    );
}

export default Container;
