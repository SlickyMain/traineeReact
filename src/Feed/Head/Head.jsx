import React from 'react'
import "./Head.css"

function Head() {
    const token = localStorage.getItem("token") || null

    const logoutUser = () => {
        localStorage.removeItem("token")
        window.location.assign("/")
    }

    let actionsForUser
    if (token) {
        actionsForUser =
            <div className="topAct">
                <span className='topLink' onClick={logoutUser}>Выйти</span>
                <span className='topLink'>Профиль</span>
            </div>
    }
    else {
        actionsForUser =
            <div className="topAct">
                <span className='topLink' onClick={logoutUser}>Войти</span>
            </div>
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-4 mt-3">
                    <h5>Мемасница</h5>
                </div>
                <div className="col-8 mt-3">
                    {actionsForUser}
                </div>
            </div>
        </div>
    )
}

export default Head