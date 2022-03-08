import React, { Component } from 'react'
import axios from 'axios'


class Post extends Component {
    constructor(props) {
      super(props)
    
      // Initial state
      this.state = {
         posts: [],
         errorMessage: ""
      }
    }

    // request to server and rerenders the page after the render is completed due to lifecycle methods

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(reponse => {     //promise to keep the responded data into empty posts
            this.setState({
                posts: reponse.data
            })
        }).catch(error => {
            this.setState({
                errorMessage: "Cannot get the posts"
            })
        })
    }


  render() {
      const {posts, errorMessage} = this.state
    return (
      <div><h1>Post from the server</h1>
       
       {
           //if length === 0 then null otherwise show the titles
           posts.length ?
           posts.map(post => <div><h4 key={post.id}>{post.title}</h4></div>) : null
       }
      {
          errorMessage ? <div>{errorMessage}</div> : null
      }
      </div>
    )
  }
}

export default Post
