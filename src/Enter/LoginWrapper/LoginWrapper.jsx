import './LoginWrapper.css';
import { useState } from "react"
import LoginForm from "../../LoginForm/LoginForm"


export default function LoginWrapper(props) {

    const [isLogin, setIsLogin] = useState(true)
    const [buttonText, setButtonText] = useState("Зарегистрироваться")

    const redirect = () => {
        setIsLogin(!isLogin)
        setButtonText(isLogin ? "Войти" : "Зарегистрироваться")
    }

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
                                <LoginForm isLogin={isLogin} />
                            </div>
                        </div>
                        <div className="altLinks text-center mt-4">
                            <div className="row">
                                <p className="altText">
                                    {isLogin ? "Нет аккаунта?" : "Есть аккаунт?"}
                                </p>
                            </div>
                            <div className="row mt-1">
                                <p className="altText d-flex justify-content-center">
                                    <button className='redirectButton' onClick={redirect}>{buttonText}</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}