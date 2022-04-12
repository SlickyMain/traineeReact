import React from 'react'
import "./HeaderWithButton.css"
import { NavLink } from 'react-router-dom'
import HeaderWithBackButton from '../../SetAvatar/HeaderWithBackButton/HeaderWithBackButton'

function HeaderWithButton(props) {
    return (
        <div className="topActions mt-3 mb-4">
            <div className="row gx-0">
                <div className="col-7 d-flex align-items-center">
                    <HeaderWithBackButton linkTo="/" text={`# ${decodeURI(props.currentTrend)}`} />
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <button className="subscribeButton">
                        {props.buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeaderWithButton