import React, { useState } from "react"
import EnterBySSO from "../EnterBySSO/EnterBySSO"
import "./Login.css"

export default function Login(props) {
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    const handleChanges = (event) => {
        let targetField = event.target.name
        let targetValue = event.target.value
        if (targetField === "login") {
            setEmailValue(targetValue)
        }
        else if (targetField === "password") {
            setPasswordValue(targetValue)
        }
    }

    const endOfWarning = () => {
        setTimeout(() => {
            let field = document.getElementById("errorField")
            field.classList.add("hide")
        }, 5000)
    }

    const tryAuth = (event) => {
        event.preventDefault()
        const errorField = document.getElementById("errorField")
        if (emailValue && passwordValue) {
            let user = {
                email: emailValue,
                password: passwordValue
            }
            fetch("/api/v1/login/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user),
            })
                .then(async response => {
                    if (response.ok) {
                        const result = await response.json()
                        localStorage.setItem("token", result.token)
                        window.location.assign("/feed")
                    }
                    else {
                        if (response.status < 500) {
                            const error = await response.json()
                            for (let key in error) {
                                throw new Error(...error[key])
                            }
                        }
                        else {
                            throw new Error("Что-то пошло не так, пожалуйста, повторите попытку позже")
                        }
                    }
                })
                .catch((err) => {
                    errorField.innerText = `${err.message}`
                    errorField.classList.remove("hide")
                    errorField.classList.add("show")
                    endOfWarning()
                })
        }
        else {
            errorField.innerText = "Пожалуйста, заполните оба поля и повторите попытку"
            errorField.classList.remove("hide")
            errorField.classList.add("show")
            endOfWarning()
        }
    }

    return (
        <div>
            <form autoComplete="off" action="#" onInvalid={endOfWarning} className="mt-5">
                <p className="ms-4 registerText pb-3">
                    Войти
                </p>
                <p id="errorField" className="hide"></p>
                <div className="ms-4 me-4 mb-4">
                    <label htmlFor="Login" className="form-label">Имя пользователя</label>
                    <input type="text" className="form-control" name="login" onChange={handleChanges} placeholder="Username" />
                </div>
                <div className="ms-4 me-4 mb-4">
                    <label htmlFor="Email" className="form-label">Пароль</label>
                    <input type="password" className="form-control" name="password" onChange={handleChanges} placeholder="Password" />
                </div>
                <div className="forButton d-flex justify-content-center mb-3">
                    <button type="submit" className="registerButton">
                        <span className="buttonText p-2" onClick={tryAuth}>
                            Войти
                        </span>
                    </button>
                </div>
                <EnterBySSO />
            </form>
        </div>
    )
}