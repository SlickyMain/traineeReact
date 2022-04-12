import React, { useEffect, useState } from 'react'
import "./Head.css"
import { getAvatarPath } from "../../modules/getAvatarPath"
import { parseJwt } from "../../modules/parseJwt"
import { getUsername } from "../../modules/getUsername"

function Head() {
    const [currentUser, setCurrentUser] = useState("")
    const token = localStorage.getItem("token") || null

    const logoutUser = () => {
        localStorage.removeItem("token")
        window.location.assign("/login")
    }

    const UserBlock = () => {
        useEffect(() => {
            const setUsername = async () => {
                if (token) {
                    const userID = parseJwt(token).id
                    const name = await getUsername(userID, token)
                    setCurrentUser(name)
                }
            }
            setUsername()
        }, [])

        if (token) {
            const userID = parseJwt(token).id
            const avatarPath = getAvatarPath(userID)
            return (
                <div>
                    <button className="dropdown-toggle cleanButton me-3" id="topDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <p className="miniAvatar">
                            <img src={avatarPath} className="miniAvatar mb-1" alt='av' />
                        </p>
                        <span className="postTag ms-2" id="currentAccount">{currentUser}</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="topDropdown" data-popper-placement="bottom-end">
                        <li><a className="dropdown-item clearLink" href="/set_avatar/">Установить аватар</a></li>
                        <li><button className="dropdown-item clearLink" onClick={logoutUser}>Выйти</button></li>
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div className="topAct">
                    <span className='topLink' onClick={logoutUser}>Войти</span>
                </div>
            )
        }
    }

    return (
        <div className="m-3">
            <div className="container">
                <div className='row align-items-center'>
                    <div className="col-4 mt-3">
                        <h5>Мемасница</h5>
                    </div>
                    <div className="col-8 mt-3 d-flex justify-content-end">
                        <UserBlock />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Head