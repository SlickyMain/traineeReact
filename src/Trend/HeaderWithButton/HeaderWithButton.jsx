import React from 'react'
import "./HeaderWithButton.css"
import { NavLink } from 'react-router-dom'

function HeaderWithButton(props) {
    return (
        <div className="topActions mt-3 mb-4">
            <div className="row">
                <div className="col-7 d-flex align-items-center">
                    <NavLink to={"/"} className="pb-1">
                        <img src="/static/assets/VectorLEFT.png" alt="Назад" />
                    </NavLink>
                    <span className="postTag ms-3"># {decodeURI(props.currentTrend)}</span>
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <button className="subscribeButton">
                        Подписаться
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeaderWithButton