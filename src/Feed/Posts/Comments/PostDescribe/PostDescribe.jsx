import React from 'react'
import "./PostDescribe.css"

function PostDescribe(props) {
    return (
        <div className='d-flex align-items-start'>
            <p className="miniAvatar me-3">
            </p>
            <p>
                <strong className="me-1" id="forPostAuthor">{props.postDescribe.author_name}</strong><span id="forPostText">{props.postDescribe.text}</span>
            </p>
        </div>
    )
}

export default PostDescribe