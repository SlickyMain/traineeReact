import './Enter.css';
import React from 'react';
import { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';

export default class Enter extends Component {
    constructor(props) {
        super(props)
        this.isLogin = true
    }
    
    state = {
        isLogin: true,
        buttonText: "Зарегистрироваться"
    }
    render() {
        return (
            <div className="yellow">
                <div className="mainWrap">
                    <div className="container">
                        <div className="row headerDiv">
                            <header className="col-sm-12 d-flex justify-content-center mb-3">
                                <h3 className="headerTitle">Мемасница</h3>
                            </header>
                        </div>
                        <div className="row formDiv">
                            <div className="authFormMobile d-flex justify-content-center">
                                <div className="col-sm-12 substrate">
                                    <LoginForm isLogin={this.state.isLogin} />
                                </div>
                            </div>
                            <div className="altLinks text-center mt-4">
                                <div className="row">
                                    <p className="altText">
                                        { this.state.isLogin? "Нет аккаунта?": "Есть аккаунт?" }
                                    </p>
                                </div>
                                <div className="row mt-1">
                                    <p className="altText">
                                        <a href="#" onClick={this.redirect}>{this.state.buttonText}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    redirect = () => {
        this.setState({
            isLogin: !this.state.isLogin,
            buttonText: this.state.isLogin ? "Войти" : "Зарегистрироваться"
        })
    }
}

