import React, { Component } from "react";

class ClassCount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: "",
        };
    }
    componentDidMount() {
        console.log("je suis dans CDM");
        document.title = `Vous avez cliqué ${this.state.count}`;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
            console.log("je suis la");
            document.title = `Vous avez cliqué ${this.state.count}`;
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    Apuyer ici
                </button>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => {
                        this.setState({
                            name: e.target.value,
                        });
                    }}
                />
            </div>
        );
    }
}

export default ClassCount;
