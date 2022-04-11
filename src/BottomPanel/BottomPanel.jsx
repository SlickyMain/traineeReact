import React from 'react'
import "./BottomPanel.css"
import { NavLink } from 'react-router-dom'
import { parseJwt} from "../modules/parseJwt"

function BottomPanel() {

    const token = localStorage.getItem("token") || null
    const id = token ? parseJwt(token).id : null

    return (
        <div>
            <div className="menuActions">
                <div className="row customRow gx-0">
                    <div className="col-12 pt-2 d-flex justify-content-around align-items-center">
                        <div className="toNormalSize">
                            <NavLink to={"/"} className="maximumWidthHeight">
                                <img src="/static/assets/Home.svg" width="30px" height="30px" alt="" />
                            </NavLink>
                        </div>
                        <div className="toNormalSize">
                            <NavLink to={"/search"} className="maximumWidthHeight">
                                <img src="/static/assets/Search.svg" width="30px" height="30px" alt="" />
                            </NavLink>
                        </div>
                        <NavLink to={"/post/new"} className="yBorder">
                            <img src="/static/assets/Plus.svg" width="30px" height="30px" alt="" />
                        </NavLink>
                        <div className="toNormalSize">
                            <NavLink to={"/chat"} className="maximumWidthHeight">
                                <img src="/static/assets/Chat.svg" width="30px" height="30px" alt="" />
                            </NavLink>
                        </div>
                        <div className="toNormalSize">
                            <NavLink to={id ? `/profile/${id}` : "/login"}>
                                <img src="/static/assets/person.svg" width="30px" height="30px" alt="" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomPanel