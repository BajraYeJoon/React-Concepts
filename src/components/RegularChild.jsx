import React, { Component } from "react";

class RegularChild extends Component {
  render() {
    console.log("regcomp");
    return <div>RegularChild {this.props.name}</div>;
  }
}

export default RegularChild;
