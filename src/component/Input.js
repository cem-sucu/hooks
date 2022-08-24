import React, { useRef, useState } from "react";

function Input() {
    const [name, setName] = useState(null);

    const usernameRef = useRef(null);
    console.log(usernameRef);

    const handleSubmit = () => {
        setName(usernameRef.current.value);
    };
    return (
        <div>
            <input ref={usernameRef} type="text" />
            <button onClick={handleSubmit}>Valider</button>
            <p>{name}</p>
        </div>
    );
}

export default Input;
