import React from "react"
import EnterBySSO from "../EnterBySSO/EnterBySSO"

export default function Login(props) {
    return (
        <form action="#" className="mt-5">
            <p className="ms-4 registerText pb-3">
                Войти
            </p>
            <div className="ms-4 me-4 mb-4">
                <label htmlFor="Login" className="form-label">Имя пользователя</label>
                <input type="text" className="form-control" id="Login" placeholder="Username" />
            </div>
            <div className="ms-4 me-4 mb-4">
                <label htmlFor="Email" className="form-label">Пароль</label>
                <input type="password" className="form-control" id="Email" placeholder="Password" />
            </div>
            <div className="forButton d-flex justify-content-center mb-3">
                <button type="submit" className="registerButton">
                    <a href="#" className="buttonText p-2">
                        Войти
                    </a>
                </button>
            </div>
            <EnterBySSO />
        </form>
    )
}