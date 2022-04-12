import React from 'react'
import "./HeaderWithBackButton.css"
import { NavLink } from 'react-router-dom'

function HeaderWithBackButton(props) {
    return (
        <div className='d-flex align-items-center'>
            <NavLink to={props.linkTo} className="pb-1">
                <img src="/static/assets/VectorLEFT.png" alt="Назад" />
            </NavLink>
            <span className="postTag ms-3">{props.text}</span>
        </div>
    )
}

export default HeaderWithBackButton