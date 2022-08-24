import React, { useRef } from "react";

function Title() {
    const h1Renders = useRef(0);
    console.log(h1Renders);

    setInterval(() => {
        h1Renders.current++;
    }, 1000);
    console.log(h1Renders.current);

    return <div>{h1Renders.current}</div>;
}

export default Title;
