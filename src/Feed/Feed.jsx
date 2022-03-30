import React, { Component } from 'react'
import "./Feed.css"
import Head from './Head/Head'
import Posts from './Posts/Posts'

export default class Feed extends Component {
  render() {
    return (
      <div>
      <Head />
      <Posts />
      </div>
    )
  }
}
