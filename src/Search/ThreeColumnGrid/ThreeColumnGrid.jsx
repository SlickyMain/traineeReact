import React from 'react'
import "./ThreeColumnGrid.css"

function ThreeColumnGrid(props) {

return (
    <div className='w-100 mt-3'>
        <div className="gridAttempt" id="parentNode">
            {
                props.posts.map(post => {
                    return <img key={post.pic} className="threeImageField" src={`${post.pic}`} alt="Ошибка" />
                })
            }
        </div>
    </div>
)
}

export default ThreeColumnGrid