import React, { Component } from 'react'
import "./Posts.css"

export default class Post extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <template id='template'>
          <div className="row d-flex justify-content-around">
            <div id='postAuthor'>
            </div>
            <div className='moreAct'>
              ...
            </div>
          </div>
          <div className="image">
            <img src="" alt="No image" />
          </div>
          <div className="panel">
            Тут позже будут действия
          </div>
          <div className="description">
            Описание поста
          </div>
          <div className="comments">
            <a href="#asg">Комментарии</a>
          </div>
        </template>
        <div id='parentNode'>
          <button onClick={this.clicker}>
            Click here
          </button>
        </div>
      </div>
    )
  }

  showPosts = () => {
    const template = document.getElementById("template")
    const parentNode = document.getElementById("parentNode")
    for (let i = 0; i < 10; i++) {
      let post = template.content.cloneNode(true)
      post.querySelector("#postAuthor").innerHTML = `i`
      parentNode.append(post)
    }
  }
}
