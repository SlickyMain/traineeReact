import React from 'react'
import "./Trend.css"
import HeaderWithButton from './HeaderWithButton/HeaderWithButton'
import Posts from '../Feed/Posts/Posts'
import { useLocation } from 'react-router-dom'

function Trend() {

    const currentTrend = useLocation().pathname.split("/").pop()

    return (
        <div className="container">
            <HeaderWithButton currentTrend={currentTrend} buttonText="Подписаться" />
            <Posts destination={`/api/v1/post_list/${currentTrend}`} />
        </div>
    )
}

export default Trend