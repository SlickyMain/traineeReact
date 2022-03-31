import React, { useEffect, useState } from 'react'
import Post from './Post/Post'
import "./Posts.css"

const Posts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`/api/v1/post_list/`)
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
        </div>
    )
}

export default Posts