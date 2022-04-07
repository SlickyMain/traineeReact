import React, { useState } from 'react'
import "./Comments.css"
import Comment from './Comment/Comment'
import CommentForm from './CommentForm/CommentForm'
import PostDescribe from './PostDescribe/PostDescribe'

function Comments(props) {
    const [clearField, setClearField] = useState(false)
    const [wannaReply, setWannaReply] = useState({})

    let coolComments = []

    if (props.commentsIsOpen) {
        document.getElementById("pops").classList.add("open")
        document.querySelector(".popupHeader").classList.add("open")
        document.querySelector(".commentForm").classList.add("open")
        document.body.classList.add("fixed")
        for (let i = 0; i < props.comments.length; i++) {
            if (props.comments[i].parent_comment === null) {
                let objComments = { parent: props.comments[i], childrens: [] }
                coolComments.push(objComments)
            }
            else {
                for (let cool of coolComments) {
                    if (cool.parent.comment_id === props.comments[i].parent_comment) {
                        cool.childrens.push(props.comments[i])
                    }
                }
            }
        }
    }

    const closeComments = () => {
        props.setCommentsToOpen(false)
        setClearField(true)
        setWannaReply({})
        document.getElementById("pops").classList.remove("open")
        document.querySelector(".popupHeader").classList.remove("open")
        document.querySelector(".commentForm").classList.remove("open") // Элемент вместе с блоком ответа и кнопкой
        document.body.classList.remove("fixed")
    }

    return (
        <div>
            <div id="pops" className="popup mb-5">
                <div className="popupBody">
                    <div className="popupContent">
                        <div className="row gx-0">
                            <div className="col-sm-12 col-xl-6 offset-xl-3">
                                <div className="postComment border-bottom">
                                    <div className="row">
                                        <PostDescribe postDescribe={props.postDescribe} />
                                    </div>
                                </div>
                                <div id="placeForComms">
                                    {
                                        coolComments.map(comment =>
                                            <Comment key={comment.parent.comment_id} parentID={comment.parent.comment_id} text={comment.parent.text} user={comment.parent.user} username={comment.parent.username}
                                                date={comment.parent.date_of_comment} childrens={comment.childrens} setWannaReply={setWannaReply}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CommentForm needToClear={clearField} wantedToReply={wannaReply} currentPost={props.postDescribe.pk} />
            <div className="row gx-0 popupHeader border-bottom">
                <div className="col-sm-12 col-xl-8">
                    <div className="d-flex align-items-end mb-2">
                        <button onClick={closeComments} href="##" style={{ textDecoration: "none" }} className="beautyIcons pb-1 closePop">
                            <img src="http://localhost:8000/static/assets/VectorLEFT.png" alt="Назад" />
                        </button>
                        <span className="postTag marginAutoHorizontal">Комментарии</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments