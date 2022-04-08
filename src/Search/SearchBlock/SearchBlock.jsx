import React from 'react'
import "./SearchBlock.css"

function SearchBlock() {
    return (
        <div>
            <form className="form-inline mt-4 d-flex">
                <input className="form-control me-2" type="text" placeholder="Начните поиск" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
            </form>
        </div>
    )
}

export default SearchBlock