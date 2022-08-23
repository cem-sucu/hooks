import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Profile from "./component/Profile";

function App() {
    const [count, setCount] = useState(1);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${count}`)
            .then((response) => {
                setProfile(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [count]);

    const overTen = () => {
        return count > 10;
    };
    return (
        <div className="App">
            <header className="App-header">
                {overTen() && (
                    <div style={{ color: "red" }}>
                        STOP !! il n'y a plus de data
                    </div>
                )}
                <button onClick={() => setCount(count + 1)}>
                    increment {count}
                </button>
                <Profile count={count} profile={profile} />
            </header>
        </div>
    );
}

export default App;
