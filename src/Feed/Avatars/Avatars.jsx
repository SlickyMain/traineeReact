import React from 'react'
import "./Avatars.css"
import {getAvatarPath} from "../../modules/getAvatarPath"

function Avatars(props) {
    const avatarPath = getAvatarPath(props.userID)

    return (
        <div>
            <p className="miniAvatar">
                <img src={avatarPath} className="miniAvatar" alt="" />
            </p>
        </div>
    )
}

export default Avatars