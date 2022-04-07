import React, { useEffect, useState } from 'react'
import "./CommentForm.css"
import { getUsername } from "../../../../modules/getUsername"
import { parseJwt } from "../../../../modules/parseJwt"

function CommentForm(props) {
    const [currentComment, setCurrentComment] = useState("")
    const token = localStorage.getItem("token")

    const handleChanges = (event) => {
        let targetValue = event.target.value
        setCurrentComment(targetValue)
    }

    const sendComment = (event) => {
        event.preventDefault()
        if (currentComment) {
            let comment = {
                text: currentComment
            }
            let promiseResponse = props.wantedToReply.parent_comment > 0 ? fetch(`/api/v1/post/${props.currentPost}/comment/${props.wantedToReply.parent_comment}/`, {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-type": "application/json; charset=utf-8",
                    Accept: "application/json"
                },
                body: JSON.stringify(comment)
            }) : fetch(`/api/v1/post/${props.currentPost}/comment/`, {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + token,
                    'Content-Type': 'application/json;charset=utf-8',
                    Accept: "application/json"
                },
                body: JSON.stringify(comment)
            })
            promiseResponse
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    }
                    else {
                        console.log(response.statusText)
                    }
                })
                .then(async result => {
                    let userID = parseJwt(token).id
                    let username = await getUsername(userID, token)
                    result.username = username
                    result.date_of_comment = "Только что"
                    let newArray = props.comments.slice()
                    newArray.push(result)
                    props.setComments(newArray)
                    setCurrentComment("")
                    props.setWannaReply({})
                    closeReplyBlock()
                })
        }
    }
    
    const closeReplyBlock = () => {
        document.querySelector(".replyWindow").classList.remove("active")
        document.querySelector("#spaceForCloseIcon > button").classList.add("zIndexBack")
        props.setWannaReply({})
    }

    const showReplyBlock = () => {
        document.querySelector(".replyWindow").classList.add("active")
        if (document.querySelector(".zIndexBack") != null) {
            document.querySelector(".zIndexBack").classList.remove("zIndexBack")
        }
        // parent comment ID = props.wantedToReply.parent_comment
    }

    useEffect(() => {
        if (props.needToClear) {
            setCurrentComment("")
            closeReplyBlock()
        }
        if (props.wantedToReply && props.wantedToReply.parent_comment > 0) {
            showReplyBlock()
        }
    }, [props.needToClear, props.wantedToReply])

    return (
        <div>
            <div className="row gx-0 commentForm" >
                <div className="col-sm-12 col-xl-8 offset-xl-1">
                    <div className="row gx-0 mb-2 replyWindow">
                        <div className="col-10" id="spaceForCommentWhichWeRespond">
                            {`Ответить ${props.wantedToReply.user === undefined ? "" : props.wantedToReply.user}: ${props.wantedToReply.text === undefined ? "" : props.wantedToReply.text}`}
                        </div>
                        <div className="col-2" id="spaceForCloseIcon">
                            <button className="beautyIcons zIndexBack" onClick={closeReplyBlock}>
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
                            <button className="commentsButton beautyIcons" onClick={sendComment}>
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