import React, { Component } from "react";

class Setstate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  incrementValue() {
    //setstate is async so clg will execute first!!!!

    // this.setState({
    //   //increases the value by 1 when clicked!!!!
    //   value: this.state.value + 1,
    // });

    // To update with the previous value, always use the prevvalue as
    // parameter so that we can update it on our choice
    this.setState((prevValue) => ({
      //prev value: 0
      value: prevValue.value + 1,
    }));
  }

  incrementToTwo() {
    this.incrementValue();
    this.incrementValue();
  }

  render() {
    return (
      <div>
        <h1>Value - {this.state.value} </h1>
        <button onClick={() => this.incrementToTwo()}>
          Click here to increment the value
        </button>
      </div>
    );
  }
}
export default Setstate;
