import React, { useState } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";

function ClickSayHello() {
    const [text, setText] = useState("");

    //notre customs hooks créé
    useUpdateDocTitle(text);
    return <button onClick={() => setText("hello world")}>cliquez !</button>;
}

export default ClickSayHello;
