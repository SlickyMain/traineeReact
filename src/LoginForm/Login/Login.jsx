import React, { useState } from "react"
import EnterBySSO from "../EnterBySSO/EnterBySSO"
import "./Login.css"

export default function Login(props) {
    const [emailValue, setEmailValue] = useState("")

    const endOfWarning = () => {
        setTimeout(() => {
            let field = document.getElementById("errorField")
            field.classList.add("hide")
        }, 5000)
    }
    
    let classForError

    if (props.message) {
        classForError = "show"
    }
    else {
        classForError = "hide"
    }

    const handleChanges = (event) => {
        let targetValue = event.target.value
        setEmailValue(targetValue)
    }

    

    const tryAuth = (event) => {
        event.preventDefault()
        const errorField = document.getElementById("errorField")
        const loginButton = document.querySelector(".buttonText")
        if (emailValue) {
            if (!/\w+[@]\w+[.]\w{2,3}$/gi.exec(emailValue)) {
                errorField.innerText = "Пожалуйста, введите корректный адрес электронной почты"
                errorField.classList.remove("hide")
                errorField.classList.add("show")
                endOfWarning()
            }
            else {
                loginButton.innerText = ""
                loginButton.classList.add("buttonLoader")
                let user = {
                    email: emailValue,
                }
                fetch("/api/v1/magic_link/", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(user),
                })
                    .then(async response => {
                        if (response.ok) {
                            errorField.innerText = "Ссылка для авторизации отправлена Вам на почту"
                            errorField.classList.remove("hide")
                            errorField.classList.add("show")
                            loginButton.classList.remove("buttonLoader")
                            loginButton.innerHTML = `
                            <p class="buttonText p-2">
                            Войти
                            </p>
                            `
                        }
                        else {
                            document.querySelector(".registerButton").disabled = false
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

        }
        else {
            errorField.innerText = "Пожалуйста, заполните поле и повторите попытку"
            errorField.classList.remove("hide")
            errorField.classList.add("show")
            endOfWarning()
        }
    }

    return (
        <div>
            <form autoComplete="off" action="#" onInvalid={endOfWarning} className="mt-5">
                <p className="ms-4 registerText pb-2">
                    Войти/Зарегистрироваться
                </p>
                <p id="errorField" className={`${classForError} ms-2`}>{props.message}</p>
                <div className="ms-4 me-4 mb-4">
                    <label htmlFor="Login" className="form-label">Введите Ваш Email</label>
                    <input type="text" className="form-control" name="login" onChange={handleChanges} placeholder="Email" />
                </div>
                
                <div className="forButton d-flex justify-content-center mb-3">
                    <button type="submit" onClick={tryAuth} className="registerButton">
                        <span className="buttonText p-2">
                            Войти
                        </span>
                    </button>
                </div>
                <EnterBySSO />
            </form>
        </div>
    )
}