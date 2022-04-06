import React, { useEffect } from 'react'
import "./MagicLink.css"
import { parseJwt } from "../../modules/parseJwt"
import { useLocation, useNavigate } from 'react-router-dom'

function MagicLink(props) {
    const location = useLocation()
    const navigation = useNavigate()
    useEffect(() => {
        const arrayURL = location.pathname.split("/")
        const magicLinkToken = arrayURL[arrayURL.length - 1]
        const decodedTokenCreated = parseJwt(magicLinkToken).created
        if (Date.now() / 1000 - decodedTokenCreated < 300) {
            localStorage.setItem("token", magicLinkToken)
            if (props.isLogin) {
                window.location.assign("/")
            }
            else {
                window.location.assign("/welcome")
            }
        }
        else {
            navigation("/login", {state: "Токен устарел, повторите вход, пожалуйста"})
        }
    }, [location.pathname, props.isLogin, navigation])

    return (
        <div className='maximum'>
            <div className="d-flex w-100 h-100 pb-5 justify-content-center align-items-center">
                <div className="loader">
                </div>
            </div>
        </div>
    )
}

export default MagicLink