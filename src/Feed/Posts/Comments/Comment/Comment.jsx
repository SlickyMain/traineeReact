import React from 'react'
import "./Comment.css"
import Avatars from '../../../Avatars/Avatars'

function Comment(props) {

    let minutes
    let hours
    let days
    if (props.date !== "Только что") {
        let parsedDate = Date.now() - Date.parse(new Date(props.date))
        minutes = parsedDate / 1000 / 60
        hours = minutes / 60
        days = hours / 24
    }


    const ReplyOnCommentComponent = () => {
        if (props.parent) {
            return null
        }
        else {
            return <button className="replyButton usualGrey" onClick={replyOnComment}>Ответить</button>
        }
    }

    const replyOnComment = () => {
        props.setWannaReply({
            parent_comment: props.parentID,
            user: props.username,
            text: props.text
        })
    }

    const Childs = () => {
        if (props.childrens && props.childrens.length > 0) {
            return props.childrens.map(children => {
                return <Comment key={children.comment_id} parent={children.parent_comment} text={children.text} user={children.user} username={children.username}
                    date={children.date_of_comment} />
            })
        }
        else {
            return null
        }
    }
    return (
        <div>
            <div className={`commElem ${props.parent ? "secondComment" : ""}`}>
                <div className="row">
                    <div className="d-flex align-items-start">
                        <Avatars userID={props.user} />
                        <p>
                            <strong className="me-1 ms-3" id="forUsername">{props.username}:</strong><span id="forTextComm">{props.text}</span>
                        </p>
                    </div>
                </div>
                <div className="row replyBlock usualGrey mb-2">
                    <span className="ps-0" id="forDate">{props.date === "Только что" ? props.date : days > 1 ? Math.ceil(days) + "д" : hours > 1 ?
                        Math.ceil(hours) + "ч" : Math.ceil(minutes) + "м"}</span>
                    <ReplyOnCommentComponent />
                </div>
            </div>
            <Childs />
        </div>
    )
}

export default Comment