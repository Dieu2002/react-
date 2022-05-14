import React, { Component } from "react";
export default class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Y Dieu",
            age: "20",
        }
    }
    render() {
        return (
            <div>
                <h1>My is {this.state.name}</h1>
                <p>
                    Age {this.state.age}
                </p>
            </div>
        );
    }
}
