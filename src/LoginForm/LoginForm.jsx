import React, { Component } from "react"
import Login from "./Login/Login"
import Register from "./Register/Register"

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.isLogin) {
            return <Login callColor={this.props.callbackColor} />
        }
        else {
            return <Register />
        }
    }
}

