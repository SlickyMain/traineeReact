import './Enter.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Feed from "../Feed/Feed"
import LoginWrapper from './LoginWrapper/LoginWrapper';

export default function Enter(props) {

    return (
        <div>
            <Routes>
                <Route path="/feed" element={<Feed />} />
                <Route path="/" element={<LoginWrapper />} />
            </Routes>
        </div>
    )
}

