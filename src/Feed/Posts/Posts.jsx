import React, { useEffect, useState } from 'react'
import Comments from './Comments/Comments'
import Post from './Post/Post'
import "./Posts.css"

const Posts = (props) => {

    const [posts, setPosts] = useState([])
    const [commentsIsOpen, setCommentsToOpen] = useState(false)
    const [postDescribe, setPostDescribe] = useState({})
    const token = localStorage.getItem("token") || null

    useEffect(() => {
        fetch(`/api/v1/post_list/`, {
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
    }, [])

    return (
        <div className='container gx-0'>
            <div className="row gx-0">
                <div className="col">
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
                            setPostDescribe={setPostDescribe} />)
                    }
                </div>
            </div>
            <Comments commentsIsOpen={commentsIsOpen} setCommentsToOpen={setCommentsToOpen} postDescribe={postDescribe} />
        </div>
    )
}

export default Posts