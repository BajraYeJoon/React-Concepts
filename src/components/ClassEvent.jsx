import React, { Component } from "react";

class ClassEvent extends Component {
  clickHandle() {
    console.log("clicked(class)");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandle}>Click(Class)</button>
      </div>
    );
  }
}

export default ClassEvent;
