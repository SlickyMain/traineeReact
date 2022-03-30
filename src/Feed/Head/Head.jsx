import React, { Component } from 'react'
import "./Head.css"

export default class Head extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className="col-4 mt-3">
                        <h5>Мемасница</h5>
                    </div>
                    <div className="col-8 mt-3">
                        <div className="topAct">
                            <a href="#as" className='topLink'>Выйти</a>
                            <a href="#as" className='topLink'>Профиль</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

