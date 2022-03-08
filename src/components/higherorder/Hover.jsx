import React, { Component } from "react";
import higherOrder from "./higherOrder";

class Hover extends Component {
  render() {
    // Destructuring the props for children to access it
    const { moveHandler, count } = this.props;
    return (
      <div>
        <h1 onMouseOver={moveHandler}> Hover {count} times</h1>
      </div>
    );
  }
}

export default higherOrder(Hover, 15);// second parameter as argument
