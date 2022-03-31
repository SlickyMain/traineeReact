import React, { useEffect, useState } from 'react'
import Post from './Post/Post'
import "./Posts.css"

const Posts = (props) => {

    const [posts, setPosts] = useState([])
    const token = localStorage.getItem("token") || null

    useEffect(() => {
        fetch(`/api/v1/post_list/`, {
            headers: {
                Authorization: token ? "Bearer " +  token : null,
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(result => {
                setPosts(result)
            })
    }, [])

    return (
        <div className='container gx-0'>
            <div className="row gx-0">
                <div className="col">
                    {
                        posts.map(post => 
                        <Post key={post.pk.toString()} values={{
                            pk: post.pk,
                            author_name: post.author_name,
                            pic: post.pic,
                            likes: post.likes,
                            text: post.text,
                            comments: post.comments,
                            current_user_rate: post.current_user_rate
                        }} />)
                    }
                </div>
            </div>
            <div id="pops" className="popup mb-5">
                <div className="popupBody">
                    <div className="popupContent">
                        <div className="row gx-0">
                            <div className="col-sm-12 col-xl-8 offset-xl-2">
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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row gx-0 commentForm">
                <div className="col-sm-12 col-xl-10 offset-xl-1">
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
                        <div className="col-10 zIndexFront">
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
                        <a href="##" style={{textDecoration: "none"}} className="pb-2 ps-2 closePop">
                            <img src="http://localhost:8000/static/assets/VectorLEFT.png" alt="Назад" />
                        </a>
                        <span className="postTag marginAutoHorizontal">Комментарии</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts