import React from 'react'
import "./Comment.css"

function Comment(props) {

    let classForChild = ""
    let minutes
    let hours
    let days
    if (props.date) {
        let parsedDate = Date.now() - Date.parse(new Date(props.date))
        minutes = parsedDate / 1000 / 60
        hours = minutes / 60
        days = hours / 24
    }
    if (props.parent) {
        classForChild = "secondComment"
    }

    const replyOnComment = () => {
        props.setWannaReply({
            parent_comment: props.parentID,
            user: props.username,
            text: props.text
        })
    }

    const Childs = () => {
        if (props.comments && props.comments.length > 0) {
            return props.comments.map(children => {
                return children.parent_comment === props.key ?
                    <Comment key={children.comment_id} parent={children.parent_comment} text={children.text}
                             user={children.user} username={children.username} date={children.date_of_comment}
                    />
                    : ""
            })
        }
        else {
            return null
        }
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
                    <button className="replyButton usualGrey" onClick={replyOnComment}>Ответить</button>
                </div>
            </div>
            <Childs />
        </div>
    )
}

export default Comment