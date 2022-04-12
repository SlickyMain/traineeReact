import React, { useEffect, useState } from 'react'
import "./SetAvatar.css"
import HeaderWithBackButton from "./HeaderWithBackButton/HeaderWithBackButton"
import { getAvatarPath } from "../modules/getAvatarPath"
import { parseJwt } from "../modules/parseJwt"

function SetAvatar() {
    const [infoText, setInfoText] = useState("")
    const token = localStorage.getItem("token") || null
    const userID = parseJwt(token).id
    const avatarPath = getAvatarPath(userID)

    const uploadAvatar = (e) => {
        e.preventDefault()
        const imageLoader = document.getElementById("uploadMeme")
        if (imageLoader.files.length) {
            if (imageLoader.files[0].type.includes("image")) {
                const imageInFormData = new FormData()
                imageInFormData.append("file", imageLoader.files[0])
                fetch("/api/v1/avatar_add/", {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + token
                    },
                    body: imageInFormData
                })
                    .then(async (response) => {
                        if (response.ok) {
                            setInfoText("Аватарка была успешно установлена!")
                            setTimeout(() => {
                                setInfoText("")
                            }, 5000)
                        }
                        else {
                            throw new Error(response.status)
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            else {
                setInfoText("Вы можете загрузить ТОЛЬКО изображение")
                setTimeout(() => {
                    setInfoText("")
                }, 5000)
            }
        }
        else {
            setInfoText("Пожалуйста, загрузите изображение и повторите попытку")
            setTimeout(() => {
                setInfoText("")
            }, 5000)
        }
    }

    return (
        <div className='container mt-4'>
            <div className='ms-2 me-2'>
                <HeaderWithBackButton linkTo="/" text="Установка аватарки" />
            </div>
            <div className="row">
                <div className="col d-flex flex-column align-items-center">
                    <div className="downloadArea">
                        <div className="d-flex justify-content-center avatarPlace needRelative mt-4">
                            <label htmlFor="uploadMeme" id="visibleUploaderMeme">
                                <img src={avatarPath} className="previewField" id="avatarPreviewField" alt="У вас нет аватара" />
                                <p className="usualGrey placeholderForMeme">Кликните, чтобы загрузить картинку</p>
                            </label>
                            <input type="file" name="uploadAvatar" id="uploadMeme" onChange={uploadAvatar} />
                        </div>
                    </div>
                    <div className={`wrapForMessages mt-3 ${infoText.length ? "d-flex" : ""}`}>
                        <p id="forMessages">{infoText}</p>
                    </div>
                    <button className='saveAvButton mt-3' onClick={uploadAvatar}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SetAvatar