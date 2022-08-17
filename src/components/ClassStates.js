import React, { Component } from "react";

class ClassStates extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };
    }

    addOne = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    render() {
        return (
            <div>
                <p>state counter : {this.state.counter}</p>
                <button onClick={this.addOne}>incrémente de 1+</button>
            </div>
        );
    }
}

export default ClassStates;
