import React from "react"
import { Component } from "react"
import Login from "./Login/Login"
import Register from "./Register/Register"

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        if (this.props.isLogin) {
            return <Login />
        }
        else {
            return <Register />
        }
    }
}

