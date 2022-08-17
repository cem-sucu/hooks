import "./App.css";
import ClassStates from "./components/ClassStates";
import FunctionState from "./components/FunctionState";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>hello</h1>
                <ClassStates />
                <hr />
                <FunctionState />
            </header>
        </div>
    );
}

export default App;
