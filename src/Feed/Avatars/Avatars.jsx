import React from 'react'
import "./Avatars.css"
import { getAvatarPath } from "../../modules/getAvatarPath"
import { setPlaceHolder } from "../../modules/setPlaceHolder"

function Avatars(props) {
    const avatarPath = getAvatarPath(props.userID)

    return (
        <div>
            <p className="miniAvatar">
                <img src={avatarPath} className="miniAvatar mb-1" onError={setPlaceHolder} alt="" />
            </p>
        </div>
    )
}

export default Avatars