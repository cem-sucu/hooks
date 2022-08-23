import React from "react";
import "./App.css";
import Count from "./component/Count";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Count />
                </header>
            </div>
        );
    }
}

export default App;
