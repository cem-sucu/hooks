import React from "react";
import "./App.css";
import ClickSayHello from "./component/ClickSayHello";
import MyContacts from "./component/MyContacts";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Mes Contacts</h1>
                <MyContacts />
                <ClickSayHello />
            </header>
        </div>
    );
}

export default App;
