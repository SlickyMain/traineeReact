import React, { useEffect, useState } from 'react'
import Comments from './Comments/Comments'
import Post from './Post/Post'
import BottomPanel from '../../BottomPanel/BottomPanel'
import ModalWindow from '../ModalWindow/ModalWindow'
import "./Posts.css"

const Posts = (props) => {

    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [commentsIsOpen, setCommentsToOpen] = useState(false)
    const [modalIsOpen, setModalToOpen] = useState(false)
    const [postDescribe, setPostDescribe] = useState({})
    const token = localStorage.getItem("token") || null


    useEffect(() => {
        fetch(props.destination, {
            headers: {
                Authorization: token ? "Bearer " + token : null,
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
    }, [token, props.destination])


    return (
        <div className='container gx-0 marginForPanel'>
            <div className="row gx-0">
                <div className="col-sm-12 col-xl-8 offset-xl-2 d-flex gx-0 flex-column">
                    {
                        posts.map(post =>
                            <Post key={post.pk.toString()} values={{
                                pk: post.pk,
                                author: post.author,
                                author_name: post.author_name,
                                pic: post.pic,
                                likes: post.likes,
                                text: post.text,
                                comments: post.comments,
                                current_user_rate: post.current_user_rate
                            }}
                                setCommentsToOpen={setCommentsToOpen}
                                setPostDescribe={setPostDescribe}
                                setComments={setComments}
                                setModalToOpen={setModalToOpen} />)
                    }
                </div>
            </div>
            <Comments commentsIsOpen={commentsIsOpen} setCommentsToOpen={setCommentsToOpen} postDescribe={postDescribe} comments={comments}
                setComments={setComments} />
            <BottomPanel />
            <ModalWindow modalIsOpen={modalIsOpen}
                setModalToOpen={setModalToOpen} />
        </div>
    )
}

export default Posts