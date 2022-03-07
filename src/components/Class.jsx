import React, { Component } from "react";

class Class extends Component {
  render() {
    //Classes takes this.props
    const { message } = this.props;
    return (
      <div>
        <h1>This is class component</h1>
        <p>{message}</p>
      </div>
    );
  }
}

export default Class;
