import React from 'react'
import "./PostDescribe.css"
import Avatars from '../../../Avatars/Avatars'

function PostDescribe(props) {
    return (
        <div className='d-flex align-items-start'>
            <Avatars userID={props.postDescribe.author} />
            <p>
                <strong className="me-1 ms-3" id="forPostAuthor">{props.postDescribe.author_name}</strong><span id="forPostText">{props.postDescribe.text}</span>
            </p>
        </div>
    )
}

export default PostDescribe