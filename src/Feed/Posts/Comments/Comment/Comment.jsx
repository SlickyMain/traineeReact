import React from 'react'
import "./Comment.css"

function Comment(props) {

    let classForChild = ""
    let parsedDate = Date.now() - Date.parse(new Date(props.date))
    let minutes = parsedDate / 1000 / 60
    let hours = minutes / 60
    let days = hours / 24
    if (props.parent) {
        classForChild = "secondComment"
    }
    return (
        <div>
            <div className={`commElem ${classForChild}`}>
                <div className="row">
                    <div className="d-flex align-items-start">
                        <p className="miniAvatar me-3">
                        </p>
                        <p>
                            <strong className="me-1" id="forUsername">{props.username}</strong><span id="forTextComm">{props.text}</span>
                        </p>
                    </div>
                </div>
                <div className="row replyBlock usualGrey mb-2">
                    <span className="ps-0" id="forDate">{days > 1 ? Math.ceil(days) + "д" : hours > 1 ? Math.ceil(hours) + "ч" : Math.ceil(minutes) + "м"}</span>
                    <button className="replyButton usualGrey">Ответить</button>
                </div>
            </div>
        </div>
    )
}

export default Comment