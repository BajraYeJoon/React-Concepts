import axios from "axios";
import React, { Component } from "react";

class PostRequest extends Component {
  constructor(props) {
    super(props);

    //Initialization
    this.state = {
      id: "",
      title: "",
      body: "",
    };
  }

  // This handle the change in the value that is written and assigned to the name attribute
  postHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //on submit post is posted on the server and reponse is returned
  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => console.log(response));
    console.log(this.state); // shows the data in the initial after what is written
  };

  render() {
    const { id, title, body } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <input type="text" name="id" value={id} onChange={this.postHandler} />
        </div>

        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.postHandler}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.postHandler}
          />
        </div>
        <button type="submit">Post</button>
      </form>
    );
  }
}

export default PostRequest;
