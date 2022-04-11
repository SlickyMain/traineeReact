import './Enter.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Feed from "../Feed/Feed"
import LoginWrapper from './LoginWrapper/LoginWrapper';
import MagicLink from './MagicLink/MagicLink';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';

export default function Enter(props) {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/login" element={<LoginWrapper />} />
                <Route path='/magic_link/login/*' element={<MagicLink isLogin={true} />} />
                <Route path='/magic_link/registration/*' element={<MagicLink isLogin={false} />} />
                <Route path='/search' element={<Search />} />
                <Route path='profile/*' element={<Profile />} />
            </Routes>
        </div>
    )
}

