import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome",
    };
  }

  //Triggers when the button is clicked!!!!!
  changeMessage() {
    this.setState({
      message: "Thank you for Clicking!!",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click here</button>
      </div>
    );
  }
}
export default State;
