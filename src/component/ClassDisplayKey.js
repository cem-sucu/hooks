import React, { Component } from "react";

class ClassDisplayKey extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyCode: null,
        };
    }

    handleKeyDone = (e) => {
        this.setState({
            keyCode: e.code,
        });
    };

    componentDidMount() {
        document.addEventListener("keyup", this.handleKeyDone);
    }

    render() {
        const { keyCode } = this.state;
        return (
            <div>
                <hr />
                <h1>{keyCode}</h1>
                <hr />
            </div>
        );
    }
}

export default ClassDisplayKey;
