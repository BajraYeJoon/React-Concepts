import React, { Component } from "react";

class Class extends Component {
  render() {
    return (
    <div>
      <h1>This is class component</h1>
      <p>{this.props.message}</p> //Classes takes this.props
    </div>
    )
  }
}

export default Class;