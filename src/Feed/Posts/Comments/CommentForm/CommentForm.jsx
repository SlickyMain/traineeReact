import React, { useEffect, useState } from 'react'
import "./CommentForm.css"

function CommentForm(props) {
    const [currentComment, setCurrentComment] = useState("")

    const handleChanges = (event) => {
        let targetValue = event.target.value
        setCurrentComment(targetValue)
    }

    const sendComment = (event) => {
        event.preventDefault()
        if (currentComment) {

        }
    }

    let replyWindowActive = document.querySelector(".replyWindow")
    const showReplyBlock = () => {
        replyWindowActive.classList.add("active")
        // parent comment ID = props.wantedToReply.parent_comment
    }

    useEffect(() => {
        if (props.needToClear) {
            setCurrentComment("")
        }
        if (props.wantedToReply && props.wantedToReply.parent_comment > 0) {
            showReplyBlock()
        }
    }, [props.needToClear, props.wantedToReply])

    return (
        <div>
            <div className={`row gx-0 commentForm ${props.openClass}`} >
                <div className="col-sm-12 col-xl-8 offset-xl-1">
                    <div className="row gx-0 mb-2 replyWindow">
                        <div className="col-10" id="spaceForCommentWhichWeRespond">
                            {`Ответить ${props.wantedToReply.user}: ${props.wantedToReply.text}`}
                        </div>
                        <div className="col-2" id="spaceForCloseIcon">
                            <button className="beautyIcons zIndexBack">
                                <img src="http://localhost:8000/static/assets/Close.svg" width="30px" height="30px" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="row gx-0">
                        <div className="col-10 zIndexFront pe-2">
                            <textarea name="defaultComment" value={currentComment} onChange={handleChanges} className="noResize" placeholder="Введите текст комментария"
                                id="leaveDefaultComment" rows="3"></textarea>
                        </div>
                        <div className="col-2 d-flex align-items-center justify-content-center pb-2 pe-1 zIndexFront">
                            <button className="commentsButton beautyIcons">
                                <img src="http://localhost:8000/static/assets/Send.svg" width="30px" height="30px" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentForm