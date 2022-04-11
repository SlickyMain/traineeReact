import React from 'react'
import "./HeaderWithBurger.css"
import { NavLink } from 'react-router-dom'

function HeaderWithBurger(props) {
    return (
        <div>
            <div className="topActions">
                <div className="row gx-0 my-1 ps-2">
                    <div className="col-7 d-flex align-items-start">
                        <div className="d-flex align-items-end mt-2 pt-1">
                            <NavLink to={"/"}>
                                <img src="/static/assets/VectorLEFT.png" alt="Назад" />
                            </NavLink>
                            <span className="postTag ms-3">{props.pageTitle}</span>
                        </div>
                    </div>
                    <div className="col-5 d-flex justify-content-end">
                        <nav className="navbar navbar-expand-lg justify-content-end">
                            <button className="navbar-toggler collapsed" type="button" data-bs-target="#burgerMenu" data-bs-toggle="collapse" aria-controls="navbarScroll" aria-label="Toggle navigation" aria-expanded="false">
                                <img src="/static/assets/Menu.svg" alt="" />
                            </button>
                            <div id="burgerMenu" className="navbar-collapse collapse">
                                <ul className="navbar-nav ms-5">
                                    {
                                        props.burgerPoints.map(point => <li key={point} className='nav-link'>{point}</li>)
                                    }
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderWithBurger