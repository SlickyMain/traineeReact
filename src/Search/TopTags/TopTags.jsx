import React, { useEffect, useState } from 'react'
import "./TopTags.css"
import { NavLink } from 'react-router-dom'

function TopTags({ destination }) {
    const [topTagsNow, setTopTagsNow] = useState([])
    const token = localStorage.getItem("token")

    useEffect(async () => {
        const tagsHere = await fetch(destination, {
            headers: {
                Authorization: token ? "Bearer " + token : null,
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(async response => {
                if (response.ok) {
                    const result = await response.json()
                    return result
                }
                else {
                    throw new Error(response.statusText)
                }
            })
        setTopTagsNow(tagsHere)
    }, [token, setTopTagsNow])

    const UnpackPictures = (props) => {
        let canChanges = true
        const [arrayPictures, setArrayPictures] = useState([])

        useEffect(async () => {
            if (canChanges) {
                await fetch(`/api/v1/post_list/${props.currentTrend}`, {
                    headers: {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                })
                    .then(async response => {
                        if (response.ok) {
                            let result = await response.json()
                            result = result.splice(0, 6)
                            setArrayPictures(result)
                        }
                        else {
                            throw new Error(response.statusText)
                        }
                    })
            }

            return () => {
                canChanges = false
            }
        }, [props.currentTrend])

        return (
            <div className={`gridFor${arrayPictures.length}`}>
                {
                    arrayPictures.map(post => {
                        return <img key={post.pic} className="imageField" src={`${post.pic}`} alt="Ошибка" />
                    })
                }
            </div>
        )
    }

    return (
        <div>
            <div className="topWrapper d-flex flex-column align-items-center justify-content-end mt-4">
                {
                    topTagsNow.map(trend => {
                        if (trend.name) {
                            return (
                                <div className="grideiner" key={trend.name}>
                                    <div className="nameOfTrend mt-4 mb-2">
                                        <NavLink key={trend.name} to={`/trend/${trend.name}`} className="postTag tagged ms-3">
                                            # {trend.name}
                                        </NavLink>
                                    </div>
                                    <UnpackPictures key={trend.name} currentTrend={trend.name} />
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default TopTags