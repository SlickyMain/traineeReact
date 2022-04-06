import React from 'react'
import "./Comments.css"
import Comment from './Comment/Comment'

function Comments(props) {

    if (props.commentsIsOpen) {
        document.getElementById("pops").classList.add("open")
        document.querySelector(".popupHeader").classList.add("open")
        document.querySelector(".commentForm").classList.add("open")
        document.body.classList.add("fixed")
        for (let i = 0; i < props.comments.length; i++) {
            if (props.comments[i].parent_comment) {
                
            }
        }
    }

    const closeComments = () => {
        props.setCommentsToOpen(false)
        document.getElementById("forPostAuthor").innerHTML = ""
        document.getElementById("forPostText").innerHTML = ""
        document.querySelector(".postComment").querySelector(".miniAvatar").innerHTML = ""
        document.getElementById("placeForComms").innerHTML = ""
        document.getElementById("pops").classList.remove("open")
        document.querySelector(".popupHeader").classList.remove("open")
        document.getElementById("leaveDefaultComment").value = ""
        document.getElementById("spaceForCommentWhichWeRespond").innerText = ""
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
                                        <div className="d-flex align-items-start">
                                            <p className="miniAvatar me-3">
                                            </p>
                                            <p>
                                                <strong className="me-1" id="forPostAuthor"></strong><span id="forPostText"></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div id="placeForComms">
                                    {
                                        props.comments.map(comment => 
                                            <Comment key={comment.comment_id} text={comment.text} user={comment.user} username={comment.username} date={comment.date_of_comment}
                                            parent={comment.parent_comment} />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row gx-0 commentForm">
                <div className="col-sm-12 col-xl-8 offset-xl-1">
                    <div className="row gx-0 mb-2 replyWindow">
                        <div className="col-10" id="spaceForCommentWhichWeRespond">
                        </div>
                        <div className="col-2" id="spaceForCloseIcon">
                            <button className="beautyIcons zIndexBack">
                                <img src="http://localhost:8000/static/assets/Close.svg" width="30px" height="30px" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="row gx-0">
                        <div className="col-10 zIndexFront pe-2">
                            <textarea name="defaultComment" className="noResize" placeholder="Введите текст комментария"
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