import React, { useEffect, useState } from 'react'
import "./Search.css"
import ThreeColumnGrid from './ThreeColumnGrid/ThreeColumnGrid'
import TopTags from './TopTags/TopTags'
import Header from './Header/Header'
import SearchBlock from "./SearchBlock/SearchBlock"
import BottomPanel from '../BottomPanel/BottomPanel'

function Search() {
    const [currentContent, setCurrentContent] = useState("tags")
    const [topPosts, setTopPosts] = useState([])
    const token = localStorage.getItem("token")

    useEffect(() => {
        fetch("/api/v1/post_list/top/?days=10", {
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
            setTopPosts(result)
        })
    }, [token])

    const Fork = ({ content }) => {
        if (content === "tags") {
            return <TopTags destination={"/api/v1/tags/top/?hours=168"} />
        }
        else {
            return <ThreeColumnGrid posts={topPosts} />
        }
    }

    return (
        <div>
            <div className="container gx-0">
                <div className="col-sm-12 col-xl-8 offset-xl-2">
                    <Header title="Поиск" />
                    <SearchBlock />
                    <div className="row mt-2 gx-0">
                        <div className="col d-flex justify-content-center">
                            <ul className="nav nav-tabs justify-content-center">
                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => setCurrentContent("tags")} id="topTags">Теги</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => setCurrentContent("posts")} id="topPosts">Посты</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Fork content={currentContent} />
                </div>
                <BottomPanel />
            </div>
        </div>
    )
}

export default Search