import React from 'react'
import { NavLink } from 'react-router-dom'

const MakeLinkToTrendIfTag = (props) => {
    if (props.text) {
        let splittedDesc = props.text.split(" ")
        const willChecked = splittedDesc.map(word => {
            if (word.startsWith("#") && word.length > 1) {
                return <NavLink key={word} to={`/trend/${word.replace(/^[#]/, "")}`} className="underlined">
                    {word}
                </NavLink>
            }
            else {
                return " " + word + " "
            }
        })
        return willChecked
    }
    else {
        return null
    }

}

export default MakeLinkToTrendIfTag