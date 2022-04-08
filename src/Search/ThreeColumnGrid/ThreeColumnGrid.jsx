import React, { useEffect, useState } from 'react'
import "./ThreeColumnGrid.css"

function ThreeColumnGrid({ destination }) {
    const [posts, setPosts] = useState([])
    const token = localStorage.getItem("token")

    useEffect(() => {
        fetch(destination, {
            headers: {
                Authorization: token ? "Bearer " + token : null,
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error(response.statusText)
            }
        })
        .then(result => {
            setPosts(result)
        })
}, [destination, token])


return (
    <div className='w-100 mt-3'>
        <div className="gridAttempt" id="parentNode">
            {
                posts.map(post => {
                    return <img key={post.pic} className="threeImageField" src={`${post.pic}`} alt="Ошибка" />
                })
            }
        </div>
    </div>
)
}

export default ThreeColumnGrid