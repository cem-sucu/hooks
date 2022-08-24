import React, { useState, useEffect, useLayoutEffect } from "react";
import Content from "./Content";

function Layout() {
    const [height, setHeight] = useState(100);

    const boxStyle = {
        width: "400px",
        height: `${height}px`,
        margin: "0 auto",
    };

    return (
        <div style={boxStyle}>
            {`height: ${height}px`}
            <Content />
        </div>
    );
}

export default Layout;
