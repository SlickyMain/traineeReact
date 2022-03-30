import './Enter.css';
import Feed from '../Feed/Feed';
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
        buttonText: "Зарегистрироваться",
        classBody: "yellow"
    }
    render() {
        if (this.state.classBody == "yellow") {
            return (
                <div className={this.state.classBody}>
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
                                        <LoginForm callbackColor={this.changeColor} isLogin={this.state.isLogin} />
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
                                            <button href="#" onClick={this.redirect}>{this.state.buttonText}</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<Feed />)
        }
    }
    redirect = () => {
        this.setState({
            isLogin: !this.state.isLogin,
            buttonText: this.state.isLogin ? "Войти" : "Зарегистрироваться"
        })
    }
    changeColor = () => {
        this.setState({
            classBody: "white"
        })
    }
}

