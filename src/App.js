import React from "react";
import "./App.css";
import Input from "./component/Input";
import Title from "./component/Title";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Title />
                <Input />
            </header>
        </div>
    );
}

export default App;
