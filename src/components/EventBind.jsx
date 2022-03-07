import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello there",
    };

    // this.changeMessage = this.changeMessage.bind(this);
  }
   
  // this keyword is resolved using the arrow or bind as it will globally recognized the this keyword

  //   changeMessage() {
  //     this.setState({
  //       message: "bye bye",
  //     });
  //   }

  changeMessage = () => {
    this.setState({
      message: "bye bye",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        {/* <button onClick={() => this.changeMessage()}>Click here</button> */}
        <button onClick={this.changeMessage}>Click here</button>
      </div>
    );
  }
}

export default EventBind;
