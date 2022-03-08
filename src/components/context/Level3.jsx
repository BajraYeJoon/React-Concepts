import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class Level3 extends Component {
  render() {
    return (
      //To consume the value object with the arrow function is passed with custom parameter to consume the given value
      <UserConsumer>
        {(name) => {
          return <div>Hello {name}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default Level3;
