import React, { useState } from 'react'
import "./Post.css"
import Avatars from '../../Avatars/Avatars'
import MakeLinkToTrendIfTag from './MakeLinkToTrendIfTag'

const Post = (props) => {
    const [likes, setLikes] = useState(props.values.likes)
    const [hasLike, setHasLike] = useState(props.values.current_user_rate)
    const token = localStorage.getItem("token") || null

    let likeButtonSource = hasLike ? "/static/assets/heart_f.svg" : "/static/assets/heart_e.svg"

    const sendLike = () => {
        if (token) {
            if (hasLike) {
                setHasLike(0)
                setLikes(likes - 1)
                fetch(`/api/v1/post/${props.values.pk}/like/up/`, {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                })
            }
            else {
                setHasLike(1)
                setLikes(likes + 1)
                fetch(`/api/v1/post/${props.values.pk}/like/up/`, {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                })
            }
        }
        else {
            props.setModalToOpen(true)
        }
    }

    async function downloadComments() {
        return fetch(`/api/v1/post/${props.values.pk}/comments/`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        })
            .then(async response => {
                if (response.ok) {
                    return await response.json()
                }
                else {
                    throw new Error(response.status)
                }
            })
    }

    const openComments = async () => {
        if (token) {
            props.setCommentsToOpen(true)
            props.setPostDescribe({
                pk: props.values.pk,
                author: props.values.author,
                author_name: props.values.author_name,
                text: props.values.text
            })
            let comments = await downloadComments()
            props.setComments(comments)
        }
        else {
            props.setModalToOpen(true)
        }
    }

    return (
        <div className="postInstance">
            <div className="row mx-1">
                <div className="col-10 d-flex align-items-center">
                    <Avatars userID={props.values.author} />
                    <span className="postTag ms-2" id="postAuthor">{props.values.author_name}</span>
                </div>
                <div className="dropdown drophidden col-2 d-flex justify-content-end pe-4">
                    <button className="btn dropdown-toggle" type="button" id="actionsMenu"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <strong>...</strong>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="actionsMenu">
                        <button className="dropdown-item clearButton" id="editPost">??????????????????????????</button>
                        <button className="dropdown-item clearButton" >??????-???????????? ??????</button>
                        <button className="dropdown-item clearButton" >?? ??????-???????????? ??????</button>
                    </div>
                </div>
            </div>
            <div className="row gx-0 px-0 mt-3 justify-content-center">
                <div className="memeField" id="memeField">
                    <img src={props.values.pic} className='stableImage' alt="" />
                </div>
            </div>
            <div className="row mx-1 actions mt-2">
                <div className="col-10 height44px">
                    <div className="like Act">
                        <button className="cleanButton" onClick={sendLike}>
                            <img src={likeButtonSource} width="26px" height="24px" alt="" />
                        </button>
                    </div>
                    <div className="altText Act">
                        <span className="usualGrey likesCount">{likes}</span>
                    </div>
                    <div className="Act">
                        <button className="leaveComment cleanButton" onClick={openComments}>
                            <img src="/static/assets/ChatGrey.svg" width="26px" height="24px" alt="??????????????" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="row mx-1">
                <p id="postText">
                    <MakeLinkToTrendIfTag text={props.values.text} />
                </p>
            </div>
            <div className="row mx-1 mb-5">
                <button className="usualGrey popupLink commentButtonInPost" onClick={openComments}>?????? ?????????????????????? ({props.values.comments})</button>
            </div>
        </div>
    )
}

export default Post