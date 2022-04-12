import React, { useEffect, useState } from 'react'
import "./Profile.css"
import HeaderWithBurger from './HeaderWithBurger/HeaderWithBurger'
import ThreeColumnGrid from '../Search/ThreeColumnGrid/ThreeColumnGrid'
import BottomPanel from '../BottomPanel/BottomPanel'
import { parseJwt } from "../modules/parseJwt"
import { getUsername } from "../modules/getUsername"
import { getAvatarPath } from "../modules/getAvatarPath"

function Profile() {

    const [currentUsername, setCurrentUsername] = useState("User")
    const [buttonsState, setButtonsState] = useState(["selectedButtonOnProfile", "unselectedButtonOnProfile"])
    const [postsByUser, setPostsByUser] = useState([])

    const token = localStorage.getItem("token")
    const currentUserID = parseJwt(token).id
    const avatarPath = getAvatarPath(currentUserID)

    useEffect(() => {
        const setUsername = async () => {
            const name = await getUsername(currentUserID, token)
            setCurrentUsername(name)
        }

        fetch(`/api/v1/user/${currentUserID}/posts/`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                else {
                    throw new Error(res.status)
                }
            })
            .then(result => {
                setPostsByUser(result)
            })
        setUsername()
    }, [token, currentUserID])

    const changeGrid = (event) => {
        setButtonsState([buttonsState[0], buttonsState[1]] = [buttonsState[1], buttonsState[0]])
    }

    const Fork = () => {
        if (buttonsState[0].startsWith("s")) {
            return <ThreeColumnGrid posts={postsByUser} />
        }
        else {
            return (
                <div className="feedAttempt">
                    {
                        postsByUser.map(post => <img key={post.pic} className="postImageInProfile" src={post.pic} alt="Ошибка загрузки" />)
                    }
                </div>
            )
        }
    }

    return (
        <div className="container gx-0">
            <div className="col-sm-12 col-xl-8 offset-xl-2">
                <HeaderWithBurger pageTitle="Профиль" burgerPoints={["Настройки", "Статистика", "Выйти"]} />
                <div className="subscribeBlock mt-3">
                    <div className="gridProfileHeader m-2">
                        <div className="w-100 justify-content-center align-items-start">
                            <div className="d-flex justify-content-center align-items-end profileAvatarPlace">
                                <img src={avatarPath} className="profilePreviewField" id="avatarPreviewField" alt="" />
                            </div>
                        </div>
                        <div className="ms-2">
                            <div className="row gx-0">
                                <strong>
                                    <span className='ms-2'>{currentUsername}</span>
                                </strong>
                            </div>
                            <div className="row gx-0 ms-1 mt-2">
                                <button className="subscribes me-2">
                                    Подписок: 50
                                </button>
                                <button className="subscribes">
                                    Подписчиков: 100
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 justify-content-center">
                    <div className="col-6 d-flex justify-content-center p-1">
                        <button id="toGrid" className={`beautyIcons m-2 ${buttonsState[0]}`} onClick={changeGrid}>
                            <img src="/static/assets/GridOn.svg" width="30px" height="30px" className="my-1 mx-2" alt="" />
                        </button>
                        {/* <button id="toFeed" className={`beautyIcons m-2 ${buttonsState[1]}`} onClick={changeGrid}>
                        <img src="/static/assets/GridOff.svg" width="30px" height="30px" className="my-1 mx-2" alt="" />
                    </button> */}
                    </div>
                </div>
                <Fork />
            </div>
            <BottomPanel />
        </div>
    )
}

export default Profile