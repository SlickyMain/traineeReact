import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <div className="row gx-0 m-1 ms-2">
                <div className="col-7">
                    <div className="d-flex align-items-end mt-2 pt-1">
                        <NavLink to={"/"}>
                            <img src="/static/assets/VectorLEFT.png" alt="Назад" />
                        </NavLink>
                        <span className="postTag ms-3">{props.title}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header