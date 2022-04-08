import React from 'react'
import "./Feed.css"
import Head from './Head/Head'
import Posts from './Posts/Posts'

export default function Feed(props) {
  return (
    <div>
      <Head />
      <Posts destination="/api/v1/post_list/" />
    </div>
  )
}
