import React, { Component } from "react";

export default class Form extends Component {
    constructor(props) {
        super(props);
        //Khởi tạo state chứa giá trị của input
        this.state = {
            username: "",
            age: null,

        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val })
    }
    render() {
        return (

            <form>
                <h1>Hello{this.state.username}{this.state.age}</h1>
                <p>
                    Enter your name:
                </p>
                <input type='text'
                    name='username' onChange={this.myChangeHandler}></input>
                <p>Enter your age: </p>
                <input type='text'
                    name='age' onChange={this.myChangeHandler}></input>
            </form>
        );
    }
}